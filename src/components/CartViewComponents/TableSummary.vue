<template>
  <li class="list-group-item list-group-item-success">
    <p>
      Total Quantity:
      <span class="has-text-weight-bold">{{ cartQuantity }}</span>
    </p>

    <p>
      Total Price:
      <span class="has-text-weight-bold">{{ totalCartCost }},-</span>
    </p>
  </li>
</template>

<script setup lang="ts">
defineProps({
  cartQuantity: {
    type: Number,
    default: 0
  },
  totalCartCost: {
    type: String,
    default: ''
  }
});
</script>
