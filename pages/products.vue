<template>
  <UICard>
    <section>
      <h1>Welcome to the products page</h1>
      <p>Buy with your heart.</p>
      <ul>
        <li v-for="item in prods" :key="item.id">
          <nuxt-link :to="'/product-' + item.id">
            <UICard class="prod">
              <img :src="item.img" alt="" />
              <h2>{{ item.name }}</h2>
              <p>$ {{ item.price }}</p>
            </UICard>
          </nuxt-link>
        </li>
      </ul>
    </section>
  </UICard>
</template>

<script setup lang="ts">
useHead({
  title: "Products｜Nuxt-Learn",
});
const prods = useProduct();
</script>

<style scoped>
.prod {
  transition: 0.3s;
  height: 190px;
}
.prod:hover {
  transform: scale(1.05);
}
.prod img {
  float: left;
  border-radius: 5px;
  height: 150px;
}
</style>
