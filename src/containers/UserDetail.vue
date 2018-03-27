<template>
    <div class="container">
      <span class="is-size-4" v-if="selectedUser">profile for : {{selectedUser.name}}</span>
    </div>
</template>

<script>
export default {
  name: "UserDetail",
  computed: {
    selectedUser() {
      return this.$store.getters.selectedUser;
    }
  },
  created() {
    let id = this.$route.params.id;
    this.$store.dispatch("loadUser", id);
  }
};
</script>

<style scoped>

</style>