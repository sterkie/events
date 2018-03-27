<template>
  <div id="app">
    <Header />
    <router-view/>
  </div>
</template>

<style lang="scss">

</style>

<script>
import Header from "./components/UI/Header.vue";

export default {
  components: {
    Header
  }
};
</script>
