import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface CartItem {
  id: string;
  name: string;
  price: number;
  imageUrl: string | null;
  quantity: number;
}

export interface CartStore {
  items: CartItem[];
  //   totalPrice: number;
  addItem: (item: CartItem) => void;
  removeItem: (id: string) => void;
  clear: () => void;
}

export const useCartStore = create<CartStore>()(
  persist(
    (set) => ({
      items: [],
      addItem: (item) =>
        set((state) => {
          const existingItem = state.items.find((i) => i.id === item.id);
          if (existingItem) {
            return {
              items: state.items.map((i) =>
                i.id === item.id
                  ? { ...i, quantity: i.quantity + item.quantity }
                  : i
              ),
            };
          }

          return { items: [...state.items, { ...item, quantity: 1 }] };
        }),
      removeItem: (id) =>
        set((state) => {
          return {
            items: state.items
              .map((item) =>
                item.id === id ? { ...item, quantity: item.quantity - 1 } : item
              )
              .filter((item) => item.quantity > 0),
          };
          // const existingItem = state.items.find((i) => i.id === id);
          // if (existingItem) {
          //   return {
          //     items: state.items.filter((i) => i.id !== id),
          //   };
          // }
        }),
      clear: () => set({ items: [] }),
    }),
    { name: "cart-store" }
  )
);
