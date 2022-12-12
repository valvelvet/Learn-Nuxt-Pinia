<template>
  <UICard>
    <section>
      <h1>關於我們</h1>
    </section>
    <Rainbow />
  </UICard>
</template>

<script lang="ts" setup>
import { useMainStore } from "@/stores/main";
const { logoText } = useMainStore();
import Rainbow from "~~/components/My/Rainbow.vue";

useHead({
  title: "關於我們｜" + logoText,
});
</script>

<style scoped>
::v-deep(a) {
  margin: 10px 20px 0 0;
}
</style>
