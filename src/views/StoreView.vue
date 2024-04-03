<template>
  <LoadingIndicator v-if="true" />
</template>

<script setup lang="ts">
import { useFetchData } from '../utils/useFetchData'
import LoadingIndicator from '../components/LoadingIndicator.vue'

const { fetchData } = useFetchData()

fetchData().then((json) => {
  console.log(json)
})
</script>
