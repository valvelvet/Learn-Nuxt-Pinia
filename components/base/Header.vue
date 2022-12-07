<template>
  <header class="m-auto text-center">
    <nuxt-link to="/">
      <span>波波軒</span>
      <img src="https://cdn-icons-png.flaticon.com/512/1152/1152102.png" alt="" />
    </nuxt-link>
  </header>
</template>

<script lang="ts" setup></script>

<style scoped>
header {
  background-color: #222;
}
a {
  display: block;
  padding: 10px 0 5px;
}
a span {
  color: #fff;
  font-size: 22px;
  position: relative;
  z-index: 2;
  filter: drop-shadow(1px 1px 1px #f4a);
}
a img {
  display: inline-block;
  margin-left: -22px;
  width: 30px;
  vertical-align: top;
  filter: drop-shadow(-3px 1px 0 #f0fb) drop-shadow(3px 1px 0 #0ffb) drop-shadow(0 -3px 0#ff0b);
}
</style>
