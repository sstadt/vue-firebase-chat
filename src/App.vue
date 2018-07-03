
<template>
  <div>
    <Login v-if="!currentUser.displayName" />
    <Chat v-else />
  </div>
</template>

<script>
import Login from './components/Login.vue';
import Chat from './components/Chat.vue';

import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState({
      currentUser: state => state.user.currentUser
    })
  },
  components: { Login, Chat }
};
</script>

<style lang="scss">
* {
  box-sizing: border-box;
}

body {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
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
