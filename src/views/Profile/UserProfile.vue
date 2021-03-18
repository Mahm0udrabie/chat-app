<template>
    <div class="container">
        <div class="row">
            <div class="col-md-4">
                <p>{{ userData.username }}</p>
            </div>
            <div class="col-md-8">
                <p>{{ userData.email }}</p>
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
      userData: [],
    };
  },
  created() {
    this.getUsers();
  },
  methods: {
    getUsers() {
      axios.get(`http://127.0.0.1:8000/api/profile/${this.$store.getters.userData}`).then((response) => {
        this.userData = response.data.data;
        console.log(response.data);
      });
    },
  },
};
</script>
