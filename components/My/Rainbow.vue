<template>
  <aside>
    <div class="box">
      <div
        v-for="i in 9"
        :style="{
          width: 'calc(' + (10 - i) + '0% + 0.5px)',
          height: 'calc(' + (10 - i) + '0% + 0.5px)',
          backgroundColor: '#' + i + '1' + i,
        }"
      ></div>
    </div>
    <div class="up-side-down-box">
      <div
        v-for="i in 9"
        :style="{
          width: 'calc(' + (10 - i) + '0% + 0.5px)',
          height: 'calc(' + (10 - i) + '0% + 0.5px)',
          backgroundColor: '#' + (10 - i) + '1' + (10 - i),
        }"
      ></div>
    </div>
  </aside>
</template>

<script setup></script>

<style scoped>
aside {
  border-radius: 10%;
  background: radial-gradient(circle at 100px 0px, #909, #101 50%),
    url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1MDAiIGhlaWdodD0iNTAwIj4KICAgIDxmaWx0ZXIgaWQ9Im5vaXNlIiB4PSIwIiB5PSIwIj4KICAgICAgPGZlVHVyYnVsZW5jZSB0eXBlPSJmcmFjdGFsTm9pc2UiIGJhc2VGcmVxdWVuY3k9IjAuNjUiIG51bU9jdGF2ZXM9IjMiIHN0aXRjaFRpbGVzPSJzdGl0Y2giLz4KICAgICAgPGZlQmxlbmQgbW9kZT0ic2NyZWVuIi8+CiAgICA8L2ZpbHRlcj4KICAgIDxyZWN0IHdpZHRoPSI1MDAiIGhlaWdodD0iNTAwIiBmaWx0ZXI9InVybCgjbm9pc2UpIiBvcGFjaXR5PSIwLjUiLz4KPC9zdmc+);
  background: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1MDAiIGhlaWdodD0iNTAwIj4KICAgIDxmaWx0ZXIgaWQ9Im5vaXNlIiB4PSIwIiB5PSIwIj4KICAgICAgPGZlVHVyYnVsZW5jZSB0eXBlPSJmcmFjdGFsTm9pc2UiIGJhc2VGcmVxdWVuY3k9IjAuNjUiIG51bU9jdGF2ZXM9IjMiIHN0aXRjaFRpbGVzPSJzdGl0Y2giLz4KICAgICAgPGZlQmxlbmQgbW9kZT0ic2NyZWVuIi8+CiAgICA8L2ZpbHRlcj4KICAgIDxyZWN0IHdpZHRoPSI1MDAiIGhlaWdodD0iNTAwIiBmaWx0ZXI9InVybCgjbm9pc2UpIiBvcGFjaXR5PSIwLjUiLz4KPC9zdmc+),
    radial-gradient(circle at 100px 0px, #909, #101 50%);
  filter: brightness(120%);
  background-blend-mode:soft-light;
  width: 500px;
	max-width: 100%;
  margin: 20px auto;
}
.box,
.up-side-down-box {
  position: relative;
  width: 100%;
  height: 250px;
	max-height: calc(50vw - 40px);
  overflow: hidden;
}
.box div,
.up-side-down-box div {
  position: absolute;
  width: 90%;
  height: 90%;
  transform: translate(-0%);
}
.box div {
  bottom: 0;
  right: 5%;
  border: 1px outset #a0a8;
  border-width: 1px 1px 0 1px;
  border-radius: 250px 250px 0 0;
	box-shadow: 10px 20px 20px 0 #101, inset -2px 4px 2px 0 #1011;
}
.up-side-down-box div {
  top: 0;
  left: calc(5% - 0.5px);
  border: 1px solid #a0a8;
  border-width: 0 1px 1px 1px;
  border-radius: 0 0 250px 250px;
  box-shadow: inset 5px -12px 10px 0 #1016;
}
</style>
