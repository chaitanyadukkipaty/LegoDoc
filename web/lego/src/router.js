import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/login.vue'
import DashAdd from './views/dashAdd.vue'
import DashMembers from './views/dashMembers.vue'
import Home from './views/home.vue'
import Content from './views/content.vue'
import Upload from './views/upload.vue'
import Register from './views/register.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: {
        name: 'Home'
      }
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/content',
      name: 'Content',
      component: Content
    },
    {
      path: '/upload',
      name: 'Upload',
      component: Upload
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    }
  ]
})
