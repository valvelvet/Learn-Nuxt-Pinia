<template>
  <UICard>
    <ul>
      <li v-for="item in queryCart" :key="item[0].id" class="my-[10px]">
        <UIProductCard :item="item[0]" buttonConext="—" @buttonClick="subCart(item.id)"></UIProductCard>
      </li>
    </ul>
  </UICard>
</template>

<script lang="ts" setup>
import { useCartStore } from "@/stores/cart";
const store = useCartStore();

const queryCart = store.queryCart;

const subCart = (id: number) => {
  store.subCart(id);
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
