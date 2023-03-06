import { createStore } from "vuex";

export default createStore({
  state: {
    doggie: {},
    isFetched: false,
    owner: "",
  },
  getters: {
    getDoggie(state) {
      return state.doggie;
    },
    getIsFetched(state) {
      return state.isFetched;
    },
    getOwner(state) {
      return state.owner;
    },
  },
  mutations: {
    setDoggie(state, payload) {
      state.doggie = JSON.parse(JSON.stringify(payload));
    },
    setFetched(state, payload) {
      state.isFetched = payload;
    },
    setOwner(state, payload) {
      state.owner = payload;
    },
  },
  actions: {
    setDoggie(context, payload) {
      context.commit("setDoggie", payload);
    },
    setFetched(context, payload) {
      context.commit("setFetched", payload);
    },
    setOwner(context, payload) {
      context.commit("setOwner", payload);
    },
  },
  modules: {},
});
