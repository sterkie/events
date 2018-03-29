<template>
    <div class="container has-text-centered">
        <div class="page-header">
            <h1 class="title is-size-2 has-text-weight-light is-uppercase">Upcoming events</h1>
        </div>
        <div class="columns box event-box" v-for="event in events" :key="event.id" @click="loadEvent(event.id)">

           <div class="column is-3">
    <p class="title is-7">What?</p>
    <p class="subtitle is-6">{{event.title}}</p>
  </div>
<div class="column is-3">
    <p class="title is-7">When?</p>
    <p class="subtitle is-6">Voting in progress.</p>
  </div>
  <div class="column is-3">
    <p class="title is-7">Where?</p>
    <p class="subtitle is-6">{{event.location}}</p>
  </div>
  <div class="column is-3">
    <p class="title is-7">Initiator</p>
    <p class="subtitle is-6">{{event.creatorName}}</p>
  </div>
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

<style scoped>
.event-box {
  width: 100%;
  padding: 8px;
  margin: 0 auto;
  border-radius: 1px;
  margin-bottom: 16px;
}
.event-box:hover {
  cursor: pointer;
  border-left: 2px solid aqua;
}
</style>
