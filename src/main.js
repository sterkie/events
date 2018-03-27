import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/";
import { auth } from "./firebase";

import "./assets/main.scss";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
  created() {
    auth.onAuthStateChanged(user => {
      if (user) {
        this.$store.dispatch("autoLog", user);
        this.$store.dispatch("loadAllEvents");
        this.$store.dispatch("loadUserDetails");
      }
    });
  }
}).$mount("#app");
