import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import UserProfile from '../views/Profile/UserProfile.vue';
import Users from '../views/Profile/Users.vue';
import Chat from '../views/chat/Chat.vue';
import Login from '../views/Auth/Login.vue';
import Register from '../views/Auth/Register.vue';
import store from '../store';

Vue.use(VueRouter);
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { requiresAuth: true },
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
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/chats/:userId',
    name: 'Chat',
    component: Chat,
    meta: {
      requiresAuth: true,
    },
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
  {
    path: '/profile/:username',
    name: 'UserProfile',
    component: UserProfile,
  },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    // need to login
    // console.log(store.getters.userLogged);
    if (!store.getters.userLogged) {
      next({
        name: 'Login',
      });
    } else {
      next();
    }
  } else {
    next();
  }
});
export default router;
