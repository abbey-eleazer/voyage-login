import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from '@/components/LoginPage.vue'
import CongratsPage from '@/components/CongratsPage.vue'
import SignupView from '@/views/SignupView.vue'
import { auth } from '@/firebase/firebase'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: LoginPage,
    },
    {
      path: '/',
      name: 'congrats',
      component: CongratsPage,
      meta: {
        requiresAuth: true,
      },
    },
   
    {
      path: '/signup',
      name: 'signup',
      component: SignupView,

    },
  ],
})

router.beforeEach((to, from, next) => {
  if ( !auth && to.name !== 'login') { 
    next({ name: 'login' })
   return 
  }

  if (to.path === '/login' && auth.currentUser) {
    next({ name: 'congrats' })
      return
  }
 
  if (to.matched.some(record => record.meta.requiresAuth) && !auth.currentUser) {
    next()
  }
  next()
}
)

export default router
