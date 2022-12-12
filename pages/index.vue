<template>
  <UICard>
    <section>
      <h1>首頁</h1>
    </section>
    <MyClock />
  </UICard>
</template>

<script lang="ts" setup>
import { useMainStore } from "@/stores/main";
const { logoText } = useMainStore();
useHead({
  // 可用選項：title, base, script, style, meta, link, htmlAttrs, bodyAttrs
  title: "首頁｜" + logoText, // <title>首頁｜辭糖</title>
  meta: [{ name: "description", content: "Nuxt 3 學習筆記" }], // <meta name="description" content="Nuxt 3 學習筆記">
  bodyAttrs: { class: "test" }, // <body class="test"></body>
  script: [{ children: "console.log('Hello world')" }], // <script>console.log('Hello world')< /script>
});
</script>

<style scoped></style>
