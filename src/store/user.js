
import firebase from 'firebase';
import 'firebase/auth';

const state = {
  all: {},
  currentUser: {}
};

const actions = {
  init ({ rootState }) {
    rootState.app.auth().onAuthStateChanged((user) => {
      state.currentUser = user;
    });
  },
  login ({ rootState }) {
    var authProvider = new firebase.auth.GoogleAuthProvider();
    return rootState.app.auth().signInWithPopup(authProvider);
  }
};

export default {
  namespaced: true, state, actions
};
