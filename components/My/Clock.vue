<template>
  <aside>
    <span
      v-for="i in 60"
      :class="i % 5 === 0 ? 'whole-point' : ''"
      :style="{ transform: `translate(0, -50%) rotate(${6 * i}deg)` }"
    ></span>
    <div id="clock-hour"></div>
    <div id="clock-min"></div>
    <div id="clock-sec"></div>
  </aside>
</template>

<script setup>
const hour = ref(new Date().getHours());
const min = ref(new Date().getMinutes());
const sec = ref(new Date().getSeconds());

setInterval(() => {
  hour.value = new Date().getHours();
  min.value = new Date().getMinutes();
  sec.value = new Date().getSeconds();
}, 1000);
</script>

<style scoped>
aside {
  width: 200px;
  height: 200px;
  margin: 30px auto;
	box-shadow: 0 0 15px #ccc;
  position: relative;
  border-radius: 50%;
  transform: rotate(-90deg);
  top: 50%;
  left: 0;
}
aside::before,
aside::after,
#clock-hour,
#clock-min,
#clock-sec {
  position: absolute;
  top: 50%;
  left: 50%;
  height: 8px;
  border-radius: 10px;
  box-shadow: 0 0 3px 0 #0005;
}
aside::before {
  content: "";
  background-color: #000;
  height: 12px;
  width: 12px;
  transform: translate(-50%, -50%);
}
aside::after {
  content: "";
  height: 8px;
  width: 8px;
  background-color: #ff0;
  border: 2px solid #f80;
  transform: translate(-50%, -50%);
}
#clock-hour {
  transform-origin: -12px 4px;
  background-color: #000;
  width: 23%;
  transform: translate(12px, -50%) rotate(v-bind(hour * 30 + min/2 + "deg"));
}
#clock-min {
  transform-origin: -12px 4px;
  background-color: #000;
  width: 40%;
  transform: translate(12px, -50%) rotate(v-bind(min * 6 + sec/10 + "deg"));
}
#clock-sec {
  height: 2px;
  transform-origin: 25px 1px;
  background-color: #f80;
  width: 60%;
  transform: translate(-25px, -50%) rotate(v-bind(sec * 6+"deg"));
}
#clock-hour::after,
#clock-min::after {
  content: "";
  position: absolute;
  top: 50%;
  left: 0;
  background-color: #000;
  height: 4px;
  width: 8px;
  transform: translate(-6px, -50%);
}
span {
  width: 47%;
  height: 2px;
  text-align: end;
  font-size: 20px;
  border-right: 8px solid #ccc;
  position: absolute;
  top: 50%;
  left: 50%;
  transform-origin: 0 50%;
}
.whole-point {
  border-right: 8px solid #222;
}
</style>
