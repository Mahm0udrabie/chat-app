<template>
<div class="container mt-5" >
  <div class="row">
    <div class="col-md-4"></div>
    <div class="col-md-4">
      <p class="alert alert-success" v-if="success">Successfully Registerd</p>
      <p class="alert alert-danger" v-if="error">an error occurred</p>

      <div class="form-group">
        <input type="text" v-model="name" name="name" class="form-control" placeholder="Name">
      </div>
      <div class="form-group">
        <input type="text" v-model="username" name="username" class="form-control" placeholder="Username">
      </div>
      <div class="form-group">
        <input type="email" v-model="email" name="email" class="form-control" placeholder="Email">
      </div>
      <div class="form-group">
        <input type="password" v-model="password" name="password" class="form-control" placeholder="password">
      </div>
      <div class="form-group">
        <input type="password" v-model="password_confirmation" name="password_confirmation" class="form-control" >
      </div>
      <div class="form-group">
        <button class="btn btn-primary" @click="register">Register</button>
      </div>
    </div>
    <div class="col-md-4"></div>
  </div>
</div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Register',
  data: () => ({
    name: null,
    username: null,
    email: null,
    password: null,
    password_confirmation: null,
    success: false,
    error: false,
  }),
  methods: {
    register() {
      this.error = false;
      this.success = false;
      axios.post('http://127.0.0.1:8000/api/register', {
        name: this.name,
        username: this.username,
        email: this.email,
        password: this.password,
        password_confirmation: this.password_confirmation,
        error: false,
      }).then((res) => {
        if (res && res.data && res.data.token) {
          this.$store.commit('changeUserLogged', true);
          localStorage.setItem('token', res.data.token.token);
          this.$store.commit('regUser', true);
          this.success = true;
          this.$router.push('/');
        }
      }).catch((error) => {
        console.log(error);
        this.error = true;
      });
    },
    // login() {
    //   this.$store.dispatch('LOGIN', {
    //     email: this.email,
    //     password: this.password,
    //   })
    //     .then((success) => {
    //       this.$router.push('/');
    //       console.log(success);
    //     })
    //     .cath((error) => {
    //       this.error = true;
    //       console.log(error);
    //     });
    // },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
