import { db } from "../../firebase";

const state = {
  events: [],
  selectedEvent: {}
};

const mutations = {
  createEvent(state, payload) {
    state.events.push(payload);
  },
  loadedEvents(state, payload) {
    state.events = payload;
  }
};

const actions = {
  createEvent({ commit, getters }, payload) {
    const tempEvent = {
      creator: getters.user.id,
      title: payload.title,
      location: payload.location,
      when: payload.when,
      extra: payload.extra,
      createdAt: new Date(),
      status: "pending"
    };
    db
      .collection("events")
      .add(tempEvent)
      .then(event => {
        console.log("new event added with ID: ", event.id);
        commit("createEvent", tempEvent);
      })
      .catch(err => console.log(err));
  },
  loadAllEvents({ commit }) {
    db
      .collection("events")
      .get()
      .then(snapshot => {
        const events = [];
        snapshot.forEach(event => {
          const tempEvent = {
            id: event.id,
            creator: event.data().creator,
            title: event.data().title,
            location: event.data().location,
            when: event.data().when,
            extra: event.data().extra,
            createdAt: event.data().createdAt,
            status: event.data().status
          };
          events.push(tempEvent);
          commit("loadedEvents", events);
        });
      })
      .catch(err => console.log(err));
  }
};

const getters = {
  events(state) {
    return state.events;
  },
  loadEvent(state) {
    return eventId => {
      return state.events.find(event => {
        return event.id === eventId;
      });
    };
  }
};

export default {
  state,
  mutations,
  actions,
  getters
};
