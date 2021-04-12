<template>
  <div
    className="transitionSideBar z-10 noScrollBar bg-bg-reg w-80 h-screen overflow-scroll"
  >
    <h2
      className="dividerBottom specificBgColor transitionSideBarContent text-primary-light text-xl font-medium mt-5 w-full h-7 bg-orange-700 rounded-r-lg overflow-hidden"
    >
      <transition name="fade">
        <p className="absolute top-0 left-3" v-if="!storyByDate">
          Living Conditions on Mars
        </p>
      </transition>
      <transition name="fade">
        <p className="absolute top-0 left-3" v-if="storyByDate">
          {{ storyByDate.title }}
        </p>
      </transition>
    </h2>
    <MarsContent :marsInfo="marsInfo" :storyByDate="storyByDate" />
    <StoryContent :storyByDate="storyByDate" />
  </div>
</template>

<script>
import { mapState } from "vuex";
import MarsContent from "./marsContent.vue";
import StoryContent from "./storyContent";

export default {
  components: { MarsContent, StoryContent },
  data() {
    return {
      solData: [],
    };
  },
  computed: {
    ...mapState(["marsInfo", "storyByDate"]),
  },
};
</script>
<style>
.noScrollBar::-webkit-scrollbar {
  display: none;
}
.specificBgColor {
  background: rgba(255, 255, 255, 0.4);
}
.smoothTransition {
  transform: translateX(-400px);
  transition: transform 1s 500ms;
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

.transitionOutSideBarContent {
  transform: translateX(0);
  animation: bg-anim-reverse 1.5s 500ms;
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

@keyframes bg-anim-reverse {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-400px);
  }
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
