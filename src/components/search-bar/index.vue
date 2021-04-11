<template>
  <div
    className="w-screen absolute bottom-0 flex flex-col justify-center items-center h-24 bg-grey-50"
  >
    <div
      className="lgShadow widthLarge justify-around items-center pl-2 h-12 bg-white flex rounded-full"
    >
      <label for="stories">Explore what's been on the horizon </label>
      <input
        className="focus:outline-none bg-primary-light h-full pl-1"
        v-model="date"
        type="date"
        id="stories"
      />
      <button
        @click="getStoryByDate()"
        className="btnActive px-7 py-1 rounded-full focus:outline-none text-white bg-primary-med hover:bg-primary-reg"
      >
        Search
      </button>
    </div>
    <div
      :className="`animate-pulse transform translate-y-${
        storyHasFailed ? 1 : 10
      } transition-transform duration-1000 bg-yellow-100 p-1 rounded-sm`"
    >
      There are no stories for {{ date }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      Year: 1999,
      month: "feb",
      date: new Date().toISOString().substr(0, 10), //examp 05/09/2019
      FAILEDstoryByDate: false,
    };
  },
  watch() {},
  methods: {
    getStoryByDate() {
      console.log("sds ");
      this.$store.dispatch("getStoryByDate", this.date);
    },
  },
  computed: {
    selectedData() {
      return this.$store.state.count;
    },
    storyHasFailed() {
      return this.$store.state.FAILEDstoryByDate;
    },
  },
};
</script>
<style scoped>
.btnActive:active {
  background: #A97761;
}

.lgShadow {
  box-shadow: 10px 10px 62px 7px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 10px 10px 62px 7px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 10px 10px 62px 7px rgba(0, 0, 0, 0.75);
}
.widthLarge {
  width: 37em;
}
</style>
