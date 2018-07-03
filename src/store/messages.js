
const state = {
  all: []
};

const mutations = {
  ADD_MESSAGE (state, message) {
    state.all.push(message);
  }
};

const actions = {
  init ({ commit, rootState }) {
    let messagesRef = rootState.db.collection('messages');

    messagesRef.orderBy('created_on').onSnapshot((snapshot) => {
      snapshot.docChanges().forEach((change) => {
        if (change.type === 'added') {
          commit('ADD_MESSAGE', { ...change.doc.data(), id: change.doc.id });
        }
      });
    });
  },
  send ({ commit, rootState }, { username, image, text }) {
    let messagesRef = rootState.db.collection('messages');

    messagesRef.add({ username, image, text, created_on: new Date() })
      .then(res => console.log('Message sent.', res))
      .catch(err => console.log('Error', err));
  }
};

export default { namespaced: true, state, mutations, actions };
