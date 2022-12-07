import { defineStore } from "pinia";
const prods = useProduct();

export const useCartStore = defineStore("Cart", {
  state: () => ({
    count: 0,
    cartProds: [],
  }),
  getters: {
    queryCart(state) {
      return [...state.cartProds];
    },
  },
  actions: {
    addCart(id: number) {
      this.cartProds.push({
        ...prods.filter((i) => i.id === id),
      });
    },
  },
});
