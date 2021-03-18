export default {
  state: {
    userLogged: !!localStorage.getItem('token'),
    userData: localStorage.getItem('data'),
    userChannel: localStorage.getItem('channel'),
    registerUser: '',
  },
  getters: {
    userLogged: (state) => state.userLogged,
    registerUser: (state) => state.registerUser,
    userData: (state) => state.userData,
    userChannel: (state) => state.userChannel,
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
    userChannel(state, channel) {
      state.userChannel = channel;
    },
  },
  actions: {
  },
};
