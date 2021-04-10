<template>
  <div className="bg-bg-light opacity-50 w-64 h-screen">{{ solData }}</div>
</template>

<script>

export default {
  data() {
    return {
      loading: false,
      users: null,
      error: null,
      solData: [],
      solDataD: "test ",
    };
  },
  computed: {
    renderSolData() {
      console.log(this.solData);
      return this.solData;
    },
  },
  watch: {},
  methods: {},
};
</script>
