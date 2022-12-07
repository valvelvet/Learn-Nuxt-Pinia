<template>
  <UICard>
    <section v-if="prod">
      <img :src="prod.img" alt="" />
      <h2>{{ prod.name }}</h2>
      <p>$ {{ prod.price }}</p>
    </section>
    <section v-else>
      <h2>無此商品或已下架，看看 <nuxt-link to="/products"> 其他商品吧 ></nuxt-link></h2>
    </section>
  </UICard>
</template>

<script setup lang="ts">
const route = useRoute();
const prods = useProduct();
const pid = parseInt(<string>route.params.pid);
const prod = prods.find((p: any) => p.id === pid);
useHead({
  title: prod?.name+"｜Nuxt-Learn",
});
</script>

<style scoped>
::v-deep(a){
  color: brown;
}
</style>
