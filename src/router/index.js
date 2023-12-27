import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/getHopeBooks',
    name: 'getHopeBooks',
    component: () => import(/* webpackChunkName: "about" */ '../views/HopeBooksView.vue')
  },
  {
    path: '/getHopeBookForm',
    name: 'getHopeBookForm',
    component: () => import(/* webpackChunkName: "about" */ '../views/HopeBookFormView.vue')
  },
  {
      path: '/photoReview',
      name: 'photoReview',
      component: () => import(/* webpackChunkName: "about" */ '../views/PhotoReviewView.vue')
    }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
