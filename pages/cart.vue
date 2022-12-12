<template>
  <UICard>
    <section>
      <h1>購物車</h1>
      <ul>
        <li v-for="item in queryCart" :key="item.id" class="my-[10px]">
          <UIProductCard :item="item" buttonConext="✕" @buttonClick="deleteProduct(item.id)"></UIProductCard>
          <p>
            ✕ <input type="number" :value="item.count" @change="newProdCount(item.id, $event)" />
            <b>＝ $ {{ item.count * item.price }}</b>
          </p>
        </li>
      </ul>
      <div>
        {{ cartCount }} 樣商品，共計 {{ prodsCount }} 件，總計金額：<b>$ {{ subtotal }}</b>
        <UIButton class="ml-[15px] pay">去買單</UIButton>
      </div>
      <!-- <div>
      </div> -->
    </section>
  </UICard>
</template>

<script lang="ts" setup>
import { useCartStore } from "@/stores/cart";
const cartStore = useCartStore();
useHead({
  title: "購物車｜Nuxt-Learn",
});

const queryCart = computed(() => cartStore.queryCart);
const subtotal = computed(() => cartStore.subtotal);
const cartCount = computed(() => cartStore.cartCount);
const prodsCount = computed(() => cartStore.prodsCount);

const deleteProduct = (id: number) => {
  cartStore.deleteProduct(id);
};
const newProdCount = (id: number, event: any) => {
  if (event.target.value >= 0) cartStore.updateProdCount(id, parseInt(event.target.value));
  else event.target.value = 0;
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
  width: 100%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}
li :deep(.prod) {
  display: flex;
  flex-grow: 1;
  padding: 10px;
  width: 100%;
}
li :deep(.prod:hover) {
  transform: scale(1);
}
li :deep(.prod img) {
  width: auto;
  height: 90px;
  margin-right: 10px;
  border-radius: 3px;
}
li :deep(.prod .prod-info) {
  margin: 0;
}
li :deep(.prod .prod-info h5) {
  height: calc(100% - 1.5rem);
}
li p {
  min-width: 7rem;
  width: 100%;
  margin: 0 10px;
  text-align: end;
}
li p input {
  text-align: end;
  width: 4rem;
  border-bottom: 2px solid #c84;
}
li p input:focus-visible {
  outline: none;
  border-bottom: 2px solid #832;
  background-color: #c842;
}
b {
  font-size: 18px;
  color: #832;
  line-height: 2rem;
}
section div {
  margin: 1rem -1rem 0 -1rem;
  padding: 1rem 1.5rem 0 1.5rem;
  border-top: 3px dashed #c84;
  text-align: right;
}
.pay{
  background-color: brown;
  color: #fff;
}
@media screen and (min-width: 580px) {
  li {
    flex-wrap: nowrap;
  }
  li :deep(.prod) {
    width: auto;
  }
  p b {
    display: block;
  }
  li p {
    width: auto;
  }
}
</style>
