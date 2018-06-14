
<template>
  <div id="app">
    <login></login>
    <chat></chat>
    <!-- <login v-if="!data.currentUser"></login>
    <chat v-else></chat> -->
  </div>
</template>

<script>
import Login from './components/Login.vue';
import Chat from './components/Chat.vue';

export default {
  components: {
    login: Login,
    chat: Chat
  }
}
</script>

<style lang="scss">
#app {
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
