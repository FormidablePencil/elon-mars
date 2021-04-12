<template>
  <img
    :className="`bg-position ${
      !storyByDate ? 'isVisible' : 'isInvisible'
    } bg-position transition-opacity absolute object-cover z-10 w-screen h-screen top-10`"
    src="../../assets/elon-musk.png"
    alt="elon musk"
  />
</template>

<script>
import { mapState } from "vuex";
export default { computed: { ...mapState(["storyByDate"]) } };
</script>

<style scoped>
.bg-position {
  object-position: 0% 0%;
  pointer-events: none;
}

.isVisible {
  opacity: 0;
  animation: bg-anim 3s 3s;
  animation-fill-mode: forwards;
}

.isInvisible {
  opacity: 1;
  transform: scale(1.1);
  animation: bg-anim-reverse 2s 1s;
  animation-fill-mode: forwards;
}

@keyframes bg-anim-reverse {
  0% {
    transform: scale(1.1);
    opacity: 1;
  }
  100% {
    transform: scale(1);
    opacity: 0;
  }
}

@keyframes bg-anim {
  0% {
    transform: scale(1);
    opacity: 0;
  }
  100% {
    transform: scale(1.1);
    opacity: 1;
  }
}
</style>
