<template>
    <div class="container">
        <div class="page--header">
            Upcoming events
        </div>
        
    </div>
</template>

<script>
export default {
  computed: {
    events() {
      return this.$store.getters.events;
    }
  },
  methods: {
    loadEvent(eventId) {
      this.$router.push("/events/" + eventId);
    }
  }
};
</script>