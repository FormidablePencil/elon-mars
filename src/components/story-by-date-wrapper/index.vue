<template>
  <transition name="fade">
    <iframe
      v-if="storyByDate?.media_type === 'video'"
      className="w-screen h-screen absolute top-0"
      width="420"
      height="315"
      allowfullscreen
      frameborder="0"
      :src="`${
        storyByDate.url
      }&autoplay=1&loop=1&mute=1&controls=0&playlist=${youtubeVIdId()}`"
    />
  </transition>
  <div className="w-screen h-screen absolute top-0 opacity-50" />
  <div
    :className="`container-bg-image z-10 bg-cover relative overflow-hidden w-screen h-screen`"
  >
    <TransImgs />
    <img
      :className="`${
        !storyByDate?.url ? 'isVisible' : 'isInvisible'
      } absolute overflow-hidden w-screen h-screen`"
      src="../../assets/bgImage.jpg"
      alt="mars"
    />
    <slot />
  </div>
</template>

<script>
import { mapState } from "vuex";
import getYouTubeID from "get-youtube-id";
import TransImgs from "./transImage.vue";

export default {
  components: { TransImgs },
  data() {
    return { vidId: 113 };
  },
  computed: {
    ...mapState(["storyByDate"]),
  },
  methods: {
    youtubeVIdId() {
      const id = getYouTubeID(this.storyByDate.url);
      console.log(id, "id?");
      return id;
    },
  },
};
</script>

<style scoped>
.container-bg-image {
}
.isVisible {
  opacity: 1;
  transition: opacity 0.5s 1.5s ease;
}
.isInvisible {
  opacity: 0;
  transition: opacity 1s 1.5s ease;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s 1.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  transition: opacity 0.5s 1.5s ease;
  opacity: 0;
}
</style>
