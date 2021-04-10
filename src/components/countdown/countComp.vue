<template>
  <div className="w-24 h-24">
    <p className="red">{{ title }}</p>
    <p className="">{{ num }}</p>
  </div>
</template>

<script>
export default {
  props: {
    num: Number,
    title: String,
  },
  data() {
    return { dayss: "sds" };
  },
};
</script>
