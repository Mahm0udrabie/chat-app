<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col-md-12">
        <ul class="list-group" width="auto">
          <li class="list-group-item" v-for="(user, idx) in users" :key="idx">
            <router-link :to="{ name: 'Chat', params: { userId: user.id }}">{{user.name}}</router-link>
          </li>
        </ul>
      </div>
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
        // console.log(response.data);
      });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
