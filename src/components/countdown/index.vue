<template>
  <div className="w-96 flex flex-col absolute z-1 right-10 top-10">
    <CounterLabel />
    <CountComp startTime="Nov 2, 2020 12:00:0" endTime="Jan 1, 2026 16:37:25" />
    <CounterDescription />
  </div>
</template>

<script>
import CounterLabel from "./counterLabel.vue";
import CountComp from "./counterNumbers.vue";
import CounterDescription from "./counterDescription.vue";

export default {
  components: { CountComp, CounterDescription, CounterLabel },
};
</script>
