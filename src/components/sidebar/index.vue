<template>
  <div
    className="transitionSideBar noScrollBar bg-bg-reg w-80 h-screen overflow-scroll"
  >
    <h2
      className="transitionSideBarContent text-primary-light text-xl font-medium mt-5"
    >
      Living Conditions on Mars
    </h2>
    <li
      className="transitionSideBarContent flex flex-1 flex-col justify-evenly items-center bg-bg-ligher z-0 h-40 mx-12 my-6 px-2 rounded-lg shadow-lg"
      v-bind:key="sol"
      v-for="sol in getSolKeys"
    >
      <p>{{ marsInfo[sol].First_UTC }}</p>
      <p>sol {{ sol }}</p>
      <h3 className="dividerBottom">Pressure (Pa)</h3>

      <div className="flex w-full justify-evenly">
        <div>
          <h4>Max.</h4>
          <p>{{ Math.floor(marsInfo[sol].PRE.av) }}</p>
        </div>
        <div>
          <h4>Min.</h4>
          <p>{{ Math.floor(marsInfo[sol].PRE.mn) }}</p>
        </div>
        <div>
          <h4>Avg.</h4>
          <p>{{ Math.floor(marsInfo[sol].PRE.mx) }}</p>
        </div>
      </div>
    </li>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      loading: false,
      users: null,
      error: null,
      solData: [],
    };
  },
  computed: {
    ...mapState(["marsInfo"]),
    getSolKeys() {
      return this.$store.state.marsInfo?.sol_keys;
    },
  },
  methods: {},
};
</script>
<style scoped>
.noScrollBar::-webkit-scrollbar {
  display: none;
}
h3,
h4 {
  font-weight: 500;
  color: #fffdf8;
}

p {
  color: #f6e3de;
}

.dividerBottom {
  border: 0px solid #f3ded9;
  border-bottom-width: 1px;
  width: 90%;
}

.transitionSideBar {
  transform: translateX(-400px);
  animation: bg-anim 1.5s 500ms;
  animation-fill-mode: forwards;
}

.transitionSideBarContent {
  transform: translateX(-400px);
  animation-fill-mode: forwards;
}

.transitionSideBarContent:nth-child(1) {
  animation: bg-anim 1.5s 1s;
  animation-fill-mode: forwards;
}
.transitionSideBarContent:nth-child(2) {
  animation: bg-anim 1.5s 1.2s;
  animation-fill-mode: forwards;
}
.transitionSideBarContent:nth-child(3) {
  animation: bg-anim 1.5s 1.4s;
  animation-fill-mode: forwards;
}
.transitionSideBarContent:nth-child(4) {
  animation: bg-anim 1.5s 1.6s;
  animation-fill-mode: forwards;
}
.transitionSideBarContent:nth-child(5) {
  animation: bg-anim 1.5s 1.8s;
  animation-fill-mode: forwards;
}

@keyframes bg-anim {
  0% {
    transform: translateX(-400px);
  }
  100% {
    transform: translateX(0);
  }
}
</style>
