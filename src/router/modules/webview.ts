import {RouteRecordRaw} from 'vue-router'
import {Layout} from '@/router/constant'
const routes: Array<RouteRecordRaw> = [
    {
        path: '/webview',
        name: 'WebView',
        redirect: '/webview/webUI',
        component: Layout,
        meta: {
            title: 'WebView',
            sort: 1,
        },
        children: [
            {
                path: 'webUI',
                name: 'WebUI',
                meta: {
                    title: 'WebUI',
                },
                component: () => import('@/views/WebView/index.vue')
            }
        ],
    },
]
export default routes