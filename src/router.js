import Vue from "vue";
import Router from "vue-router";

// Styles

import "./assets/main.scss";

//

// import Home from "./containers/Home.vue";
import Home from "./containers/Home.vue";
import Dashboard from "./containers/Dashboard.vue";
import Register from "./containers/Register.vue";
import Login from "./containers/Login.vue";

Vue.use(Router);

const routes = [
  { path: "/", component: Home },
  { path: "/dashboard", component: Dashboard },
  { path: "/register", component: Register },
  { path: "/login", component: Login }
];

export default new Router({
  routes: routes,
  mode: "history"
});
