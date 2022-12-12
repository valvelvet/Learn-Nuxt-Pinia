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
  padding-top: 50px;
  min-height: calc(100vh - 24px);
}
</style>