<template>
  <div className="flex py-3">
    <li
      className="flex justify-center items-center bg-white w-20 h-14 m-3 px-2 rounded-lg shadow-xl"
      v-bind:key="time"
      v-for="time in times"
    >
      <p className="font-semibold text-gray-600">{{ time.value }}</p>
    </li>
  </div>
</template>

<script>
export default {
  data() {
    return {
      times: [
        { title: "years", value: 0 },
        { title: "days", value: 0 },
        { title: "hours", value: 0 },
        { title: "minutes", value: 0 },
        { title: "seconds", value: 0 },
      ],
    };
  },
  mounted() {
    this.calcTime(100000000000);
    this.interval = setInterval(() => {
      this.timerCount(this.start, this.end);
    }, 1000);
  },
  methods: {
    calcTime: function (time) {
      this.times[0].value = Math.floor(time / (1000 * 60 * 60 * 24));
      this.times[1].value = Math.floor(time / (1000 * 60 * 60 * 24));
      this.times[2].value = Math.floor(
        (time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      this.times[3].value = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
      this.times[4].value = Math.floor((time % (1000 * 60)) / 1000);
    },
  },
};
</script>
