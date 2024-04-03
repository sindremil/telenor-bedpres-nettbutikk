<template>
  <LoadingIndicator v-if="loading" />

  <div v-if="!loading" class="container">
    <SearchAndFilter
      v-model:search="searchValue"
      :categories="categories"
      v-model:filter="filterValue"
    />

    <ItemOverview :items="items" @view-item="viewItem($event)" @add-item="cart.addToCart($event)" />
  </div>
</template>

<script setup lang="ts">
import ItemOverview from '@/components/StoreViewComponents/ItemOverview.vue'
import { useFetchData } from '@/utils/useFetchData'
import { computed, ref } from 'vue'
import type { StoreItem } from '@/types'
import SearchAndFilter from '@/components/StoreViewComponents/SearchAndFilter.vue'
import { searchAndFilter } from '@/utils/searchAndFilter'
import { useFetchCategories } from '@/utils/useFetchCategories'
import { injectShoppingCartStore } from '@/stores/ShoppingCartStore'
import { useRouter } from 'vue-router'
import LoadingIndicator from '@/components/LoadingIndicator.vue'

const cart = injectShoppingCartStore()

const router = useRouter()
const { fetchData } = useFetchData()
const { fetchCategories } = useFetchCategories()
const { performSearch, preformFilter } = searchAndFilter()

const storeItems = ref<Array<StoreItem>>([])
const categories = ref<Array<string>>([])
const searchValue = ref('')
const filterValue = ref('Select Category')

const items = computed(() => {
  let newItems = storeItems.value

  if (searchValue.value) {
    newItems = performSearch(newItems, searchValue.value)
  }

  if (filterValue.value !== 'Select Category') {
    newItems = preformFilter(newItems, filterValue.value)
  }

  return newItems
})

const loading = computed(() => !(storeItems.value.length && categories.value.length))

const viewItem = (id: number) => {
  router.push({
    name: 'itemView',
    params: {
      id: id
    }
  })
}

fetchData().then((json) => {
  storeItems.value = json
})
fetchCategories().then((json) => {
  categories.value = json
})
</script>
