/* eslint-disable max-len */
<template>
  <div class="input-group">
    <input
      id="btn-input"
      type="text"
      name="message"
      class="form-control input-sm"
      placeholder="Type your message here..."
      v-model="newMessage"
      @keyup.enter="addMessage"
    />
    <span class="input-group-btn">
      <button class="btn btn-primary btn-sm" id="btn-chat" @click="addMessage">
        Send
      </button>
    </span>
  </div>
</template>

<script>
import axios from 'axios';

axios.defaults.headers.common.Accept = 'application/json';
axios.defaults.headers.common = {
  Authorization: `Bearer ${localStorage.getItem('token')}`,
};
export default {
  // props: ['user'],
  data() {
    return {
      newMessage: '',
      // sender_id: 2,
      receiver_id: this.$route.params.userId,
      token: localStorage.getItem('token'),
    };
  },
  created() {
    // console.log(localStorage.getItem('data'));
    this.connectToWS();
  },
  methods: {
    addMessage() {
      // this.messages.push(message);
      axios
        .post('http://127.0.0.1:8000/api/messages/add', {
          // sender_id: this.sender_id,
          body: this.newMessage,
          receiver_id: this.receiver_id,
          // headers: {
          //   // eslint-disable-next-line max-len
          //   Authorization: `Bearer ${this.token}`,
          // },
        })
        .then((response) => {
          // console.log(response.data.messages);
          this.$emit('sendMessageToTheParent', response.data.messages);
        });
      this.newMessage = '';
    },
    connectToWS() {
      // Create WebSocket connection.
      const socket = new WebSocket(
        `ws://localhost:3000/messages/conn?channel=${this.$store.getters.userChannel}`,
      );

      // Connection opened
      socket.addEventListener('open', (event) => {
        // socket.send('Hello Server!');
        console.log('connection openned', event);
      });
      // Listen for messages
      socket.addEventListener('message', (event) => {
        console.log('Message from server', event.data);
        const socketMessage = JSON.parse(event.data);
        if (socketMessage.type === 'message') {
          const messageData = JSON.parse(socketMessage.data);
          this.$emit('sendMessageToTheParent', messageData);
          // console.log('test test');
          // console.log(messageData);
        }
      });
      socket.addEventListener('close', (event) => {
        console.log('Connection closed', event);
      });
    },
  },
};
</script>
