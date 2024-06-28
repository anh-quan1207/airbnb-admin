import {signInAPI} from "@/api/auth";

const state = () => {
    return {
        userLogin: {}
    };
};

const mutations = {
  setUserLoginMutation(state, payload) {
    state.userLogin = payload;
    localStorage.setItem("userLogin", JSON.stringify(payload));
  },
  setUserLoginFromLocalStorage(state, payload) {
    state.userLogin = payload;
  },
  logoutMutation(state) {
    state.userLogin = {};
    localStorage.removeItem("userLogin");
  }
};


const actions = {
  async signInAction({ commit }, { data, router }) {
    try {
      const response = await signInAPI(data);

      if (response && response.user) {
        const userLogin = response.user;

        if (userLogin.role === 'admin') {
          commit("setUserLoginMutation", userLogin);
          router.push("/dashboard");
        } else {
          alert("You do not have permission to access the dashboard.");
          router.push("/");
        }
      } else {
        console.error("Invalid response data:", response);
        alert("Login failed. Please try again.");
      }
    } catch (error) {
      console.error("Network or server error:", error);
      alert("Login failed due to network or server error.");
    }
  },

  loadUserLoginFromLocalStorageAction({ commit }) {
    let userLogin = {};
    if (localStorage.getItem("userLogin")) {
      userLogin = JSON.parse(localStorage.getItem("userLogin"));
    }
    commit("setUserLoginFromLocalStorage", userLogin);
  },

  logoutAction({ commit }, router) {
    commit("logoutMutation");
    router.push("/sign-in");
  }
};



export default {
    namespaced: true,
    state,
    mutations,
    actions,
}