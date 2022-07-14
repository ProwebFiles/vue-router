import { createRouter, createWebHashHistory, createWebHistory } from "vue-router";


import Home from '@/pages/Home.vue';
import About from '@/pages/About.vue';
import Cars from '@/pages/Cars.vue';
import CarsItem from '@/components/CarsItem.vue';
import NotFound from '@/pages/NotFound.vue';

const routers = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/about',
            name: 'about' ,
            component: About
        },
        {
            path: '/cars',
            name: 'cars' ,
            component: Cars
        },
        {
            path: '/cars/:id',
            name: 'carsitem',
            component: CarsItem
        },
        {
            path: '/:pathMatch(.*)*',
            name: '404',
            component: NotFound
        }
    ]
})



export default routers;

