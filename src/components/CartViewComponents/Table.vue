<template>
  <div class="cart">
    <ul class="list-group">
      <TableHeader :has-items="!!cartItems.length" />

      <TableContent
        v-for="cartItem in cartItems"
        :key="cartItem.item.id"
        :cart-item="cartItem"
        @delete-item="$emit('deleteItem', $event)"
        @add-item="$emit('addItem', $event)"
      />

      <TableSummary :total-cart-cost="totalCartCost" :cart-quantity="cartQuantity" />
    </ul>

    <TableActionRow
      :has-items="!cartItems.length"
      :total-cart-cost="totalCartCost"
      @empty-cart="$emit('emptyCart')"
      @checkout="$emit('checkout', $event)"
    />
  </div>
</template>

<script setup lang="ts">
import type { PropType } from 'vue';
import type { CartItem } from '@/types';
import { computed } from 'vue';
import TableContent from '@/components/CartViewComponents/TableContent.vue';
import TableActionRow from '@/components/CartViewComponents/TableActionRow.vue';
import TableSummary from '@/components/CartViewComponents/TableSummary.vue';
import TableHeader from '@/components/CartViewComponents/TableHeader.vue';

const props = defineProps({
  cartItems: {
    type: Array as PropType<Array<CartItem>>,
    required: true
  }
});

defineEmits(['deleteItem', 'addItem', 'emptyCart', 'checkout']);

const cartQuantity = computed(() => {
  let total = 0;

  props.cartItems?.forEach((item) => {
    total = total + item.quantity;
  });

  return total;
});
const totalCartCost = computed(() => {
  let total = 0;

  props.cartItems?.forEach((item) => {
    total = total + item.totalPrice;
  });

  return total.toFixed(2);
});
</script>

<style scoped>
.cart {
  display: flex;
  gap: 2rem;
  flex-direction: column;
  width: 100%;
}
</style>
