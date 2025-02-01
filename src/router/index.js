import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import DemoView from '@/views/Demo/DemoView.vue'
import IntroView from '@/views/Demo/IntroView.vue'
import ErrorView from '@/views/Demo/ErrorView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/demo',
      name: 'demo',
      component: DemoView,
    },
    {
      path: '/intro',
      name: 'intro',
      component: IntroView,
    },
    {
      path: '/error',
      name: 'error',
      component: ErrorView,
    },
  ],
})

export default router
