<template>
  <NuxtLink v-if="to" :to="to">
    <slot></slot>
  </NuxtLink>
  <button v-else>
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
defineProps<{
  to?: string;
}>();
</script>

<style scoped>
button , a{
  display: inline-block;
  border: none;
  box-shadow: 0 1px 5px 0 #ccc;
  border-radius: 20px;
  color: brown;
  height: 2rem;
  line-height: 2rem;
  padding: 0 15px;
}
button:hover, a:hover {
  box-shadow: inset 0 1px 5px 0 #0009;
}
a.router-link-active {
  box-shadow: inset 0 1px 5px 0 #ccc;
  background-color: #444;
  color: #fcc;
}
</style>
