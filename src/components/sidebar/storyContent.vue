<template>
  <transition name="fade">
    <div v-if="storyByDate" className="absolute top-16 w-80 h-screen flex">
      <div className="text-left pr-1">
        <p>{{ storyByDate.explanation }}</p>
        <p>{{ storyByDate.copyright }}</p>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    marsInfo: { required: true },
    storyByDate: { required: true },
  },
  computed: {
    getSolKeys() {
      return this.marsInfo?.sol_keys;
    },
  },
};
</script>

<style scoped>
h2 {
  font-weight: 500;
  color: #fffdf8;
  padding-left: 0.5em;
}

p {
  color: #f6e3de;
  padding-left: 1.5em;
}
</style>
