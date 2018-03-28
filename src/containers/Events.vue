<template>
    <div class="container">
        <div class="page--header">
            Upcoming events
        </div>
        
        <v-card class="event-list--card">
          <v-container>
            <v-layout v-for="event in events" :key="event.id" @click="loadEvent(event.id)" row wrap>
              <v-flex>{{event.title}}</v-flex>
            </v-layout>
          </v-container>
        </v-card>

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

<style scoped>
.event-list--card {
  max-width: 40%;
  padding: 8px 0px 8px 0px;
}
</style>