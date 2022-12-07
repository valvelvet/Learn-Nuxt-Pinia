<template>
  <button>
    <slot></slot>
  </button>
</template>

<script setup lang="ts"></script>

<style scoped>
button {
  border: none;
  box-shadow: 0 1px 5px 0 #ccc;
  padding: 5px 15px;
  border-radius: 20px;
	color: brown;
}
button:hover {
  box-shadow: inset 0 1px 5px 0 #ccc;
}
</style>
