
import Vue from 'vue';
import Vuex from 'vuex';

import 'babel-polyfill';

import firebase from 'firebase';
import 'firebase/firestore';

import users from './users';
import user from './user';
import conversations from './conversations';

var config = {
  apiKey: "AIzaSyCE_UcyTwnq0nCknK5Ew4rERStQe3Z1qCY",
  authDomain: "vuechat-9e5eb.firebaseapp.com",
  databaseURL: "https://vuechat-9e5eb.firebaseio.com",
  projectId: "vuechat-9e5eb",
  storageBucket: "vuechat-9e5eb.appspot.com",
  messagingSenderId: "175017321265"
};

var app = firebase.initializeApp(config);

Vue.use(Vuex);

const state = {
  app,
  db: firebase.firestore()
};

export default new Vuex.Store({
  state,
  modules: { user, users, conversations }
});
