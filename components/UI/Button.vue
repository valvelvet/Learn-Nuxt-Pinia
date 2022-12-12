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
  box-shadow: 0 1px 5px 0 #888;
  border-radius: 20px;
  color: var(--main-cyan);
  height: 2rem;
  line-height: 2rem;
  padding: 0 15px;
}
button:not(:disabled):hover,
a:hover {
  box-shadow: inset 0 1px 5px 0 #0008;
}
a.router-link-active {
  box-shadow: inset 0 1px 5px 0 var(--dark-cyan);
  color: var(--dark-cyan);
}
img {
  display: inline-block;
  height: 1.25rem;
  padding-bottom: 3px;
  filter: invert(20%) sepia(70%) saturate(1500%) hue-rotate(190deg);
}
a.router-link-active img {
  filter: invert(20%) sepia(50%) saturate(500%) hue-rotate(170deg);
}
</style>
