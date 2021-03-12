export default {
  state: {
    userLogged: !!localStorage.getItem('token'),
    userData: localStorage.getItem('data'),
    registerUser: '',
  },
  getters: {
    userLogged: (state) => state.userLogged,
    registerUser: (state) => state.registerUser,
    userData: (state) => state.userData,
  },
  mutations: {
    changeUserLogged(state, statePayload) {
      state.userLogged = statePayload;
    },
    regUser(state, user) {
      state.registerUser = user;
    },
    userData(state, data) {
      state.userData = data;
    },
  },
  actions: {
  },
};
