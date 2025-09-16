import { createProductListStore } from './productListStore';
import type { CartItem } from '@/types/cart';

export const useWishStore = createProductListStore<CartItem>(
  'wishlist-storage',
  (item) => item 
);
