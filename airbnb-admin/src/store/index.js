import { createStore } from "vuex";
import ticket from "@/store/modules/ticket";
import auth from "@/store/modules/auth";

export default createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    ticket,
    auth
  },
});
