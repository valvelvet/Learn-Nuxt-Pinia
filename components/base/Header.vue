<template>
  <header class="px-[30px]">
    <NuxtLink to="/" class="logo">
      <span>{{ logoText }}</span>
      <img src="https://cdn-icons-png.flaticon.com/512/1152/1152102.png" alt="" />
    </NuxtLink>
    <nav>
      <UIButton to="/cart" icon="https://cdn-icons-png.flaticon.com/512/3514/3514491.png" class="cart bg-white mr-[20px]">
        <span v-if="cartCount > 0">{{ cartCount > 999 ? "999+" : cartCount }}</span>
      </UIButton>
      <UIButton to="/products" icon="https://cdn-icons-png.flaticon.com/512/9082/9082527.png" class="bg-white mr-[20px]"><span class="ml-[5px]">商城</span></UIButton>
      <UIButton to="/about" class="bg-white"><span>關於我們</span></UIButton>
    </nav>
  </header>
</template>

<script lang="ts" setup>
import { useMainStore } from "@/stores/main";
import { useCartStore } from "@/stores/cart";

const cartStore = useCartStore();
const cartCount = computed(() => cartStore.cartCount);

const { logoText } = useMainStore();
</script>

<style scoped>
header {
  background-color: #222;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 99;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.logo {
  display: block;
  padding: 10px 0 5px;
}
.logo span {
  color: #fff;
  font-size: 22px;
  position: relative;
  z-index: 2;
  filter: drop-shadow(1px 1px 1px #f4a);
}
.logo img {
  display: inline-block;
  margin-left: -22px;
  width: 30px;
  vertical-align: top;
  filter: drop-shadow(-3px 1px 0 #f0fb) drop-shadow(3px 1px 0 #0ffb) drop-shadow(0 -3px 0#ff0b);
}
.cart {
  position: relative;
}
.cart span {
  position: absolute;
  top: 50%;
  left: 0.75rem;
  transform: translate(-100%, -50%);
  background-color: #833;
  color: #fff;
  font-size: 14px;
  line-height: 1rem;
  border-radius: 20px;
  padding: 3px 7px;
}
:deep(a.cart.router-link-active span){
  background-color: #fcc;
  color: brown;
}
</style>
