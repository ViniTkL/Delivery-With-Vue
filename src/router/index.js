import { createRouter, createWebHistory } from 'vue-router'
import SplashView from"@/views/SplashView.vue"
import HomeView from"@/views/HomeView.vue"
import DetalheCategoryView from"@/views/DetalheCategoryView.vue"
import DetalheProdutoView from "@/views/DetalhesProduto.vue"
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "splash",
      component: SplashView
    },
    {
      path: "/home",
      name: "home",
      component: HomeView
    },
    {
      path: "/detalhe-categoria",
      name: "/detalhe-categoria",
      component: DetalheCategoryView
    },
    {
      path: "/detalhe-produto",
      name: "/detalhe-produto",
      component: DetalheProdutoView
    }
  ]
})

export default router
