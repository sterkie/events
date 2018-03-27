import { auth, db } from "../../firebase";

const store = {
  events: []
};

const mutations = {
  createEvent(state, payload) {
    state.events.push(payload);
  }
};

const actions = {
  createEvent({ commit }, payload) {}
};

const getters = {
  events(state) {
    return state.events;
  }
};

export default {
  store,
  mutations,
  actions,
  getters
};
