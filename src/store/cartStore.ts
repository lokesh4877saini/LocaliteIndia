import { createProductListStore } from './productListStore';
import type { CartItem } from '@/types/cart';

export const useCartStore = createProductListStore<CartItem>(
  'cart-storage',
  (item) => item 
);
