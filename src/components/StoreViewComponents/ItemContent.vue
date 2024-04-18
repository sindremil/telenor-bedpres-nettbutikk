<template>
  <div class="content">
    <h2>{{ item.title }}</h2>
    <img :src="item.image" alt="item image" class="image" height="250" />
    <p>{{ item.description }}</p>
    <p>{{ item.price }}$</p>
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
<style scoped>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}
</style>
