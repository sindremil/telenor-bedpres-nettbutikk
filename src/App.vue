<template>
  <div class="header-component shadow">
    <Header />
  </div>

  <RouterView />
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router';
import { provideShoppingCartStore } from '@/stores/ShoppingCartStore';
import Header from '@/components/Header.vue';

const shoppingCart = provideShoppingCartStore();

shoppingCart.newShoppingCart();
</script>

<style scoped>
.header-component {
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 100;
  color: #181818;
  background-color: aqua;
  padding: 0.5rem 2rem;
  background-color: rgba(235, 235, 235, 0.64);
}
</style>
