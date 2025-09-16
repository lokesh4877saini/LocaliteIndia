'use client';

import React from 'react';
import { useCartStore } from '@/store/cartStore';
import { CartItem } from '@/types/cart';
import ProductCard from '@/shared/ProductCard';
import { mapCartItemToProductCardData } from '@/utils/product-mappers';
const CartlistClient: React.FC = () => {
  const wishlist = useCartStore((state) => state.items) as CartItem[];

  if (wishlist.length === 0) return <div>No items in wishlist.</div>;

 return (
  <div className="bg-green-100 p-4">
    <ul
      className="
        grid gap-6 
        grid-cols-1 
        sm:grid-cols-2 
        md:grid-cols-3 
        lg:grid-cols-4
        justify-center
        list-none
      "
    >
      {wishlist.map((item) => {
        const productData = mapCartItemToProductCardData(item);
        return (
          <li key={item.id} className="flex justify-center">
            <ProductCard product={productData} />
          </li>
        );
      })}
    </ul>
  </div>
);

};

export default CartlistClient;