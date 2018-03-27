<template>
    <div class="container">
        <form @submit.prevent="register">
            <div class="field">
                <input type="text" v-model="email" placeholder="Enter email" class="input">
            </div>
            <div class="field">
                <input type="text" v-model="name" placeholder="Enter name" class="input">
            </div>
            <div class="field">
                 <input type="password" v-model="password" placeholder="Enter password" class="input">
            </div>
            <div class="field">
                <button class="button is-outlined is-primary" type="submit">Register</button> or 
                <button class="button is-outlined is-danger" @click="cancelRegister">Cancel</button>
            </div>
        </form>
    </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      name: ""
    };
  },
  computed: {
    user() {
      this.$store.getters.user;
    }
  },
  methods: {
    register() {
      this.$store.dispatch("registerUser", {
        email: this.email,
        password: this.password,
        name: this.name
      });
    },
    cancelRegister() {
      this.$router.go(-1);
    }
  },
  watch: {
    user(value) {
      if (value !== null && value !== undefined) {
        this.$router.push("/");
      }
    }
  }
};
</script>

<style scoped>

</style>