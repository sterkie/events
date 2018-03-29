<template>
    <div>
        <div id="app" class="">
            <div class="deciderContainer box">
                <div class="columns">
                    <div class="column is-one-quarter"></div>
                    <div class="column has-text-centered" v-for="(option,index) in options" :key="index">{{option.date}}</div>
                </div>
                <div class="columns" v-for="(person) in participants" :key="person.id">
                    <div class="column has-text-centered person-column">
                        {{person.name}}
                    </div>
                    <div class="column has-text-centered cell" v-for="(option, index) in options" :key="index">
                        <input type="checkbox" :value="person.name" v-model="option.participants">
                    </div>
                </div>

            </div>

        </div>
    </div>
</template>

<script>
export default {
  name: "DateDecider",
  props: ["participants", "dateOptions"],
  data() {
    return {
      participants: [
        { id: 1, name: "Stefaan" },
        { id: 2, name: "Joppe" },
        { id: 3, name: "Hade" },
        { id: 4, name: "levi" }
      ],
      options: [
        { date: "April 19, 2018", participants: [] },
        { date: "May 23, 2018", participants: [] },
        { date: "May 24, 2018", participants: [] }
      ]
    };
  }
};
</script>

<style scoped>
.deciderContainer {
  width: 480px;
  margin: 32px auto;
  font-size: 12px;
}

.person-column {
  border-right: 1px solid aqua;
  font-size: 12px;
}

#app {
  font-size: 12px;
}

.cell {
  background-color: rgb(120, 216, 120);
  margin: 2px;
}
</style>