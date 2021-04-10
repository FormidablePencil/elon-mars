<template>
  <img
    className="absolute object-cover bg-position w-screen h-screen top-10"
    src="../../assets/elon-musk.png"
    alt="elon musk"
  />
</template>

<style>
.bg-position {
  object-position: 0% 0%;
  opacity: 0;
  animation: bg-anim 4s 1s;
  animation-fill-mode: forwards;
}

@keyframes bg-anim {
  0% {
    transform: scale(0.9);
    opacity: 0;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}
</style>
