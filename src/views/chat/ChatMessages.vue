<template>
    <ul class="chat">
        <li class="left clearfix" v-for="(message, idiot) in chats" :key="idiot">
            <div class="chat-body clearfix">
                <div class="header">
                    <p class="text-primary float-left">
                        {{ message.sender }}
                    </p>
                </div>
                <p>
                    {{ message.content }}
                </p>
            </div>
        </li>
        <li class="left clearfix" v-for="(msg, i) in messages" :key="'A'+ i">
            <div class="chat-body clearfix">
                <div class="header">
                    <p class="text-primary float-left">
                        {{ msg.newSenderMessage }}
                    </p>
                </div>
                <p>
                    {{ msg.newContentMessage }}
                </p>
            </div>
        </li>

    </ul>
</template>

<script>
import axios from 'axios';

export default {
  props: ['messages'],
  data() {
    return {
      chats: [],
    };
  },
  created() {
    this.fetchMessages();
  },
  methods: {
    fetchMessages() {
      axios.get(`http://127.0.0.1:8000/api/messages/users/${this.$route.params.userId}`).then((response) => {
        this.chats = response.data.messages;
      });
    },

  },
};
</script>
