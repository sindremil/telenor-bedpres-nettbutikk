<template>
  <div class="action-row">
    <button :disabled="hasItems" class="btn btn-success" @click="$emit('checkout', totalCartCost)">
      Checkout
    </button>

    <button class="btn btn-danger" @click="$emit('emptyCart')">Delete All items</button>
  </div>
</template>

<script setup lang="ts">
defineProps({
  hasItems: {
    type: Boolean,
    default: false
  },

  totalCartCost: {
    type: String,
    default: ''
  }
});

defineEmits(['emptyCart', 'checkout']);
</script>

<style scoped>
.action-row {
  display: flex;
  gap: 2rem;
}
</style>
