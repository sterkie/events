import Vue from "vue";
import Vuex from "vuex";

import user from "./user";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {},
  modules: {
    user
  }
});

export default store;
