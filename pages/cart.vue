<template>
  <UICard>
    <section class="cart">
      <h1>購物車</h1>
      <ul>
        <li v-for="item in queryCart" :key="item.id" class="my-[10px]">
          <ProductCard :item="item" buttonConext="✕" @buttonClick="deleteProduct(item.id)"></ProductCard>
          <p>
            ✕ <input type="number" :value="item.count" @change="newProdCount(item.id, $event)" />
            <b>＝ $ {{ item.count * item.price }}</b>
          </p>
        </li>
      </ul>
      <div>
        {{ cartCount }} 樣商品，共計 {{ prodsCount }} 件，總計金額：<b>$ {{ subtotal }}</b>
        <UIButton :disabled="prodsCount <= 0" class="ml-[15px] pay">去買單</UIButton>
      </div>
    </section>
  </UICard>
  <UICard>
    <section>
      <h2>看看其他商品</h2>
      <ProductMoreCard></ProductMoreCard>
    </section>
  </UICard>
</template>

<script lang="ts" setup>
import { useMainStore } from "@/stores/main";
import { useCartStore } from "@/stores/cart";
const { logoText } = useMainStore();
const cartStore = useCartStore();
useHead({
  title: "購物車｜" + logoText,
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
.cart ul {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.cart li {
  min-width: 30%;
  width: 100%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}
.cart li :deep(.prod) {
  display: flex;
  flex-grow: 1;
  padding: 10px;
  width: 100%;
}
.cart li :deep(.prod:hover) {
  transform: scale(1);
}
.cart li :deep(.prod img) {
  width: auto;
  height: 90px;
  margin-right: 10px;
  border-radius: 3px;
}
.cart li :deep(.prod .prod-info) {
  margin: 0;
}
.cart li :deep(.prod .prod-info h5) {
  height: calc(100% - 1.5rem);
}
.cart li p {
  min-width: 7rem;
  width: 100%;
  margin: 0 10px;
  text-align: end;
}
.cart li p input {
  text-align: end;
  width: 4rem;
  border-bottom: 2px solid var(--main-yellow);
}
.cart li p input:focus-visible {
  outline: none;
  border-bottom: 2px solid var(--dark-magenta);
  background-color: #fea73433;
}
.cart b {
  font-size: 18px;
  color: var(--dark-magenta);
  line-height: 2rem;
}
.cart section div {
  margin: 1rem -1rem 0 -1rem;
  padding: 1rem 1.5rem 0 1.5rem;
  border-top: 3px dashed var(--main-yellow);
  text-align: right;
}
.cart .pay {
  background-color: var(--dark-magenta);
  color: #fff;
}
.cart .pay:disabled {
  background-color: #b77;
}
@media screen and (min-width: 580px) {
  .cart li {
    flex-wrap: nowrap;
  }
  .cart li :deep(.prod) {
    width: auto;
  }
  .cart p b {
    display: block;
  }
  .cart li p {
    width: auto;
  }
}
</style>
