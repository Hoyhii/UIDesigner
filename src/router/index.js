import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Categories from '../views/Categories.vue'
import Upload from '../views/Upload.vue'
import FuturePlans from '../views/FuturePlans.vue'
import BugFixes from '../views/BugFixes.vue'
import AboutUs from '../views/AboutUs.vue'
import Login from '../views/Login.vue'
import SignUp from '../views/Sign-Up.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Categories',
    name: 'Categories',
    component: Categories
  },
  {
    path: '/Upload',
    name: 'Upload',
    component: Upload
  },
  {
    path: '/FuturePlans',
    name: 'FuturePlans',
    component: FuturePlans
  },
  {
    path: '/BugFixes',
    name: 'BugFixes',
    component: BugFixes
  },
  {
    path: '/AboutUs',
    name: 'AboutUs',
    component: AboutUs
  },
  {
    path: '/Login',
    name: 'Login',
    component: Login
  },
  {
    path: '/Sign-Up',
    name: 'Sign-Up',
    component: SignUp
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
