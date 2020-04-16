import Vue from 'vue'
import VueRouter from 'vue-router'
import Store from '../store'
import Home from '../components/Home.vue'
import Login from '../components/Login.vue'
import Plate from '../components/Plate.vue'
import Card from '../components/Card.vue'
import SignUp from '../components/SignUp.vue'
import NotFound from '../components/NotFound.vue'

Vue.use(VueRouter)

const requrieAuth = (to, from, next) => {
  const loginPath = `/login?rPath=${encodeURIComponent(to.path)}`;
  Store.getters.isAuth ? next() : next(loginPath);
}

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: Home },
    { path: '/login', component: Login },
    {
      path: '/plate/:plaId', component: Plate, beforeEnter: requrieAuth,
      children: [
        { path: 'c/:cId', component: Card }
      ]
    },
    { path: '/signUp', component: SignUp },




    { path: '*', component: NotFound }
  ]
})

export default router;