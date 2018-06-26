
import Vue from 'vue';
import Vuex from 'vuex';

import firebase from 'firebase/app';
import 'firebase/firestore';

import user from './user';
import messages from './messages';

const config = {
  apiKey: "AIzaSyCE_UcyTwnq0nCknK5Ew4rERStQe3Z1qCY",
  authDomain: "vuechat-9e5eb.firebaseapp.com",
  databaseURL: "https://vuechat-9e5eb.firebaseio.com",
  projectId: "vuechat-9e5eb",
  storageBucket: "vuechat-9e5eb.appspot.com",
  messagingSenderId: "175017321265"
};

const app = firebase.initializeApp(config);
const db = firebase.firestore();
const settings = { timestampsInSnapshots: true };

db.settings(settings);

Vue.use(Vuex);

const state = { app, db };

export default new Vuex.Store({
  state,
  modules: { user, messages }
});
