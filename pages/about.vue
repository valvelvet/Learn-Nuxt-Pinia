<template>
  <UICard>
    <section>
      <h1>Welcome to the about page</h1>
      <p>This page will be displayed at the /about route.</p>
      <UIButton>
        <NuxtLink to="/"> &lt; Home Page </NuxtLink>
      </UIButton>
      <UIButton>
        <NuxtLink to="/products"> Products Page > </NuxtLink>
      </UIButton>
    </section>
    <Rainbow />
  </UICard>
</template>

<script lang="ts" setup>
import Rainbow from '~~/components/My/Rainbow.vue';

useHead({
  title: "about｜Nuxt-Learn",
});
</script>

<style scoped>
::v-deep(button) {
  margin: 10px 20px 0 0;
}
</style>
