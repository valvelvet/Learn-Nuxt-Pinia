<template>
  <NuxtLink v-if="to" :to="to">
    <img v-if="icon" :src="icon" alt="" />
    <slot :class="{ hasIcon: icon }"></slot>
  </NuxtLink>
  <button v-else>
    <img v-if="icon" :src="icon" alt="" />
    <slot :class="{ hasIcon: icon }"></slot>
  </button>
</template>

<script setup lang="ts">
defineProps<{
  to?: string;
  icon?: string;
}>();
</script>

<style scoped>
button,
a {
  display: inline-block;
  border: none;
  box-shadow: 0 1px 5px 0 #ccc;
  border-radius: 20px;
  color: brown;
  height: 2rem;
  line-height: 2rem;
  padding: 0 15px;
}
button:hover,
a:hover {
  box-shadow: inset 0 1px 5px 0 #0009;
}
a.router-link-active {
  box-shadow: inset 0 1px 5px 0 #ccc;
  background-color: #444;
  color: #fcc;
}
img {
  display: inline-block;
  height: 1.25rem;
  padding-bottom: 3px;
  filter: invert(50%) sepia(50%) saturate(1000%) hue-rotate(-30deg) brightness(50%);
}
a.router-link-active img {
  filter: invert(100%) sepia(90%) saturate(800%) hue-rotate(-70deg);
}
</style>
