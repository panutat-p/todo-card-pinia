import { createRouter, createWebHistory } from 'vue-router';

import Home from '@/views/Home.vue';
import About from '@/views/About.vue';
import EventDetail from '@/views/EventDetail.vue';
import EventList from '@/views/EventList.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/events',
      name: 'EventList',
      component: EventList,
    },
    {
      path: '/events/:id',
      name: 'EventDetail',
      props: true,
      component: EventDetail,
    },
    {
      path: '/',
      name: 'About',
      component: About,
    },
  ],
});

export default router;
