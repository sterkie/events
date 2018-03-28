<template>
     <v-toolbar flat :style="{'background-color': 'white'}">
    <v-container>
      <v-layout row >
        <v-flex xs12>
          <router-link to="/" class="app-title title">GATHER</router-link></v-flex>
          <v-spacer></v-spacer>
          <v-toolbar-items class="hidden-sm-and-down">
            <v-btn flat :to="'/events'">Events</v-btn>
            <v-btn flat :to="'/users'" v-if="isAuthenticated">Users</v-btn>
            <v-btn flat :to="'/register'" v-if="!isAuthenticated">Register</v-btn>
            <v-btn flat :to="'/login'" v-if="!isAuthenticated">Log in</v-btn>
            <v-btn flat @click="logOut" v-if="isAuthenticated">Log Out</v-btn>
          </v-toolbar-items>
      </v-layout>
    </v-container>
  </v-toolbar>
</template>

<script>
export default {
  methods: {
    logOut() {
      this.$store.dispatch("logOutUser");
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
.app-title {
  text-decoration: none;
  color: #313131;
  letter-spacing: 0.2rem;
}
</style>