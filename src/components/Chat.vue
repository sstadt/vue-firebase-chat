
<template>
  <div class="chat-wrapper">
    <div class="chat-header">
      <p>Welcome, {{ this.currentUser.displayName }}!</p>
      <a href='#' @click="logout()">log out</a>
    </div>
    <div class="message-list" ref="chatList">
      <div v-for="message in messages" class="chat-message">
        <img class="chat-message__avatar" :src="message.image" />
        <div class="chat-message__body">
          <p class="chat-message__user">{{ message.username }}</p>
          <p class="chat-message__message">{{ message.text }}</p>
        </div>
      </div>
    </div>
    <form class="chat-submit" @submit.prevent="addMessage">
      <input type="text" class="new-message" v-model="message" placeholder="Chat..." />
    </form>
  </div>
</template>

<script>
  import Vue from 'vue';
  import { mapState } from 'vuex';

  export default {
    created() {
      this.$store.dispatch('messages/init');
    },
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
    watch: {
      messages() {
        Vue.nextTick(() => {
          this.$refs.chatList.scrollTop = this.$refs.chatList.scrollHeight;
        });
      }
    },
    methods: {
      logout() {
        this.$store.dispatch('users/logout');
      },
      addMessage() {
        if (this.message !== '') {
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
  .chat-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 500px;
    height: 600px;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    box-shadow: 0 6px 15px rgba(47,59,60,0.2);
    padding: 20px;
  }

  .chat-header {
    display: flex;
    padding-bottom: 20px;
    justify-content: space-between;
  }

  .chat-header p {
    margin: 0;
  }

  .message-list {
    flex-grow: 1;
    padding-right: 10px;
    overflow-x: hidden;
    overflow-y: auto;
  }

  .chat-header,
  .message-list,
  .chat-submit {
    width: 100%;
  }

  .chat-submit {
    padding-top: 20px;
  }

  .chat-submit input {
    width: 100%;
    padding: 10px 12px;
    border: 1px solid #ddd;
  }

  .chat-message {
    display: flex;
    padding-bottom: 20px;
  }

  .chat-message:last-child {
    padding-bottom: 0;
  }

  .chat-message__avatar {
    height: 40px;
    width: 40px;
    border-radius: 50%;
    overflow: hidden;
    margin-right: 10px;
  }

  .chat-message__user {
    color: teal;
  }

  .chat-message__user:after {
    content: ':';
  }

  .chat-message__user,
  .chat-message__message {
    margin: 0;
  }
</style>
