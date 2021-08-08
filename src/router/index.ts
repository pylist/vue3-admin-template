import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        component: () => import("@/views/home/index.vue")
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router