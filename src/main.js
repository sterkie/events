import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import moment from "./filters/moment";
import store from "./store/";
import { auth } from "./firebase";
import Vuetify from "vuetify";

import "./styles/main.styl";

Vue.config.productionTip = false;
Vue.filter("moment", moment);
Vue.use(Vuetify);

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
