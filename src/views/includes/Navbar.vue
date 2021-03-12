<template>
  <div class="container">
    <b-navbar toggleable="lg" type="dark" variant="info">
        <b-navbar-brand to="/">Home</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
            <b-nav-item to="/about">About</b-nav-item>
            <b-nav-item v-if="userLogged" to="/users">Users</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
                <b-nav-item v-if="!userLogged" class="" to="/login">Login</b-nav-item>
                <b-nav-item v-if="!userLogged" to="/register">Register</b-nav-item>
            <!-- <b-nav-item-dropdown text="Lang" right>
            <b-dropdown-item href="#">EN</b-dropdown-item>
            <b-dropdown-item href="#">Ar</b-dropdown-item>
            </b-nav-item-dropdown> -->

            <b-nav-item-dropdown v-if="userLogged" right>
            <!-- Using 'button-content' slot -->
            <template #button-content>
                <em>User</em>
            </template>
            <b-dropdown-item href="#">Profile</b-dropdown-item>
            <b-dropdown-item href="#">Sign Out</b-dropdown-item>
            </b-nav-item-dropdown>
        </b-navbar-nav>
        </b-collapse>
    </b-navbar>
</div>
</template>
<script>
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

export default {
  name: 'Navbar',
  data: () => ({
    user: null,
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
      this.user = this.userInfo;
    },
  },
};
</script>
