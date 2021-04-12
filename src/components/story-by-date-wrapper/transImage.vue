<template>
  <transition name="fade">
    <div v-if="storyByDate?.media_type === 'image'">
      <transition name="fade">
        <img
          v-if="toggleImgElement"
          className="object-cover w-screen h-screen absolute top-0"
          :src="imageInFirst"
          :alt="storyByDate?.title"
        />
      </transition>

      <transition name="fade">
        <img
          v-if="!toggleImgElement"
          className="object-cover w-screen h-screen absolute top-0"
          :src="imageInSecond"
          :alt="storyByDate?.title"
        />
      </transition>
    </div>
  </transition>
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      toggleImgElement: false,
      imageInFirst: "",
      imageInSecond: "",
    };
  },
  computed: {
    ...mapState(["storyByDate"]),
  },
  mounted() {
    this.imageInFirst = this.storyByDate;
    this.imageInSecond = this.storyByDate;
  },
  watch: {
    storyByDate(newValue) {
      this.toggleImgElement = !this.toggleImgElement;
      if (newValue.media_type === "image") {
        if (!this.imageInSecond && !this.imageInFirst) {
          this.imageInFirst = this.storyByDate.url;
          this.imageInSecond = this.storyByDate.url;
          return;
        }
        if (this.toggleImgElement) this.imageInFirst = this.storyByDate.url;
        else this.imageInSecond = this.storyByDate.url;
        console.log(
          `Updating from ${this.imageInFirst} to ${this.imageInSecond}`
        );
      }
    },
  },
  methods: {
    test() {
      console.log("git", this.toggleImgElement);
    },
  },
};
</script>
<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s 1s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
