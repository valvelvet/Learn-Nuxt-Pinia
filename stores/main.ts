import { defineStore } from "pinia";
export const useMainStore = defineStore("counter", {
  state: () => ({ logoText: "辭糖" }),
});
