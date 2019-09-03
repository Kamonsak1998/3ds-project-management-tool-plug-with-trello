import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store'
Vue.use(Router)

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/auth/login',
            name: 'login',
            meta: { authSuccess: true },
            component: () => import('@/components/auth/login')
        },
        {
            path: '/leaderBoard/leaderboard',
            name: 'leaderboard',
            meta: { requiresAuth: true },
            component: () => import('@/components/leaderBoard/Leaderboard')
        },
        {
            path: '/history/charts',
            name: 'charts',
            meta: { requiresAuth: true },
            component: () => import('@/components/history/charts')
        },
        {
            path: '/dashboards',
            name: 'dashboards',
            meta: { requiresAuth: true },
            component: () => import('@/components/view/dashBoards')
        },
        {
            path: '/feature',
            name: 'feature',
            meta: { requiresAuth: true },
            component: () => import('@/components/view/feaTure')
        },
        {
            path: '/setdatetime',
            name: 'setdatetime',
            meta: { requiresAuth: true },
            component: () => import('@/components/SetDateTime/setdatetime')
        }
    ],
})

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (store.getters['token/token']) {
            next()
            return
        }
        next('/auth/login')
    } else {
        next()
    }
})
router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.authSuccess)) {
        if (store.getters['token/token']) {
            next('/dashboards')
            return
        }
        next()
    } else {
        next()
    }
})
export default router
