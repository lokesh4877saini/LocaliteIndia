import { create } from "zustand";
import { persist } from "zustand/middleware";
type ProductBase = {
  id: number;
  size?: string | number;
};
type ProductListStore<T extends ProductBase> = {
  hasHydrated: boolean;
  items: T[];
  addItem: (raw: T) => Promise<void>;
  removeItem: (id: number) => void;
  rollback: (previous: T[]) => void;
  isInList: (id: number) => boolean;
};


export function createProductListStore<T extends ProductBase>(
  storageKey: string,
  mapProduct: (raw: T) => T
) {
  return create<ProductListStore<T>>()(
    persist(
      (set, get) => ({
        items: [],
        hasHydrated: false,

        addItem: async (raw: T) => {
          const product = mapProduct(raw);

          const exists = get().items.find(
            (item) => item.id === product.id && item.size === product.size
          );

          if (exists) {
            alert("Already in list");
            return;
          }

          set((state) => ({ items: [...state.items, product] }));
        },

        removeItem: (id) => {
          set((state) => ({
            items: state.items.filter((item) => item.id !== id),
          }));
        },

        rollback: (previous) => {
          set({ items: previous });
        },

        isInList: (id) => {
          return get().items.some((item) => item.id === id);
        },
      }),
      {
        name: storageKey,
        onRehydrateStorage: () => (state) => {
          if (state) state.hasHydrated = true;
        },
      }
    )
  );
}
