import { create } from "zustand";
import { persist } from "zustand/middleware";

type ProductListStore<T> = {
  hasHydrated: boolean;
  items: T[];
  addItem: (raw: T) => Promise<void>;
  removeItem: (id: number) => void;
  rollback: (previous: T[]) => void;
  isInList: (id: number) => boolean;
};

export function createProductListStore<T>(
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

          const exists = get().items.find((item: any) =>
            item.id === (product as any).id &&
            item.size === (product as any).size
          );

          if (exists) {
            alert("Already in list");
            return;
          }

          set((state) => ({ items: [...state.items, product] }));
        },


        removeItem: (id) => {
          set((state) => ({
            items: state.items.filter((item: any) => item.id !== id),
          }));
        },

        rollback: (previous) => {
          set({ items: previous });
        },

        isInList: (id) => {
          return get().items.some((item: any) => item.id === id);
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
