
<template>
  <div>
    <p>current user: {{ currentUser.displayName }}</p>
    <Login v-if="!currentUser.displayName" />
    <Initialize/>
    <ConversationContainer
      v-for="id in convoIds"
      :conversation="conversations[id]"
      :id="id"
      :key="id"
    />
    <!-- <div id="app">
      <login v-if="!data.currentUser"></login>
      <chat v-else></chat>
    </div> -->
  </div>
</template>

<script>
import Login from './components/Login.vue';
import Chat from './components/Chat.vue';

import Initialize from './components/Initialize.vue';
import ConversationContainer from './components/ConversationContainer.vue';
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState({
      currentUser: state => state.user.currentUser,
      conversations: state => state.conversations.all,
      convoIds: state => state.conversations.allIds
    })
  },
  components: { Login, Initialize, ConversationContainer }
};
</script>

<style lang="scss">
body {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
