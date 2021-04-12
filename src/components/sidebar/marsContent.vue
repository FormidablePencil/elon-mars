<template>
  <li
    :className="`${
      !storyByDate ? 'transitionSideBarContent' : 'transitionOutSideBarContent'
    } flex flex-1 flex-col justify-evenly items-center bg-bg-ligher z-0 h-40 mx-12 my-6 px-2 rounded-lg shadow-lg`"
    v-bind:key="sol"
    v-for="sol in getSolKeys"
  >
    <p>{{ marsInfo[sol].First_UTC }}</p>
    <p>sol {{ sol }}</p>
    <h3 className="dividerBottom">Pressure (Pa)</h3>

    <div className="flex w-full justify-evenly">
      <div>
        <h4>Max.</h4>
        <p>{{ Math.floor(marsInfo[sol].PRE.av) }}</p>
      </div>
      <div>
        <h4>Min.</h4>
        <p>{{ Math.floor(marsInfo[sol].PRE.mn) }}</p>
      </div>
      <div>
        <h4>Avg.</h4>
        <p>{{ Math.floor(marsInfo[sol].PRE.mx) }}</p>
      </div>
    </div>
  </li>
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
h3,
h4 {
  font-weight: 500;
  color: #fffdf8;
}

p {
  color: #f6e3de;
}

.dividerBottom {
  border: 0px solid #f3ded9;
  border-bottom-width: 1px;
  width: 90%;
}
</style>
