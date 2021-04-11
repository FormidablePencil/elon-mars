<template>
  <div
    className="flex bg-bg-light rounded-t-lg font-bold text-white py-2 shadow-lg"
  >
    <li
      className="flex justify-center align-items w-20"
      v-bind:key="title"
      v-for="title in titles"
    >
      <p className="">
        {{ title }}
      </p>
    </li>
  </div>
</template>

<script>
export default {
  data() {
    return {
      titles: ["Years", "Days", "Hours", "Minutes", "Seconds"],
    };
  },
};
</script>
