<template>
  <div>
    <img
      className="top-0 absolute w-screen h-screen"
      v-bind:src="storyByDate?.url"
      :alt="storyByDate?.title"
    />
    <div
      className="-bg-image z-10 bg-cover relative overflow-hidden w-screen h-screen"
    >
      <Countdown />
      <AnimateElon />
      <SidebarTemp />
      <SearchBar />
      <PrimeVue />
    </div>
  </div>
</template>

<script>
import SidebarTemp from "./components/sidebar";
import SearchBar from "./components/search-bar";
import AnimateElon from "./components/animate-elon";
import Countdown from "./components/countdown";
import { mapState } from "vuex";

export default {
  name: "App",
  components: {
    SidebarTemp,
    SearchBar,
    AnimateElon,
    Countdown,
  },
  data() {
    return {};
  },
  created() {
    this.$store.dispatch("getMarsInfo");
  },
  computed: {
    ...mapState(["storyByDate"]),
    test() {
      return this.storyByDate;
    },
  },
};
</script>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body {
  margin: 0;
  padding: 0;
}
li {
  list-style-type: none;
  padding: 0;
}
.container-bg-image {
  background-image: url("./assets/bgImage.jpg");
}
</style>
