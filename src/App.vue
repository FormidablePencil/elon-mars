<template>
  <StoryByDateWrapper>
    <Countdown />
    <AnimateElon />
    <SidebarTemp />
    <SearchBar />
    <PrimeVue />
  </StoryByDateWrapper>
</template>

<script>
import SidebarTemp from "./components/sidebar";
import SearchBar from "./components/search-bar";
import AnimateElon from "./components/animate-elon";
import Countdown from "./components/countdown";
import StoryByDateWrapper from "./components/story-by-date-wrapper";

export default {
  name: "App",
  components: {
    StoryByDateWrapper,
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
html {
  background-color: black;
}
body {
  margin: 0;
  padding: 0;
}
li {
  list-style-type: none;
  padding: 0;
}
.dividerBottom {
  border: 0px solid #f3ded9;
  border-bottom-width: 1px;
  width: 90%;
}
</style>
