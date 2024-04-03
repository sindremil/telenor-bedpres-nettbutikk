<template>
  <li v-if="!hasItems" class="list-group-item list-group-item-info">
    <p>Add some items to the cart!</p>
  </li>

  <li v-if="hasItems" class="list-group-item list-group-item-info">
    <h5 class="list-group-item-heading">Cart:</h5>
  </li>
</template>

<script setup lang="ts">
defineProps({
  hasItems: {
    type: Boolean,
    default: false
  }
});
</script>
