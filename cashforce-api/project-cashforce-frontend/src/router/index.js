import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/HomeView.vue';
import NotasFiscais from '@/views/NotasFiscais.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },

    {
        path: '/notas-fiscais',
        name: 'notas-fiscais',
        component: NotasFiscais,
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

export default router;
