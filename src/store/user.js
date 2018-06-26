
import firebase from 'firebase/app';
import 'firebase/auth';

const state = {
  currentUser: {}
};

const mutations = {
  SET_USER (state, { user }) {
    state.currentUser = user;
  }
};

const actions = {
  init ({ commit, rootState }) {
    rootState.app.auth().onAuthStateChanged((user) => {
      commit('SET_USER', { user });
    });
  },
  login ({ rootState }) {
    var authProvider = new firebase.auth.GoogleAuthProvider();
    return rootState.app.auth().signInWithPopup(authProvider);
  },
  logout ({ rootState }) {
    rootState.app.auth().signOut();
  }
};

export default {
  namespaced: true, state, mutations, actions
};
