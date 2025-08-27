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
    <div className="w-full">
      <button
        onClick={handleClick}
        className={`relative overflow-hidden border-2 border-blue-600 text-blue-600 font-medium py-2 px-4 rounded w-full transition-colors duration-300 group ${className}`}
      >
        <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
          {label}
        </span>
        <span
          className="
            absolute inset-0
            before:content-['']
            before:absolute
            before:inset-0
            before:bg-blue-600
            before:translate-y-full
            before:transition-transform
            before:duration-300
            before:ease-in-out
            group-hover:before:translate-y-0
            before:z-0
          "
        />
      </button>
    </div>
  );
};

export default AddToCartButton;
