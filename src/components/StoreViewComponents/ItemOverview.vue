<template>
  <div class="overview">
    <ItemContent
      v-for="item in items"
      :item="item"
      :key="item.id"
      @add-item="$emit('addItem', $event)"
      @view-item="$emit('viewItem', $event)"
    />
  </div>
</template>

<script setup lang="ts">
import ItemContent from '@/components/StoreViewComponents/ItemContent.vue';
import type { StoreItem } from '@/types';

defineProps({
  items: {
    type: Array<StoreItem>,
    required: true
  }
});

defineEmits(['viewItem', 'addItem']);
</script>

<style scoped>
.overview {
  display: flex;
  justify-content: center;
  flex-direction: row;
  gap: 2rem;
  flex-wrap: wrap;
}
</style>
