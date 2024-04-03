<template>
  <div class="searchBar shadow rounded-2">
    <div class="input-group-btn drop-down">
      <select v-model="filterQuery" class="form-select">
        <option v-for="category in categoriesWithEmpty" :value="category">
          {{ category }}
        </option>
      </select>
    </div>
    <div class="input-group">
      <input
        type="search"
        class="form-control"
        v-model="searchQuery"
        placeholder="Search"
        aria-label="Search"
        aria-describedby="button-addon2"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useVModel } from '@vueuse/core';
import { computed, ref, watch } from 'vue';

const props = defineProps({
  search: {
    type: String,
    default: ''
  },
  categories: {
    type: Array<String>,
    default: []
  }
});

const emits = defineEmits(['update:search', 'update:filter']);

const searchQuery = useVModel(props, 'search', emits);
const filterQuery = ref('Select Category');

const categoriesWithEmpty = computed(() => {
  const list = props.categories;
  list.unshift('Select Category');

  return list;
});

watch(filterQuery, (value) => {
  emits('update:filter', value);
});
</script>

<style scoped>
.searchBar {
  display: flex;
  flex-direction: row;
  gap: 2rem;

  padding: 0.5rem;

  background-color: #f8f8f8;
  border-style: solid;
  border-width: thin;
  border-color: #f8f8f8;
}

.drop-down {
  width: 30%;
}
</style>
