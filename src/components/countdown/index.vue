<template>
  <div className="w-96 flex flex-col absolute z-1 right-20 top-20">
    <CounterLabel />
    <CountComp />
    <CounterDescription />
  </div>
</template>

<script>
import CounterLabel from "./counterLabel.vue";
import CountComp from "./countComp.vue";
import CounterDescription from "./counterDescription.vue";

export default {
  components: { CountComp, CounterDescription, CounterLabel },
};
</script>
