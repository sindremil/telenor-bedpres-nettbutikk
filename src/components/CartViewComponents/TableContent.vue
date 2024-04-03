<template>
  <li class="list-group-item cart-item">
    <div class="cart-details">
      <h5 class="mb-1">{{ cartItem.item.title }}</h5>
      <p class="mb-1">Prize: {{ cartItem.item.price }},-</p>
      <p class="mb-1">
        Quantity: <span class="badge rounded-pill text-bg-info">{{ cartItem.quantity }}</span>
      </p>
    </div>

    <div class="cart-actions">
      <button
        type="button"
        class="btn btn-danger btn-sm"
        @click="$emit('deleteItem', cartItem.item)"
      >
        <font-awesome-icon class="icon_color" icon="minus" size="xl" />
      </button>
      <button type="button" class="btn btn-success btn-sm" @click="$emit('addItem', cartItem.item)">
        <font-awesome-icon class="icon_color" icon="plus" size="xl" />
      </button>
    </div>
  </li>
</template>

<script setup lang="ts">
import type { PropType } from 'vue';
import type { CartItem } from '@/types';

defineProps({
  cartItem: {
    type: Object as PropType<CartItem>,
    required: true
  }
});

defineEmits(['deleteItem', 'addItem']);
</script>

<style scoped>
.cart-item {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.cart-details {
  display: flex;
  flex-direction: column;
}

.cart-actions {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;
}
</style>
