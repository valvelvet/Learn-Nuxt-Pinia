<template>
  <UICard>
    <section>
      <h1>Welcome to the homepage</h1>
      <UIButton>
        <NuxtLink to="/about"> About Page > </NuxtLink>
      </UIButton>
      <UIButton>
        <NuxtLink to="/products"> Products Page > </NuxtLink>
      </UIButton>
    </section>
    <MyClock />
  </UICard>
</template>

<script lang="ts" setup>
useHead({
  // 可用選項：title, base, script, style, meta, link, htmlAttrs, bodyAttrs
  title: "首頁｜Nuxt-Learn", // <title>首頁｜Nuxt-Learn</title>
  meta: [{ name: "description", content: "Nuxt 3 學習筆記" }], // <meta name="description" content="Nuxt 3 學習筆記">
  bodyAttrs: { class: "test" }, // <body class="test"></body>
  script: [{ children: "console.log('Hello world')" }] // <script>console.log('Hello world')< /script>
});
</script>

<style scoped>
::v-deep(button) {
  margin: 10px 20px 0 0;
}
</style>
