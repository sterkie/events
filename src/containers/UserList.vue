<template>
    <div class="container">
        <h3 class="title">User List</h3>
        <div>
            <div v-for="user in loadedUsers" :key="user.id">
                {{user.name}} - <button class="button is-success is-small" @click="loadUser(user.id)">details</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "UserList",
  methods: {
    loadUser(id) {
      this.$router.push("/users/" + id);
    }
  },
  computed: {
    loadedUsers() {
      return this.$store.getters.users;
    }
  },
  created() {
    this.$store.dispatch("loadAllUsers");
  }
};
</script>

<style scoped>

</style>