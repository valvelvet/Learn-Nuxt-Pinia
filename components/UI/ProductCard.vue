<template>
  <NuxtLink :to="'/product-' + item.id" class="prod">
    <img :src="item.img" alt="" />
    <div class="prod-info">
      <h4>{{ item.name }}</h4>
      <p>$ {{ item.price }}</p>
    </div>
    <button @click.prevent="buttonClick(item.id)">{{ buttonConext }}</button>
  </NuxtLink>
</template>

<script setup lang="ts">
const { item } = defineProps<{
  item: { id: number; img: string; name: string; price: number };
  buttonConext: string;
}>();

const emit = defineEmits(["buttonClick"]);

function buttonClick(id: number) {
  emit("buttonClick", id);
}
</script>

<style scoped>
.prod {
  display: block;
  padding: 0;
}
.prod {
  position: relative;
  display: inline-block;
  border-radius: 10px;
  overflow: hidden;
  border: 2px solid #ccc;
  transition: 0.3s;
}
.prod:hover {
  transform: scale(1.05);
}
.prod img {
  width: 100%;
}
.prod .prod-info {
  width: 90%;
  margin: 10px auto;
}
.prod .prod-info h4 {
  text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
}
.prod button {
  position: absolute;
  bottom: 10px;
  right: 10px;
  border-radius: 50%;
  width: 25px;
  height: 25px;
  font-size: 20px;
  line-height: 25px;
  color: #fff;
  background-color: #c84;
}
</style>
