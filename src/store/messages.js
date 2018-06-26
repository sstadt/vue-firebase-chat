
import Vue from 'vue';

const state = {
  all: []
};

const mutations = {
  SET_MESSAGES (state, { messages }) {
    // console.log(messages.data());
    // state.all = messages;
  },
  ADD_MESSAGE (state, message) {
    console.log(message);
    state.all.push(message);
  }
};

const actions = {
  async get ({ commit, rootState }) {
    let messagesRef = rootState.db.collection('messages');
    let messages = await messagesRef.get();

    messages.forEach(message => commit('ADD_MESSAGE', message.data()));
    // commit('SET_MESSAGES', { messages });
  },
  send ({ commit, rootState }, { username, image, text }) {
    let messagesRef = rootState.db.collection('messages');

    messagesRef.add({ username, image, text })
      .then(res => console.log('Message sent.', res))
      .catch(err => console.log('Error', err));
  }
};

export default { namespaced: true, state, mutations, actions };
