<template>
  <div class="container">
    <div class="content shadow rounded-2">
      <Table
        :cart-items="cart.getCart()"
        @add-item="cart.addToCart($event)"
        @delete-item="cart.removeItemFromCart($event)"
        @empty-cart="emptyCart()"
        @checkout="checkout($event)"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import Table from '@/components/CartViewComponents/Table.vue';
import { injectShoppingCartStore } from '@/stores/ShoppingCartStore';

const cart = injectShoppingCartStore();

const checkout = (totalCost: string) => {
  if (
    confirm(
      `Do you want to checkout with ${totalCost},- \n Click OK, to checkout and get a new cart or Cancel to continue shopping in the same cart`
    )
  ) {
    cart.emptyCart();
  }
};

const emptyCart = () => {
  if (confirm('Are you sure you want o clear the cart?')) {
    cart.emptyCart();
  }
};
</script>
