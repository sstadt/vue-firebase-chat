
<template>
<div class="chat-wrapper">
  <a href='#' @click="logOut()">SIGNOUT</a>
  <div class="chat-frame">
    <div v-for="item in messages" class="chat-message">
      <img class="chat-message__avatar" :src="item.photo_url" />
      <div class="chat-message__body">
        <p class="chat-message__user">{{item.name}}</p>
        <p class="chat-message__message">{{item.message}}</p>
      </div>
    </div>
    <form @submit.prevent="addComment">
      <div class="new-message">
        <input type="text" v-model="newMessage" placeholder="Type and click send to chat" />
        <button type="submit">Send</button>
      </div>
    </form>
  </div>
</div>
</template>

<script>
import firebase, { chatRef } from '../firebase'

export default {
  data() {
    return {
      comment: '',
      newMessage: '',
      loading: true
    };
  },
  firebase: {
    // can bind to either a direct Firebase reference or a query
    messages: chatRef,
    // optionally provide the cancelCallback
    cancelCallback: function () {
    },
    // this is called once the data has been retrieved from firebase
    readyCallback: function () {
    }
  },
  methods: {
    logOut() {
      firebase.auth().signOut()
    },
    addComment() {
      if (this.newMessage !== '') {
        this.comment = this.newMessage.trim();
        chatRef.push({
          message: this.comment,
          name: this.getUserName(),
          userId: this.getUserId(),
          photo_url:this.getPhotoURL()
        });
        this.newMessage = "";
      }
    },
    getUserId() {
      return firebase.auth().currentUser.uid;
    },
    getUserName() {
      return firebase.auth().currentUser.displayName;
    },
    getPhotoURL() {
      return firebase.auth().currentUser.photoURL;
    }
  }
}
</script>

<style>

</style>
