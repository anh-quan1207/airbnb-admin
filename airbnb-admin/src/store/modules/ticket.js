import { getAllTicKetsAPI } from "@/api/ticket.";


const state = () => {
  return {
    ticketList: [],
  }
};

const mutations = {
  setTicketListMutation(state, payload) {
    state.ticketList = payload;
  }
};

const actions = {
  async getAllTicKetsAction({commit}, payload) {
    const data = await getAllTicKetsAPI();
    commit("setTicketListMutation", data);
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
}
