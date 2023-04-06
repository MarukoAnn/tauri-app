import { router } from '../model/route';
import { lazy } from 'react';

const routers: router[] = [
    {
        path: '/',
        redirect: '/login',
    },
    {
        path: '/login',
        name: 'login',
        component: lazy(() => import('../pages/login/login')),
    },
    {
        path: '/home',
        name: 'home',
        component: lazy(() => import('../pages/home/home')),
    },
];
export default routers