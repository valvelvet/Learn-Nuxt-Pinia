<template>
  <header class="px-[30px]">
    <NuxtLink to="/" class="logo">
      <span>{{ logoText }}</span>
      <img src="https://cdn-icons-png.flaticon.com/512/1152/1152102.png" alt="" />
    </NuxtLink>
    <nav>
      <UIButton to="/cart" class="bg-white mr-[20px]">購物車</UIButton>
      <UIButton to="/products" class="bg-white mr-[20px]">商城</UIButton>
      <UIButton to="/about" class="bg-white">關於我們</UIButton>
    </nav>
  </header>
</template>

<script lang="ts" setup>
import { useMainStore } from "@/stores/main";

const { logoText } = useMainStore();
</script>

<style scoped>
header {
  background-color: #222;
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
</style>
