import { createRouter, createWebHistory } from 'vue-router'

import About from '../views/About'
import Login from '../views/Login'
import TaskBoard from '../views/TaskBoard'

const routes = [
    {
        path: '/',
        component: Login
    },
    {
        path: '/taskboard',
        component: TaskBoard
    },
    {
        path: '/about',
        component: About
    },{
        path: '/:catchAll(.*)',
        component: Login
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router