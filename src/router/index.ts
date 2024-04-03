import { createRouter, createWebHistory } from 'vue-router';
import StoreView from '@/views/StoreView.vue';
import ItemView from '@/views/ItemView.vue';
import CartView from '@/views/CartView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'store',
      component: StoreView
    },
    {
      path: '/:id',
      name: 'itemView',
      component: ItemView
    },
    {
      path: '/cart',
      name: 'cart',
      component: CartView
    }
  ]
});

export default router;
