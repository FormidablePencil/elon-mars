<template>
  <div className="container-bg-image z-10 bg-cover w-screen h-screen">
    <AnimateElon />
    <SidebarTemp />
    <Countdown />
    <SearchBar />
  </div>
</template>

<script>
import SidebarTemp from "./components/sidebar";
import SearchBar from "./components/search-bar";
import Countdown from "./components/countdown";
import AnimateElon from "./components/animate-elon";

export default {
  name: "App",
  components: {
    SidebarTemp,
    SearchBar,
    Countdown,
    AnimateElon,
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
