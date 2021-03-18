<template>
  <div class="container">
    <div class="row">
      <div class="col-md-8 col-md-offset-2">
        <div class="panel panel-default">
          <div class="panel-heading">Chats</div>
          <div class="panel-body">
            <chat-messages :messages="messages"/>
          </div>
          <div class="panel-footer">
            <chat-form @sendMessageToTheParent="sendMessageToTheParent" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      messages: [],
    };
  },
  methods: {
    sendMessageToTheParent(e) {
      this.messages.push(e);
    },
  },
};
</script>
