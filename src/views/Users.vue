<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col-md-4"></div>
      <div class="col-md-4">
        <ul class="list-group" width="auto">
          <li class="list-group-item" v-for="user in users" :key="user">{{user.name}} : {{user.email}}</li>
        </ul>
      </div>
      <div class="col-md-4"></div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Users',
  data() {
    return {
      users: [],
    };
  },
  created() {
    this.getUsers();
  },
  methods: {
    getUsers() {
      axios.get('http://127.0.0.1:8000/users').then((response) => {
        this.users = response.data.data;
        console.log(response.data);
      });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
