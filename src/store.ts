import Vuex from "vuex";
import { fetchMarsInfo, fetchStoryByDate } from "./functions/fetching";

const store = new Vuex.Store({
  state: {
    selectedDate: 0,
    marsInfo: "",
    storyByDate: "",
    FAILEDstoryByDate: false,
  },
  mutations: {
    deleteStory: (state) => {
      state.storyByDate = "";
    },
  },
  getters: {
    storyByDate: (state) => {
      return state.storyByDate;
    },
  },
  actions: {
    async getStoryByDate({ state }, payload) {
      const data = await fetchStoryByDate(payload);
      if (data) state.storyByDate = data;
      else {
        state.FAILEDstoryByDate = true;
        setTimeout(() => {
          state.FAILEDstoryByDate = false;
        }, 3000);
      }
    },
    async getMarsInfo({ state }) {
      state.marsInfo = await fetchMarsInfo();
    },
  },
});

export default store;
