
<template>
  <button class="login-button" @click="signInWithGoogle()">Login With Google</button>
</template>

<script>
import { app } from '../firebase.js';

export default {
  methods: {
    signInWithGoogle() {
      var authProvider = new firebase.auth.GoogleAuthProvider();
      return app.auth().signInWithPopup(authProvider);
    }
  }
};
</script>

<style language="scss">
.login-button {
  padding: 20px 36px;
  font-size: 1.2rem;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #0365d6;
  border-radius: 4px;
  color: #fff;
}
</style>
