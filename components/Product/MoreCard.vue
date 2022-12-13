<template>
  <div>
    <ul>
      <li v-for="item in moreProds" :key="item.id" class="my-[10px]">
        <ProductCard :item="item" buttonConext="＋" @buttonClick="addToCart(item.id)"></ProductCard>
      </li>
    </ul>
  </div>
</template>
<script setup lang="ts">
import { useCartStore } from "@/stores/cart";
const { moreProds, addProduct } = useCartStore();

console.log(moreProds);
const addToCart = (id: number) => {
  addProduct(id);
};
</script>
<style scoped>
ul {
  overflow: hidden;
  width: 100%;
  height: calc(100vw - 60px + 5.5rem);
}

li {
  display: inline-block;
  width: 100%;
}
@media screen and (min-width: 350px) {
  ul {
    height: calc((100vw - 80px) / 2  + 30px + 5.5rem);
  }
  li {
    width: 50%;
    padding: 5px;
  }
}
@media screen and (min-width: 750px) {
  ul {
    height: calc((100vw - 80px) / 4  + 40px + 5.5rem);
  }
  li {
    width: 25%;
    padding: 10px;
  }
}
@media screen and (min-width: 950px) {
  ul {
    height: calc((100vw - 80px) / 5  + 40px + 5.5rem);
  }
  li {
    width: 20%;
  }
}
</style>
