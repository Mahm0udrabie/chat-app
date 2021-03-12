import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Users from '../views/Users.vue';
import Login from '../views/Login.vue';
import Register from '../views/Register.vue';

Vue.use(VueRouter);
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/users',
    name: 'Users',
    component: Users,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
  },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});
// router.beforeEach((to, from, next) => {
//   // if (to.matched.some(record => record.meta.requiresAuth)) {
//   // this route requires auth, check if logged in
//   // if not, redirect to login page.
//   if (!this.$store.getters.userLogged) {
//     next({ name: 'Login' });
//   } else {
//     next(); // go to wherever I'm going
//   }
//   // } else {
//   //   next(); // does not require auth, make sure to always call next()!
//   // }
// });
export default router;
