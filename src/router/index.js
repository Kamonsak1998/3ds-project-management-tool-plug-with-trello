import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/auth/login',
            name: 'login',
            component: () => import('@/components/auth/login')
        },
        {
            path: '/auth/register',
            name: 'register',
            component: () => import('@/components/auth/register')
        },
        {
            path: '/auth/confirmemail',
            name: 'Confirmemail',
            component: () => import('@/components/auth/Confirmemail/Confirmemail')
        },
        {
            path: '/auth/success',
            name: 'success',
            component: () => import('@/components/auth/Confirmemail/success')
        },
        {
            path: '/leaderBoard/leaderboard',
            name: 'leaderboard',
            component: () => import('@/components/leaderBoard/Leaderboard')
        },
        {
            path: '/history/charts',
            name: 'charts',
            component: () => import('@/components/history/charts')
        },
        {
            path: '/dashboards',
            name: 'dashboards',
            component: () => import('@/components/view/dashBoards')
        },
        {
            path: '/feature',
            name: 'feaTure',
            component: () => import('@/components/view/feaTure')
        }



    ],

})
