<template>
    <div class="container">
        <form @submit.prevent="createEvent">
            <div class="field">
                <label class="label">Why</label>
                <input type="text" placeholder="Enter a reason for the event..." class="input" v-model="newEvent.title" />
            </div>
            <div class="field">
                <label class="label">Where</label>
                <input type="text" placeholder="Enter a location for the event" class="input" v-model="newEvent.location" />
            </div>
            <div class="field">
                <label class="label">When</label>
                <input type="text" placeholder="Enter a reason for the event..." class="input" v-model="newEvent.when" />
            </div>
            <div class="field">
                <textarea rows="10"  placeholder="Give some extra information about the event" v-model="newEvent.extra"/>
            </div>
            <div class="field">
                <button class="button is-success" type="submit">Create Event!</button>
                <button class="button is-danger" @click="cancelCreate">Cancel</button>
            </div>
        </form>
    </div>
</template>

<script>
export default {
  name: "CreateEvent",
  data() {
    return {
      newEvent: {
        title: "",
        location: "",
        when: "",
        extra: ""
      }
    };
  },
  methods: {
    createEvent() {
      const tempEvent = {
        title: this.newEvent.title,
        location: this.newEvent.location,
        when: this.newEvent.when,
        extra: this.newEvent.extra
      };
      console.log("event created", tempEvent);
      this.$store.dispatch("createEvent", tempEvent);
    },
    cancelCreate() {
      // go back to previous page
      this.$router.go(-1);
    }
  }
};
</script>

<style scoped>

</style>