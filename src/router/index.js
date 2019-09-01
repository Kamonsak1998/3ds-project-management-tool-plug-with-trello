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
            name: 'feature',
            component: () => import('@/components/view/feaTure')
        },
        {
            path: '/setdatetime',
            name: 'setdatetime',
            component: () => import('@/components/SetDateTime/setdatetime')
        }





    ],

})
