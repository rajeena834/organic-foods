import { create } from "zustand";
import { IProduct } from "@/interfaces";

// const productsCartStore = create((set, get: any) => ({
//   items: [] as IProduct[],

//   addProductToCart: (product: IProduct) => {
//     const existingItems = [...get().items];
//     existingItems.push(product);
//     set({ items: existingItems });
//   },

//   updateProductQuantity: (productId: string, quantity: number) => {
//     const existingItems = [...get().items];
//     const newItems = existingItems.map((item) => {
//       if (item.id === productId) {
//         return { ...item, quantity };
//       }
//       return item;
//     });
//     set({ items: newItems });
//   },

//   deleteProductFromCart: (productId: string) => {
//     const existingItems = [...get().items];
//     const newItems = existingItems.filter((item) => item.id !== productId);
//     set({ items: newItems });
//   },

//   clearCart: () => {
//     set({ items: [] });
//   },
  
// }));
import { persist } from "zustand/middleware";
const productsCartStore = create<IProductsCartStore>()(
  persist(
    (set, get) => ({
      items: [],

      addProductToCart: (product: IProduct) => {
        const existingItems = [...get().items];
        existingItems.push(product);
        set({ items: existingItems });
      },

      updateProductQuantity: (productId: string, quantity: number) => {
        const newItems = get().items.map((item:any) =>
          item.id === productId ? { ...item, quantity } : item
        );
        set({ items: newItems });
      },

      deleteProductFromCart: (productId: string) => {
        const newItems = get().items.filter(
          (item:any) => item.id !== productId
        );
        set({ items: newItems });
      },

      clearCart: () => {
        set({ items: [] });
      },
    }),
    {
      name: "products-cart-storage",
    }
  )
);
export default productsCartStore;

export interface IProductsCartStore {
  items: IProduct[];
  addProductToCart: (product: IProduct) => void;
  updateProductQuantity: (productId: string, quantity: number) => void;
  deleteProductFromCart: (productId: string) => void;
  clearCart: () => void;
}