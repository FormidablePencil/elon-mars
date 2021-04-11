<template>
  <div className="flex py-3">
    <li
      className="flex justify-center items-center bg-white w-20 h-14 m-3 px-2 rounded-lg shadow-xl"
      v-bind:key="time"
      v-for="time in times"
    >
      <p className="font-semibold text-xl text-gray-600">{{ time.value }}</p>
    </li>
  </div>
</template>

<script>
import { calcTime, timerCount } from "./counterLogic";

export default {
  props: {
    startTime: String,
    endTime: String,
  },
  data() {
    return {
      times: [
        { title: "years", value: 0 },
        { title: "days", value: 0 },
        { title: "hours", value: 0 },
        { title: "minutes", value: 0 },
        { title: "seconds", value: 0 },
      ],
      start: new Date(this.startTime).getTime(),
      end: new Date(this.endTime).getTime(),
    };
  },
  mounted() {
    this.timerCount(this.start, this.end);
    this.interval = setInterval(() => {
      this.timerCount(this.start, this.end);
    }, 1000);
  },
  methods: {
    calcTime,
    timerCount,
  },
};
</script>
