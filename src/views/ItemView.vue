<template>
  <LoadingIndicator v-if="loading" />

  <div v-if="!loading" class="container">
    <div class="content shadow rounded-2">
      <div class="top_content">
        <img class="img-thumbnail right_side" alt="..." :src="itemData?.image" />
        <div class="left_side">
          <h3>
            {{ itemData?.title }}
          </h3>
          <div class="action_bar">
            <h4>{{ itemData?.price }},-</h4>
            <button type="button" class="btn btn-default button" @click="cart.addToCart(itemData)">
              Buy
            </button>
          </div>
          <div>
            {{ itemData?.description }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import { useFetchSingleItem } from '@/utils/useFetchSingleItem';
import { computed, ref } from 'vue';
import type { StoreItem } from '@/types';
import { injectShoppingCartStore } from '@/stores/ShoppingCartStore';
import LoadingIndicator from '@/components/LoadingIndicator.vue';

const cart = injectShoppingCartStore();

const route = useRoute();
const { fetchSingleItem } = useFetchSingleItem();

const itemData = ref<StoreItem>();

const id = computed(() => route.params.id as string);

const loading = computed(() => !itemData.value);

fetchSingleItem(id.value).then((item) => (itemData.value = item));
</script>

<style scoped>
.top_content {
  display: flex;
  flex-direction: row;
  gap: 2rem;
}

.right_side {
  max-height: 600px;
  max-width: 800px;
}

.left_side {
  display: flex;
  flex-direction: column;
  padding: 5rem;
  gap: 2rem;
}

.action_bar {
  display: flex;
  align-items: center;
  gap: 2rem;
}
.button {
  background-color: hsla(160, 100%, 37%, 1);
}
.button:hover {
  opacity: 50%;
  background-color: hsla(160, 100%, 37%, 1);
}
</style>
