import Vuex from "vuex";
import { fetchMarsInfo, fetchStoryByDate } from "./functions/fetching.ts";

const store = new Vuex.Store({
  state: {
    selectedDate: 0,
    marsInfo: null,
    storyByDate: null,
  },
  actions: {
    async getStoryByDate({ state }, payload) {
      state.storyByDate = await fetchStoryByDate(payload);
    },
    async getMarsInfo({ state }) {
      console.log("hit");
.      state.marsInfo = await fetchMarsInfo();
    },
  },
});

export default store;
