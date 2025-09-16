'use client';

import { useCartStore } from "@/store/cartStore";
import type { CartItem } from "@/types/cart";
import { useState, useEffect, useRef } from "react";

type AddToCartButtonProps = {
  item: CartItem;
  label?: string;
  className?: string;
  isDisable?: boolean;
};

const AddToCartButton = ({
  item,
  label = "Add to Cart",
  className = "",
  isDisable
}: AddToCartButtonProps) => {
  const addToCart = useCartStore(state => state.addItem);
  const cartItems = useCartStore(state => state.items);
  const [animate, setAnimate] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const isInCart = cartItems.some(cartItem => cartItem.id === item.id && cartItem.size === item.size);

  const handleClick = () => {
    if (!isInCart && !animate) {
      addToCart(item);
      setAnimate(true);

      if (timeoutRef.current) clearTimeout(timeoutRef.current);

      timeoutRef.current = setTimeout(() => {
        setAnimate(false);
      }, 700);
    }
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <div className={className}>
      <button
        onClick={handleClick}
        type="button"
        disabled={isInCart || isDisable}
        aria-pressed={isInCart}
        className={`
    relative overflow-hidden border font-medium py-2 px-4 rounded w-full
    bg-gray-200 text-gray-900 border-gray-600
    focus:outline-none
    transition-colors duration-300
    ${isInCart ? "cursor-not-allowed" : "cursor-pointer"}
  `}
      >
        <span
          className={`relative z-20 transition-colors duration-300 ${isInCart ? "text-white" : ""
            }`}
        >
          {isInCart ? "In Cart" : label}
        </span>

        <span
          aria-hidden="true"
          className={`
      pointer-events-none
      absolute bottom-0 left-0 w-full h-full rounded
      bg-green-400
      z-10
      transition-transform duration-700 ease-in-out
      ${animate || isInCart ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"}
    `}
          style={{ willChange: "transform, opacity" }}
        />
      </button>

    </div>
  );
};

export default AddToCartButton;
