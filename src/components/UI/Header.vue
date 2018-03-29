<template>
     <div class="navbar is-transparent">
         <div class="container">
             <div class="navbar-brand">
                 <router-link to="/" class="app-title title has-text-weight-light">GATHERER <small class="beta is-size-6">beta</small></router-link>
             </div>
             <div class="navbar-menu">
                 <div class="navbar-end">
                     <router-link to="/users" class="navbar-item">Users</router-link>
                     <router-link to="/events" class="navbar-item">Events</router-link>
                     <router-link to="/login" class="navbar-item" v-if="!isAuthenticated">Log In</router-link>
                     <router-link to="/register" class="navbar-item" v-if="!isAuthenticated">Register</router-link>
                     <a @click="logOut" class="navbar-item" v-if="isAuthenticated"> Log Out </a>
                 </div>
             </div>
         </div>
     </div>
</template>

<script>
export default {
  methods: {
    logOut() {
      this.$store.dispatch("logOutUser");
      this.$router.push("/");
    }
  },
  computed: {
    isAuthenticated() {
      return (
        this.$store.getters.user !== null &&
        this.$store.getters.user !== undefined
      );
    },
    user() {
      return this.$store.getters.user;
    }
  }
};
</script>

<style scoped>
.beta {
  color: aqua;
}
</style>
