import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Student from '../views/Student.vue'
import Kompanije from '../views/Kompanije.vue'
import Prijava from '@/views/Prijava.vue'
import Pozorista from '@/views/Pozorista.vue'
import PozoristeDetalji from '@/views/PozoristeDetalji.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'pozorista',
    component: Pozorista
  },
  {
    path: '/pozoriste/:id',
    name: 'PozoristeDetalji',
    component: PozoristeDetalji
  },
  {
    path: '/home',
    name: 'home',
    component: HomeView
  },
  {
    path: '/student/:id',
    name: 'Student',
    component: Student
  },
  {
    path: '/kompanije',
    name: 'Kompanije',
    component: Kompanije
  },
  {
    path: '/prijavi-promenu',
    name: 'Prijava',
    component: Prijava
  } 
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
