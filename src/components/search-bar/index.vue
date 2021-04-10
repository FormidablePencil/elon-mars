<template>
  <div>{{ dataOfTheDay }}</div>
</template>

<script>
export default {
  data() {
    return { dataOfTheDay: null };
  },
  methods: {
    selectDate(date) {
      this.$store.commit("selectDate", date);
    },
  },
  computed: {
    selectedData() {
      return this.$store.state.count;
    },
  },
};
</script>
