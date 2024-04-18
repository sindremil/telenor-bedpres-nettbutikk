<template>
  <LoadingIndicator v-if="!data" />
  <div v-else class="container">
    <ItemOverview :items="data" />
  </div>
 

</template>

<script setup lang="ts">
import { useFetchData } from '../utils/useFetchData'
import LoadingIndicator from '../components/LoadingIndicator.vue'
import ItemOverview from '../components/StoreViewComponents/ItemOverview.vue'
import SearchAndFilter from '../components/StoreViewComponents/SearchAndFilter.vue';
import { ref } from 'vue';
import type { StoreItem } from '../types';

const { fetchData } = useFetchData()

const data = ref<StoreItem[]>()

fetchData().then((json) => {
  console.log(json)
  data.value = json
})
</script>

<style scoped>
 .container {
   display: flex;
   flex-direction: column;
   align-items: center;
 }
</style>