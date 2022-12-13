import { defineStore } from "pinia";
const prods = useProduct();
interface State {
  cartProds: object[] | [];
}
export const useCartStore = defineStore("cart", {
  state: (): State => ({
    cartProds: reactive([]),
  }),
  getters: {
    cartCount(): number {
      return this.cartProds.length;
    },
    queryCart(): object[] {
      return [...this.cartProds];
    },
    subtotal(): number {
      let total = 0;
      this.cartProds.map((p) => {
        total += p.count * p.price;
      });
      return total;
    },
    prodsCount(): number {
      let prodsCount = 0;
      this.cartProds.map((p) => {
        prodsCount += parseInt(p.count);
      });
      return prodsCount;
    },
    moreProds(): object {
      let moreProds = prods.filter((p) => this.cartProds.findIndex((c) => c.id === p.id) < 0);
      return moreProds.slice(0, 5);
    },
  },
  actions: {
    addProduct(id: number) {
      const currentProdIndex = this.cartProds.findIndex((prod) => prod.id === id);
      if (currentProdIndex >= 0) {
        this.cartProds[currentProdIndex].count++;
      } else {
        this.cartProds.push({
          ...prods.find((i) => i.id === id),
          count: 1,
        });
      }
    },
    deleteProduct(id: number) {
      this.cartProds = this.cartProds.filter((i) => i.id !== id);
    },
    updateProdCount(id: number, newCount: number) {
      const currentProdIndex = this.cartProds.findIndex((prod) => prod.id === id);
      if (newCount > 0) this.cartProds[currentProdIndex].count = newCount;
      else this.cartProds[currentProdIndex].count = 0;
    },
  },
});
