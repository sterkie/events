<template>
  <div class="container">
    <div class="dp-mask" v-show="panelShow" @click="panelShow = false"></div>
    <div class="selected-date" @click="panelShow = !panelShow">
      <div style="display: flex;flex-wrap: wrap;" v-if="multi">
        <div class="sel-values" v-for="(item,index) in selected" :key="index" >
          {{item.toLocaleDateString()}}
        </div>
      </div>
      <div v-else>
        {{selected ? selected.toLocaleDateString() : ''}}
      </div>
    </div>
    <transition name="smooth">
      <div class="pick-panel" v-show="panelShow">
        <div class="dp-header">
          <div class="btn btn-link last-year" @click="seleYear--"></div>
          <div class="btn btn-link last-month" @click="changeMonth(-1)"></div>
          <div class="btn btn-link sele-year">
            {{seleYear}}
          </div>
          <div class="btn btn-link sele-month">
            {{seleMonth+1}}
          </div>
          <div class="btn btn-link next-month" @click="changeMonth(1)"></div>
          <div class="btn btn-link next-year" @click="seleYear++"></div>
        </div>
        <div class="dp-body">
          <div class="cal-container">
            <div class="cal-item" v-for="day in display.days" :key="day">{{day}}</div>
            <div class="cal-item" 
            @click="toggleSelect(item)" 
            v-for="(item,index) in renderCalendar" :key="index" 
            :class="[item.iscur? 'cal-enable' : 'cal-disable', selectIndex(item) >= 0  ? 'cal-select' : '']">
              {{item.label}}
            </div>
          </div>
        </div>
        <div class="dp-footer" v-show="multi">
          <div class="btn btn-cancel" @click="cancelSelect">{{display.cancel}}</div>
          <div class="btn btn-ok" @click="submitSelect(selected)">{{display.ok}}</div>
        </div>
      </div>
    </transition>
  </div>
</template>

<style>
.dp-mask {
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
}
.selected-date {
  cursor: pointer;
  min-height: 28px;
  padding: 3px 10px;
  border-radius: 3px;
  border: 1px solid rgb(191, 203, 217);
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  min-width: 195px;
  max-width: 230px;
}
.pick-panel {
  width: 380px;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #48576a;
  border: 1px solid #d1dbe5;
  box-shadow: 0 2px 6px #ccc;
  background: #fff;
  border-radius: 2px;
  line-height: 20px;
  margin: 5px 0;
  z-index: 10;
  font-size: 12px;
}

.last-year:before {
  content: "<<";
}
.last-month:before {
  content: "<";
}
.next-month:before {
  content: ">";
}
.next-year:before {
  content: ">>";
}
.btn {
  cursor: pointer;
  padding: 3px;
  margin: 0 8px;
}

.btn-link:hover {
  color: #61c3ff;
}
.dp-header {
  display: flex;
}
.dp-footer {
  width: 90%;
  display: flex;
  justify-content: flex-end;
  padding: 8px;
  margin: 8px;
  border-top: 1px solid aqua;
}

.cal-container {
  width: calc(7*46px);
  display: flex;
  flex-wrap: wrap;
}

.cal-item {
  width: 44px;
  height: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1px;
}
.cal-enable {
  cursor: pointer;
}
.cal-enable:hover {
  background-color: #e4e8f1;
}
.cal-disable {
  color: #d4d8d1;
  cursor: default;
}
.cal-select {
  background-color: #61c3ff;
}

.btn-ok {
  color: #61c3ff;
  /* font-weight: bold; */
  font-size: 1rem;
}
.sel-values {
  background-color: rgba(32, 160, 255, 0.1);
  border-color: rgba(32, 160, 255, 0.2);
  color: #20a0ff;
  height: 24px;
  line-height: 24px;
  box-sizing: border-box;
  font-size: 12px;
  margin: 3px;
  padding: 0 5px;
  border-radius: 3px;
}
.smooth-enter-active {
  transition: all 0.5s ease-in-out;
}
.smooth-leave-active {
  transition: all 0.5s ease-in-out;
}
.smooth-enter,
.smooth-leave-to {
  transform: translateY(-10px);
  opacity: 0;
}
</style>



<script>
export default {
  name: "DatePicker",
  data() {
    return {
      panelShow: false,
      seleDate: new Date(),
      seleYear: new Date().getFullYear(),
      seleMonth: new Date().getMonth()
    };
  },
  props: {
    multi: {
      type: Boolean,
      default: true
    },
    value: {
      type: Array | String | Date,
      default: []
    },
    disp: {
      type: Array,
      default: function() {
        return [
          "Sun",
          "Mon",
          "Tue",
          "Wed",
          "Thu",
          "Fri",
          "Sat",
          "Year",
          "Month",
          "Cancel",
          "Ok"
        ];
      }
    }
  },
  computed: {
    renderCalendar: function() {
      let firDay = 0 - new Date(this.seleYear, this.seleMonth, 1).getDay() + 1;
      let res = [];
      for (let i = firDay, index = 0; index < 42; i++, index++) {
        let day = new Date(this.seleYear, this.seleMonth, i, 8);
        let calObj = {
          label: day.getDate(),
          date: day,
          iscur: day.getMonth() === this.seleMonth
        };
        res.push(calObj);
      }
      return res;
    },
    selected: function() {
      return this.value;
    },
    display: function() {
      var d = this.disp;
      return {
        days: d.slice(0, 7),
        year: d[7],
        month: d[8],
        cancel: d[9],
        ok: d[10]
      };
    }
  },
  methods: {
    selectIndex: function(item) {
      if (!this.multi || !this.selected) {
        return -1;
      }
      for (let i = 0; i < this.selected.length; i++) {
        if (this.selected[i].getTime() == item.date.getTime()) {
          return i;
        }
      }
      return -1;
    },
    cancelSelect: function() {
      if (this.multi) {
        this.selected.splice(0, this.selected.length);
      } else {
        this.selected = null;
      }
      this.panelShow = false;
    },
    toggleSelect: function(item) {
      if (!this.multi) {
        this.submitSelect(item.date);
      } else {
        let index = this.selectIndex(item);
        if (index < 0) {
          this.selected.push(item.date);
        } else {
          this.selected.splice(index, 1);
        }
      }
    },
    submitSelect: function(value) {
      this.$emit("input", value);
      this.panelShow = false;
    },
    changeMonth(num) {
      if (this.seleMonth + num > 11) {
        this.seleMonth = 0;
        this.seleYear++;
      } else if (this.seleMonth + num < 0) {
        this.seleMonth = 11;
        this.seleYear--;
      } else {
        this.seleMonth += num;
      }
    }
  }
};
</script>