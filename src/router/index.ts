import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import KatalogView from '../views/KatalogView.vue'
import ContactView from '../views/ContactView.vue'
import CreatorsView from '../views/CreatorsView.vue'
import AddCultureView from '../views/AddCultureView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/katalog',
      name: 'katalog',
      component: KatalogView
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView
    },
    {
      path: '/add-culture',
      name: 'creators',
      component: AddCultureView
    },
    {
      path: '/creators',
      name: 'creators',
      component: CreatorsView
    },
    
  ]
})

export default router
