<template>
  <div
    className="container-bg-image z-10 bg-cover relative overflow-hidden w-screen h-screen"
  >
    <Countdown />
    <AnimateElon />
    <SidebarTemp />
    <SearchBar />
    <PrimeVue />
  </div>
</template>

<script>
import SidebarTemp from "./components/sidebar";
import SearchBar from "./components/search-bar";
import AnimateElon from "./components/animate-elon";
import Countdown from "./components/countdown";

export default {
  name: "App",
  components: {
    SidebarTemp,
    SearchBar,
    AnimateElon,
    Countdown,
  },
  methods: {},
  created() {
    this.$store.dispatch("getMarsInfo");
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
.container-bg-image {
  background-image: url("./assets/bgImage.jpg");
}
</style>
