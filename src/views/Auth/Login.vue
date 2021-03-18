<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col-md-4"></div>
      <div class="col-md-4">
        <p class="alert alert-danger" v-if="error">
          username or password are incorrect
        </p>
        <div class="form-group">
          <input
            v-model="email"
            type="email"
            name="email"
            class="form-control"
            placeholder="Email"
          />
        </div>
        <div class="form-group">
          <input
            v-model="password"
            type="password"
            name="password"
            class="form-control"
            placeholder="password"
          />
        </div>
        <div class="form-group">
          <button class="btn btn-primary" @click="login" @keyup.enter="login">Login</button>
        </div>
      </div>
      <div class="col-md-4"></div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Login',
  data: () => ({
    email: null,
    password: null,
    error: false,
  }),
  computed: {
    userLogged() {
      return this.$store.getters.userLogged;
    },
  },
  methods: {
    async login() {
      await axios
        .post('http://127.0.0.1:8000/api/login', {
          email: this.email,
          password: this.password,
        })
        .then((res) => {
          // console.log(res.data.data.token);
          if (res && res.data && res.data.data.token) {
            this.$store.commit('changeUserLogged', true);
            localStorage.setItem('token', res.data.data.token);
            localStorage.setItem('data', res.data.data.username);
            localStorage.setItem('channel', res.data.data.channel);
            this.$router.push('/');
          }
        })
        .catch((error) => {
          console.log(error);
          this.$store.commit('changeUserLogged', false);
          this.error = true;
        });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
