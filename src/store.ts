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
      state.marsInfo = await fetchMarsInfo();
    },
  },
  // use getter to get only certain values from API...
  // getters: { // here for reference
  //   doubleCount: (state) => {
  //     return state.count * 2;
  //   },
});


export default store;
