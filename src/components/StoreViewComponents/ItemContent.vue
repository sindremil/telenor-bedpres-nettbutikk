<template>
  <div class="item_content shadow rounded-2">
    <div>
      <img
        class="img-thumbnail img-content"
        alt="..."
        :src="item.image"
        @click="$emit('viewItem', item.id)"
      />
    </div>
    <header>
      {{ formatTitle(item.title) }}
    </header>

    <div class="action_bar">
      <h3>{{ item.price }},-</h3>
      <button type="button" class="btn btn-default button" @click="$emit('addItem', item)">
        Buy
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { StoreItem } from '@/types';
import type { PropType } from 'vue';

defineProps({
  item: {
    type: Object as PropType<StoreItem>,
    required: true
  }
});

defineEmits(['viewItem', 'addItem']);

const formatTitle = (title: string) => {
  return title.split('(')[0];
};
</script>

<style scoped>
.item_content {
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 234px;
  height: 412px;
  overflow: hidden;
  padding: 2rem;
  color: rgba(60, 60, 60, 0.66);
  background-color: #f8f8f8;
  border-style: solid;
  border-width: thin;
  border-color: #f8f8f8;
}

.img-content {
  width: 145px;
  height: 195px;
}

.action_bar {
  display: flex;
  align-items: center;
  gap: 2rem;
  position: absolute;
  bottom: 2rem;
}
.button {
  background-color: hsla(160, 100%, 37%, 1);
}
.button:hover {
  opacity: 50%;
  background-color: hsla(160, 100%, 37%, 1);
}

header {
  font-weight: bolder;
}

img:hover {
  cursor: pointer;
}
</style>
