<template>
  <UICard>
		<h2>404 Page</h2>
		<UIButton to="/">Back to home page.</UIButton>
  </UICard>
</template>

<script setup lang="ts">
import { useMainStore } from "@/stores/main";
const { logoText } = useMainStore();
useHead({
  title: "404｜" + logoText,
});
</script>
