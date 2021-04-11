<template>
  <img
    className="absolute object-cover z-10 bg-position w-screen h-screen top-10"
    src="../../assets/elon-musk.png"
    alt="elon musk"
  />
</template>

<style scoped>
.bg-position {
  object-position: 0% 0%;
  opacity: 0;
  animation: bg-anim 4s 2s;
  animation-fill-mode: forwards;
  pointer-events: none;
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
