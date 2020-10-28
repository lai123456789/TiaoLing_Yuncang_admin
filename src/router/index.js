import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'/'el-icon-x' the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },

  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [{
      path: 'dashboard',
      name: 'Dashboard',
      component: () => import('@/views/dashboard/index'),
      meta: { title: '系统首页', icon: 'dashboard' }
    }]
  },
  {
    path: '/orderPush',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'OrderPush',
        component: () => import('@/views/orderPush/index'),
        meta: { title: '订单推送', icon: 'link' }
      }
    ]
  },
  {
    path: '/fictitious',
    component: Layout,
    redirect: '/fictitious/table',
    name: 'fictitious',
    meta: { title: '虚拟仓', icon: 'el-icon-s-help' },
    children: [
      {
        path: 'createOrder',
        name: 'createOrder',
        component: () => import('../views/fictitious/createOrder/createOrder.vue'),
        meta: { title: '待创建订单', icon: 'table' }
      },
      {
        path: 'Pending',
        name: 'Pending',
        component: () => import('../views/fictitious/Pending/pengding.vue'),
        meta: { title: '待处理订单', icon: 'table' }
      },
      {
        path: 'complete',
        name: 'complete',
        component: () => import('../views/fictitious/complete/complete.vue'),
        meta: { title: '已完成订单', icon: 'table' }
      },
    ]
  },
  {
    path: '/returning',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'returning',
        component: () => import('../views/return/return.vue'),
        meta: { title: '退件仓', icon: 'form' }
      }
    ]
  },
  {
    path: '/invite',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'invite',
        component: () => import('../views/invite/invite.vue'),
        meta: { title: '邀请返现', icon: 'form' }
      }
    ]
  },
  {
    path: '/personCenter',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'personCenter',
        component: () => import('@/views/personCenter/index'),
        // meta: { title: '个人中心', icon: 'form' }
      }
    ]
  },
  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
