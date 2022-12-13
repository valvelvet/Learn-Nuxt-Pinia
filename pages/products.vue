<template>
  <UICard>
    <section>
      <h1>商城</h1>
      <p>Buy with your heart.</p>
      <ul>
        <li v-for="item in prods" :key="item.id" class="my-[10px]">
          <ProductCard :item="item" buttonConext="＋" @buttonClick="addToCart(item.id)"></ProductCard>
        </li>
      </ul>
    </section>
  </UICard>
</template>

<script setup lang="ts">
import { useCartStore } from "@/stores/cart";
import { useMainStore } from "@/stores/main";
const cartStore = useCartStore();
const { logoText } = useMainStore();

useHead({
  title: "商城｜" + logoText,
});
const prods = useProduct();

const addToCart = (id: number) => {
  cartStore.addProduct(id);
};
</script>

<style scoped>
ul {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

li {
  width: 100%;
}
@media screen and (min-width: 350px) {
  /* ul {
    justify-content: space-between;
  } */
  li {
    width: 50%;
    padding: 5px;
  }
}
@media screen and (min-width: 550px) {
  li {
    width: 33.333333%;
    padding: 10px;
  }
}
@media screen and (min-width: 750px) {
  li {
    width: 25%;
  }
}
@media screen and (min-width: 950px) {
  li {
    width: 20%;
  }
}
</style>
