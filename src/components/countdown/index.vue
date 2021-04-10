<template>
  <div className="w-64 h-64 bg-red-50 flex">
    <CountComp :num="years" title="Years" />
    <CountComp :num="days" title="Days" />
    <CountComp :num="hours" title="Hours" />
    <CountComp :num="minutes" title="Minutes" />
    <CountComp :num="seconds" title="Seconds" />
  </div>
</template>

<script>
import CountComp from "./countComp.vue";

export default {
  components: { CountComp },
  data() {
    return {
      years: 20,
      days: 20,
      hours: null,
      minutes: null,
      seconds: null,
    };
  },
  mounted() {
    this.calcTime(100000000000);
  },
  methods: {
    calcTime: function (time) {
      this.years = Math.floor(time / (1000 * 60 * 60 * 24));
      this.days = Math.floor(time / (1000 * 60 * 60 * 24));
      this.hours = Math.floor(
        (time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      this.minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
      this.seconds = Math.floor((time % (1000 * 60)) / 1000);
    },
  },
};
</script>
