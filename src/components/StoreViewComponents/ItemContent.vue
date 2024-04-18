<template>
  <div class="content">
    <h2>{{ item.title }}</h2>
    <img :src="item.image" alt="item image" class="image" />
    <p>{{ item.description }}</p>
    <p>{{ item.price }}</p>
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
  .image {
    width: 100px;
  }

  .content {
    width: 70%;
  }
<style scoped></style>
