
<template>
  <div class="chat-wrapper">
    <a href='#' @click="logout()">SIGNOUT</a>
    <div class="message-list">
      <div v-for="message in messages" class="chat-message">
        <img class="chat-message__avatar" :src="message.photo_url" />
        <div class="chat-message__body">
          <p class="chat-message__user">{{message.name}}</p>
          <p class="chat-message__message">{{message.message}}</p>
        </div>
      </div>
      <form @submit.prevent="addMessage">
        <input type="text" class="new-message" v-model="message" placeholder="Chat..." />
      </form>
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex';

  export default {
    data() {
      return {
        message: '',
        loading: true
      };
    },
    computed: {
      ...mapState({
        messages: state => state.messages.all,
        currentUser: state => state.user.currentUser
      })
    },
    methods: {
      logout() {
        this.$store.dispatch('users/logout');
      },
      addMessage() {
        if (this.message !== '') {
          console.log(this.message);
          console.log(this.currentUser);
          this.$store.dispatch('messages/send', {
            username: this.currentUser.displayName,
            image: this.currentUser.photoURL,
            text: this.message
          });
          this.message = "";
        }
      }
    }
  }
</script>

<style>

</style>
