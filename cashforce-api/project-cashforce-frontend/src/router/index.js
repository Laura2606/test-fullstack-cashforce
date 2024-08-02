import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/HomeView.vue';
import OrderList from '@/components/OrderList.vue';
import OrderDetail from '@/components/OrderDetail.vue'
const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/',
        name: 'order-list',
        component: OrderList,
    },
    {
        path: '/orders/:id',
        name: 'order-detail',
        component: OrderDetail,
        props: true,
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

export default router;
