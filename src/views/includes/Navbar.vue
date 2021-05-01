<template>
  <b-navbar toggleable="lg" type="dark" variant="info">
    <div class="container">
    <!-- eslint-disable-next-line max-len -->
    <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous"/>
      <b-navbar-brand to="/">Home</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
          <b-nav-item to="/about">About</b-nav-item>
          <b-nav-item v-if="userLogged" to="/users">Users</b-nav-item>
          <!-- <b-nav-item v-if="userLogged" to="/chats">Chat</b-nav-item> -->
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
              <b-nav-item v-if="!userLogged" class="" to="/login">Login</b-nav-item>
              <b-nav-item v-if="!userLogged" to="/register">Register</b-nav-item>
          <!-- <b-nav-item-dropdown text="Lang" right>
          <b-dropdown-item href="#">EN</b-dropdown-item>
          <b-dropdown-item href="#">Ar</b-dropdown-item>
              </b-nav-item-dropdown> -->
        <b-nav-form v-if="userLogged">
          <li class="nav-item">
              <a class="nav-link nav-link-icon" href="#">
                  <i class="fab fa-facebook-square"></i>
                  <span class="nav-link-inner--text d-lg-none">Facebook</span>
              </a>
          </li>
          <li class="nav-item">
              <a class="nav-link nav-link-icon" href="#">
                  <i class="fab fa-twitter"></i>
                  <span class="nav-link-inner--text d-lg-none">Twitter</span>
              </a>
          </li>
          <li class="nav-item">
              <a class="nav-link nav-link-icon" href="#">
                  <i class="fab fa-google-plus"></i>
                  <span class="nav-link-inner--text d-lg-none">Google +</span>
              </a>
          </li>
          <li class="nav-item">
              <a class="nav-link nav-link-icon" href="#">
                  <i class="fab fa-instagram"></i>
                  <span class="nav-link-inner--text d-lg-none">Instagram</span>
              </a>
          </li>
        </b-nav-form>

          <b-nav-item-dropdown v-if="userLogged" right>
          <!-- Using 'button-content' slot -->
          <template #button-content>
              <em>{{ username }}</em>
          </template>
          <b-dropdown-item :to="{ name: 'UserProfile', params: { username: username }}">Profile</b-dropdown-item>
          <b-dropdown-item href="#">Sign Out</b-dropdown-item>
          </b-nav-item-dropdown>
      </b-navbar-nav>
      </b-collapse>
    </div>
  </b-navbar>
</template>
<script>
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

export default {
  name: 'Navbar',
  data: () => ({
    user: null,
    username: null,
  }),
  created() {
    this.getUserData();
  },
  computed: {
    userLogged() {
      return this.$store.getters.userLogged;
    },
    userInfo() {
      return this.$store.getters.userData;
    },
  },
  methods: {
    getUserData() {
      this.username = this.$store.getters.userData;
    },
  },
};
</script>
