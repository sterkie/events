<template>
    <div class="container">
        the event detail page for {{event.title}}
    </div>
</template>

<script>
export default {
  name: "EventDetail",
  props: ["id"],
  computed: {
    event() {
      return this.$store.getters.loadEvent(this.id);
    }
  }
};
</script>

<style scoped>

</style>