<template>
  <div class="container">
    <section class="hero is-primary is-small">
      <div class="hero-body">
        <nav class="level">
          <div class="level-item has-text-centered">
            <div class="">
              <p class="heading">Event:</p>
              <p class="title">{{event.title}}</p>
            </div>
          </div>
          <div class="level-item has-text-centered">
            <div class="">
              <p class="heading">Location:</p>
              <p class="title">{{event.location}}</p>
            </div>
          </div>
          <div class="level-item has-text-centered">
            <div class="">
              <p class="heading">Created by:</p>
              <p class="title">{{event.creatorName}}</p>
            </div>
          </div>
        </nav>
      </div>
    </section>

    <section class="section">
      <h3 class="title">Extra info.</h3>
      <p class="content">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem, officiis libero voluptatibus dolor quae corrupti quis ut iure porro odit voluptates ratione et? Atque adipisci deserunt velit ducimus aut blanditiis.</p>
    </section>
    <div class="has-text-centered">
      <h3 class="is-size-2 has-text-weight-light">Date is being decided...</h3>
    </div>
    <DateDecider :options="event.dateOptions" :participants="event.participants" />
  </div>
</template>

<script>
import DateDecider from "../components/DateDecider.vue";
export default {
  name: "EventDetail",
  components: { DateDecider },
  props: ["id"],
  computed: {
    event() {
      return this.$store.getters.loadEvent(this.id);
    }
  }
};
</script>

<style scoped>
.page-header {
}
.box {
  border-radius: 1px;
}
</style>