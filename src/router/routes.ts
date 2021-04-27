import { RouteRecordRaw } from 'vue-router';
import GuestGuard from "src/middleware/guest";
import AuthGuard from "src/middleware/auth";

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLay.vue'),
    // component: () => import('layouts/MainLayout.vue'),
    children: [
      // { path: '', component: () => import('pages/Index.vue') },
      { path: '', component: () => import('components/home.vue'), name: 'home' },
      { path: '/login', component: () => import('components/Auth/Login.vue'), name: 'login'}, //, beforeEnter: GuestGuard },
      { path: '/registration', component: () => import('components/Auth/Registration.vue'), name: 'registration'}, //, beforeEnter: GuestGuard },
      { path: '/new', component: () => import('components/Ads/NewAd.vue'), name: 'new'}, //, beforeEnter: AuthGuard },
      { path: '/list', component: () => import('components/Ads/AdList.vue'), name: 'list'}, //, beforeEnter: AuthGuard },
      { path: '/ad/:id', component: () => import('components/Ads/Ad.vue'), name: 'ad', props: true}, //, beforeEnter: AuthGuard },
      { path: '/orders', component: () => import('components/User/Orders.vue'), name: 'orders'}, //, beforeEnter: AuthGuard },
      { path: '/user', component: () => import('components/User/UserCard.vue'), name: 'userinfo'}, //, beforeEnter: AuthGuard },
      { path: '/materials', component: () => import('components/Materials/MaterialsList.vue'), name: 'materials'}, //, beforeEnter: GuestGuard },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: Error404
  }
];

export default routes;
