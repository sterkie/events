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
      creatorId: getters.user.id,
      creatorName: getters.user.name,
      title: payload.title,
      location: payload.location,
      body: payload.body,
      suggestedDates: payload.suggestedDates,
      createdAt: new Date(),
      status: "pending"
    };
    db
      .collection("events")
      .add(tempEvent)
      .then(event => {
        console.log("new event added with ID: ", event.id);
        commit("createEvent", { ...tempEvent, id: event.id });
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
            creatorId: event.data().creatorId,
            creatorName: event.data().creatorName,
            title: event.data().title,
            location: event.data().location,
            suggestedDates: event.data().suggestedDates,
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
