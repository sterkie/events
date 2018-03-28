<template>
  <v-app>
     <Header />
    <router-view/>
  </v-app>
</template>

<style>
.page--header {
  margin-bottom: 18px;
}
</style>

<script>
import Header from "./components/UI/Header.vue";

export default {
  components: {
    Header
  }
};
</script>
