const state = {
  user: [],
};

const mutations = {
  UPDATE_USER(state, payload) {
    state.user.push(payload);
  },
  CLEAR_USER(state, payload) {
    state.user = [];
  },
};

const actions = {
  addUser({ commit }, user) {
    commit("UPDATE_USER", user);
  },
  clear({ commit }, user) {
    commit("CLEAR_USER");
  },
};

const getters = {
  getUser: (state) => state.user,
};

const userModule = {
  state,
  mutations,
  actions,
  getters,
};

export default userModule;
