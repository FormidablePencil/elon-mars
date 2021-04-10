<template>
  <div className="bg-bg-light opacity-50 w-64 h-screen">{{ getMarsInfo }}</div>
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
    getMarsInfo() {
      return this.$store.state.marsInfo;
    },
  },
  watch: {},
  methods: {},
};
</script>
