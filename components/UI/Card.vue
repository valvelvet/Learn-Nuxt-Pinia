<template>
  <div>
    <slot />
  </div>
</template>

<script lang="ts" setup></script>

<style scoped>
div {
  border-radius: 10px;
  max-width: 700px;
  width: calc(100% - 40px);
  box-shadow: 0 0 10px 0 #ccc;
  margin: 20px auto;
  padding: 20px;
}
</style>
