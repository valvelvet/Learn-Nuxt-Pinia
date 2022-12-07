<template>
  <div>
    <BaseHeader />
    <main>
      <slot />
    </main>
    <BaseFooter />
  </div>
</template>

<script lang="ts" setup></script>

<style scoped>
main {
  min-height: calc(100vh - 92px);
}
</style>