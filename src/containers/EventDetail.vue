<template>
    <div>
        the event detail page
    </div>
</template>

<script>
export default {
  name: "EventDetail",
  computed: {
    event() {
      return this.$store.getters.selectedEvent;
    }
  }
};
</script>

<style scoped>

</style>