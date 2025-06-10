import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'knowledge-graph',
      component: () => import('@/views/graph1/index.vue')
    },
    {
      path: '/graphs',
      name: 'graphs',
      component: () => import('@/views/graphs/index.vue'),
    },
  ]
})

export default router
