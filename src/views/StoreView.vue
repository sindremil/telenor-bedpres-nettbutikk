<template>
  <LoadingIndicator v-if="!data" />
  <ItemOverview v-else :items="data" />

</template>

<script setup lang="ts">
import { useFetchData } from '../utils/useFetchData'
import LoadingIndicator from '../components/LoadingIndicator.vue'
import ItemOverview from '../components/StoreViewComponents/ItemOverview.vue'
import { ref } from 'vue';
import type { StoreItem } from '../types';

const { fetchData } = useFetchData()

const data = ref<StoreItem[]>()

fetchData().then((json) => {
  console.log(json)
  data.value = json
})
</script>
