<template>
    <div class="container">
        <h3 class="title">
            the events page!
        </h3>
        <div v-for="event in events" :key="event.id">
            {{event.title}} - {{event.location}} - {{event.when}} - {{event.createdAt}} - {{event.creator}}
        </div>
    </div>
</template>

<script>
export default {
  computed: {
    events() {
      return this.$store.getters.events;
    }
  }
};
</script>

<style scoped>

</style>