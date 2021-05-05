import { RouteRecordRaw } from 'vue-router'
import GuestGuard from 'src/middleware/guest'
import AuthGuard from 'src/middleware/auth'

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        component: () => import('layouts/MainLay.vue'),
        // component: () => import('layouts/MainLayout.vue'),
        children: [
            { path: '', component: () => import('pages/Index.vue') },
            // { path: '', component: () => import('components/home.vue'), name: 'home' },
            {
                path: '/login',
                component: () => import('components/auth/Login.vue'),
                name: 'login',
            }, //, beforeEnter: GuestGuard },
            {
                path: '/registration',
                component: () => import('components/auth/Registration.vue'),
                name: 'registration',
            }, //, beforeEnter: GuestGuard },
            {
                path: '/new',
                component: () => import('components/ads/NewAd.vue'),
                name: 'new',
            }, //, beforeEnter: AuthGuard },
            {
                path: '/list',
                component: () => import('components/ads/AdList.vue'),
                name: 'list',
            }, //, beforeEnter: AuthGuard },
            {
                path: '/ad/:id',
                component: () => import('components/ads/Ad.vue'),
                name: 'ad',
                props: true,
            }, //, beforeEnter: AuthGuard },
            {
                path: '/orders',
                component: () => import('components/user/Orders.vue'),
                name: 'orders',
            }, //, beforeEnter: AuthGuard },
            {
                path: '/user',
                component: () => import('components/user/UserCard.vue'),
                name: 'userinfo',
            }, //, beforeEnter: AuthGuard },
            {
                path: '/colors',
                component: () => import('components/materials/colorsList.vue'),
                name: 'colors',
            }, //, beforeEnter: GuestGuard },
            {
                path: '/roles',
                component: () => import('components/common/blankPage.vue'),
                name: 'roles',
            }, //, beforeEnter: GuestGuard },
            {
                path: '/users',
                component: () => import('components/common/blankPage.vue'),
                name: 'users',
            }, //, beforeEnter: GuestGuard },
            {
                path: '/hardness-scales',
                component: () => import('components/materials/hardScales.vue'),
                name: 'hardness-scales',
            }, //, beforeEnter: GuestGuard },
            {
                path: '/common-hardness',
                component: () => import('components/common/blankPage.vue'),
                name: 'common-hardness',
            }, //, beforeEnter: GuestGuard },
            {
                path: '/material-types',
                component: () => import('components/common/blankPage.vue'),
                name: 'material-types',
            }, //, beforeEnter: GuestGuard },
            {
                path: '/imitation-materials',
                component: () => import('components/common/blankPage.vue'),
                name: 'imitation-materials',
            }, //, beforeEnter: GuestGuard },
            {
                path: '/chemical-resistance',
                component: () => import('components/common/blankPage.vue'),
                name: 'chemical-resistance',
            }, //, beforeEnter: GuestGuard },
            {
                path: '/companies',
                component: () => import('components/common/blankPage.vue'),
                name: 'companies',
            }, //, beforeEnter: GuestGuard },
            {
                path: '/tool-classes',
                component: () => import('components/common/blankPage.vue'),
                name: 'tool-classes',
            }, //, beforeEnter: GuestGuard },
            {
                path: '/tool-types',
                component: () => import('components/common/blankPage.vue'),
                name: 'tool-types',
            }, //, beforeEnter: GuestGuard },
            {
                path: '/technology-types',
                component: () => import('components/common/blankPage.vue'),
                name: 'technology-types',
            }, //, beforeEnter: GuestGuard },
            {
                path: '/technology',
                component: () => import('components/common/blankPage.vue'),
                name: 'technology',
            }, //, beforeEnter: GuestGuard },
            {
                path: '/measuring-standarts',
                component: () => import('components/common/blankPage.vue'),
                name: 'measuring-standarts',
            }, //, beforeEnter: GuestGuard },
            {
                path: '/statuses',
                component: () => import('components/common/blankPage.vue'),
                name: 'statuses',
            }, //, beforeEnter: GuestGuard },
        ],
    },

    // Always leave this as last one,
    // but you can also remove it
    {
        path: '/:catchAll(.*)*',
        component: () => import('pages/Error404.vue'),
    },
]

export default routes
