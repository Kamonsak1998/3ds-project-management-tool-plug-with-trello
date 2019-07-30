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
            component: () => import('@/components/Confirmemail/Confirmemail')
        },
        {
            path: '/auth/success',
            name: 'success',
            component: () => import('@/components/Confirmemail/success')
        },
        
    ],

})
