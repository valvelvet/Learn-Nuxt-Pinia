<template>
  <UICard>
    <section>
      <h1>商城</h1>
      <p>Buy with your heart.</p>
      <ul>
        <li v-for="item in prods" :key="item.id" class="my-[10px]">
          <UIProductCard :item="item" buttonConext="＋" @buttonClick="addToCart(item.id)"></UIProductCard>
        </li>
      </ul>
    </section>
  </UICard>
</template>

<script setup lang="ts">
import { useCartStore } from "@/stores/cart";
const cartStore = useCartStore();

useHead({
  title: "商城｜Nuxt-Learn",
});
const prods = useProduct();

const addToCart = (id: number) => {
  cartStore.addProduct(id);
};
</script>

<style scoped>
ul {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
li {
  min-width: 30%;
  width: 200px;
}
</style>
