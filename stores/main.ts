import { defineStore } from "pinia";
export const useMainStore = defineStore("main", {
  state: () => ({ logoText: "辭糖" }),
});
