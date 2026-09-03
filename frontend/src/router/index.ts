import { createRouter, createWebHistory } from 'vue-router'

import Dashboard from '../pages/Dashboard.vue'
import Posts from '../pages/Posts.vue'
import AddPost from '../pages/AddPost.vue'
import EditPost from '../pages/EditPost.vue'
import Categories from '../pages/Categories.vue'
import Tags from '../pages/Tags.vue'
import Media from '../pages/Media.vue'
import SeoAudit from '../pages/SeoAudit.vue'
import Settings from '../pages/Settings.vue'

const routes = [
  {
    path: '/',
    redirect: '/dashboard'
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    meta: { title: 'Dashboard ‹ Kencana Admin' }
  },
  {
    path: '/posts',
    name: 'Posts',
    component: Posts,
    meta: { title: 'Posts ‹ Kencana Admin' }
  },
  {
    path: '/posts/new',
    name: 'AddPost',
    component: AddPost,
    meta: { title: 'Add New Post ‹ Kencana Admin' }
  },
  {
    path: '/posts/edit/:id',
    name: 'EditPost',
    component: EditPost,
    meta: { title: 'Edit Post ‹ Kencana Admin' }
  },
  {
    path: '/categories',
    name: 'Categories',
    component: Categories,
    meta: { title: 'Categories ‹ Kencana Admin' }
  },
  {
    path: '/tags',
    name: 'Tags',
    component: Tags,
    meta: { title: 'Tags ‹ Kencana Admin' }
  },
  {
    path: '/media',
    name: 'Media',
    component: Media,
    meta: { title: 'Media Library ‹ Kencana Admin' }
  },
  {
    path: '/seo-audit',
    name: 'SeoAudit',
    component: SeoAudit,
    meta: { title: 'Kencana SEO ‹ Kencana Admin' }
  },
  {
    path: '/settings',
    name: 'Settings',
    component: Settings,
    meta: { title: 'Settings ‹ Kencana Admin' }
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

router.afterEach((to) => {
  if (to.meta.title) {
    document.title = to.meta.title as string
  }
})

export default router
