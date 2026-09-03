import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '../stores/authStore'

import Login from '../pages/Login.vue'
import Unauthorized from '../pages/Unauthorized.vue'
import Dashboard from '../pages/Dashboard.vue'
import Posts from '../pages/Posts.vue'
import AddPost from '../pages/AddPost.vue'
import EditPost from '../pages/EditPost.vue'
import Products from '../pages/Products.vue'
import Articles from '../pages/Articles.vue'
import Careers from '../pages/Careers.vue'
import Categories from '../pages/Categories.vue'
import Tags from '../pages/Tags.vue'
import Media from '../pages/Media.vue'
import SeoAudit from '../pages/SeoAudit.vue'
import Settings from '../pages/Settings.vue'

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: { guestOnly: true, title: 'Masuk ‹ Kencana Admin' }
  },
  {
    path: '/unauthorized',
    name: 'Unauthorized',
    component: Unauthorized,
    meta: { title: '403 Forbidden ‹ Kencana Admin' }
  },
  {
    path: '/',
    redirect: '/dashboard'
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    meta: { requiresAuth: true, permission: 'dashboard.view', title: 'Dashboard ‹ Kencana Admin' }
  },
  {
    path: '/posts',
    name: 'Posts',
    component: Posts,
    meta: { requiresAuth: true, permission: 'articles.view', title: 'Semua Artikel ‹ Kencana Admin' }
  },
  {
    path: '/posts/new',
    name: 'AddPost',
    component: AddPost,
    meta: { requiresAuth: true, permission: 'articles.create', title: 'Tambah Artikel Baru ‹ Kencana Admin' }
  },
  {
    path: '/posts/edit/:id',
    name: 'EditPost',
    component: EditPost,
    meta: { requiresAuth: true, permission: 'articles.update', title: 'Edit Artikel ‹ Kencana Admin' }
  },
  {
    path: '/products',
    name: 'Products',
    component: Products,
    meta: { requiresAuth: true, permission: 'products.view', title: 'Katalog Produk SNI ‹ Kencana Admin' }
  },
  {
    path: '/articles',
    name: 'Articles',
    component: Articles,
    meta: { requiresAuth: true, permission: 'articles.view', title: 'Artikel Edukasi ‹ Kencana Admin' }
  },
  {
    path: '/careers',
    name: 'Careers',
    component: Careers,
    meta: { requiresAuth: true, permission: 'careers.view', title: 'Lowongan Karir ‹ Kencana Admin' }
  },
  {
    path: '/categories',
    name: 'Categories',
    component: Categories,
    meta: { requiresAuth: true, permission: 'articles.view', title: 'Kategori ‹ Kencana Admin' }
  },
  {
    path: '/tags',
    name: 'Tags',
    component: Tags,
    meta: { requiresAuth: true, permission: 'articles.view', title: 'Tags ‹ Kencana Admin' }
  },
  {
    path: '/media',
    name: 'Media',
    component: Media,
    meta: { requiresAuth: true, permission: 'media.view', title: 'Media Library ‹ Kencana Admin' }
  },
  {
    path: '/seo-audit',
    name: 'SeoAudit',
    component: SeoAudit,
    meta: { requiresAuth: true, permission: 'seo.analyze', title: 'Kencana SEO Analyzer ‹ Kencana Admin' }
  },
  {
    path: '/settings',
    name: 'Settings',
    component: Settings,
    meta: { requiresAuth: true, permission: 'settings.view', title: 'Pengaturan Sistem ‹ Kencana Admin' }
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/dashboard'
  }
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  }
})

// RBAC Navigation Guard
router.beforeEach(async (to, from, next) => {
  const authStore = useAuthStore()

  // 1. Guest-only routes (e.g. /login) -> redirect to /dashboard if already logged in
  if (to.meta.guestOnly && authStore.isAuthenticated) {
    return next('/dashboard')
  }

  // 2. Protected routes -> redirect to /login if not authenticated
  if (to.meta.requiresAuth && !authStore.isAuthenticated) {
    return next({ path: '/login', query: { redirect: to.fullPath } })
  }

  // 3. Permission checks -> redirect to /unauthorized (403 Forbidden page) if unauthorized
  if (to.meta.permission && typeof to.meta.permission === 'string') {
    if (!authStore.hasPermission(to.meta.permission)) {
      return next({
        path: '/unauthorized',
        query: {
          required: to.meta.permission,
          path: to.fullPath
        }
      })
    }
  }

  next()
})

router.afterEach((to) => {
  if (to.meta.title) {
    document.title = to.meta.title as string
  }
})

export default router
