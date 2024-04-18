<template>
  <div class="content">
    <h2>{{ item.title }}</h2>
    <p>{{ item.description }}</p>
    <button @click="$emit('addItem', item)">Add to cart</button>
  </div>
</template>

<script setup lang="ts">
import LoadingIndicator from '../../components/LoadingIndicator.vue'

defineProps({
  item: {
    type: Object,
    required: true
  }
})
</script>

<style scoped></style>
