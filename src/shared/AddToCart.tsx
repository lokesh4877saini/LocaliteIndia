'use client';

import type { CartItem } from "@/types/cart";
import { JSX } from "react";

type AddToCartButtonProps = {
  item: CartItem;
  onAdd?: (item: CartItem) => void;
  label?: string;
  className?: string;
};

const AddToCartButton = ({
  item,
  onAdd,
  label = "Add to Cart",
  className = "",
}: AddToCartButtonProps): JSX.Element => {
  const handleClick = () => {
    if (onAdd) {
      onAdd(item);
    }
  };

  return (
    <div className={className}>
      <button
        onClick={handleClick}
        className={`
          relative overflow-hidden 
          bg-[#f5f5f5] text-gray-800
          border border-gray-400 
          font-medium py-2 px-4 
          rounded w-full
          transition-all duration-300
          hover:bg-gray-300 hover:text-black
          focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500
        `}
      >
        {label}
      </button>
    </div>
  );
};

export default AddToCartButton;
