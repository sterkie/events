<template>
 <div>
     <div class="container">
         <nav class="level">
             <div class="level-left">
                 <router-link to="/" class="is-size-4">EVENTS</router-link>
             </div>
             <div class="level-right">
                     <div class="navitem" v-if="!isAuthenticated">
                         <router-link to="/login">Log in</router-link>
                     </div>
                     <div class="navitem" v-if="!isAuthenticated">
                         <router-link to="/register">Register</router-link>
                     </div>
                 <div class="navitem" v-if="isAuthenticated">
                     <a @click="logOut">Log Out</a>
                 </div>
             </div>
         </nav>
     </div>
 </div>
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
    }
  }
};
</script>

<style scoped>
.navitem {
  margin: 6px;
}
.navitem:hover {
  border-bottom: 1px solid orchid;
}
</style>