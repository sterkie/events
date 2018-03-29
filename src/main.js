import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/";
import { auth } from "./firebase";
import DateFilter from "./filters/date";

Vue.config.productionTip = false;

import "./assets/main.scss";

Vue.filter("date", DateFilter);

new Vue({
  router,
  store,
  render: h => h(App),
  created() {
    auth.onAuthStateChanged(user => {
      if (user) {
        this.$store.dispatch("loadAllEvents");
        this.$store.dispatch("autoLog", user);
        this.$store.dispatch("loadUserDetails");
      }
    });
  }
}).$mount("#app");
