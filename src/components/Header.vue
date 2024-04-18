<template>
  <div class="header">
    <RouterLink to="/" class="heading">
      Sett Opp En Shop A!
      <img src="../assets/logo.png" alt="logo" height="30" width="30" />
    </RouterLink>

    <ul class="nav nav-tabs">
      <li class="nav-item">
        <a :class="getActiveClass('store')">
          <RouterLink to="/">
            <font-awesome-icon class="icon_color" icon="store" size="xl" />
          </RouterLink>
        </a>
      </li>

      <li class="nav-item">
        <a :class="getActiveClass('cart')">
          <RouterLink to="/cart">
            <font-awesome-icon class="icon_color" icon="cart-shopping" size="xl" />
          </RouterLink>
        </a>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()

const getActiveClass = (routeName: string) => {
  return `nav-link ${routeName === route.name ? 'active' : ''}`
}
</script>

<style scoped>
.header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.heading {
  text-decoration: none;
  color: Black;
}
.heading:hover {
  background-color: rgba(235, 235, 235, 0.64);
}

.icon_color {
  color: hsla(160, 100%, 37%, 1);
}
</style>
