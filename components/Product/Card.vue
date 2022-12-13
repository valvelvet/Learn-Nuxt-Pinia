<template>
  <NuxtLink :to="'/product-' + item.id" class="prod">
    <img v-show="!imgError && !imgLoad" alt="" :src="item.img" />
    <img v-if="imgError || imgLoad" alt="" src="~/assets/img/prod.png" />
    <div class="prod-info">
      <h5>{{ item.name }}</h5>
      <p>$ {{ item.price }}</p>
    </div>
    <button @click.prevent="buttonClick(item.id)">{{ buttonConext }}</button>
  </NuxtLink>
</template>

<script setup lang="ts">
const props = defineProps<{
  item: { id: number; img: string; name: string; price: number };
  buttonConext: string;
}>();
const { item, buttonConext } = toRefs(props);

const emit = defineEmits(["buttonClick"]);

function buttonClick(id: number) {
  emit("buttonClick", id);
}

// 圖片加載中與失敗預設圖
const imgError = ref(false);
const imgLoad = ref(true);

onMounted(() => {
  let newImg = new Image();
  newImg.src = item.value.img;
  newImg.onload = () => {
    imgLoad.value = false;
  };
  newImg.onerror = () => {
    imgError.value = true;
  };
});
</script>

<style scoped>
.prod {
  position: relative;
  display: inline-block;
  border-radius: 10px;
  border: 1px solid var(--main-magenta);
  transition: 0.3s;
}
.prod:hover {
  transform: scale(1.03);
}
.prod img {
  width: 100%;
  border-radius: 8px 8px 0 0;
}
.prod .prod-info {
  width: 90%;
  margin: 10px auto;
}
.prod .prod-info h5 {
  text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  height: 4rem;
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
  background-color: var(--main-yellow);
}
</style>
