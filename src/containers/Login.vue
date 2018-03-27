<template>
    <div class="container">
        <form @submit.prevent="login">
            <div class="field">
                <input type="text" v-model="email" placeholder="Enter email">
            </div>
            <div class="field">
                 <input type="text" v-model="password" placeholder="Enter password">
            </div>
            <div class="field">
                <button class="button is-outlined" type="submit">Login</button> or 
                <button class="button is-outlined is-danger" @click="cancelLogin">Cancel</button>
            </div>
        </form>
    </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    login() {
      this.$store.dispatch("logInUser", {
        email: this.email,
        password: this.password
      });
    },
    cancelLogin() {
      this.$router.go(-1);
    }
  }
};
</script>

<style scoped>

</style>