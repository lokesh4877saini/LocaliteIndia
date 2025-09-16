'use client';

import { motion } from 'framer-motion';
import { HeartIcon } from 'lucide-react';
import { useWishStore } from '@/store/WishStore';
import { CartItem } from '@/types/cart';
import { useState } from 'react';

type AddToWishButtonProps = {
  item: CartItem;
  label?: string;
  className?: string;
};

const AddToWishButton = ({ item, className = '' }: AddToWishButtonProps) => {
  const { addItem, removeItem, hasHydrated } = useWishStore();
  const isWished = useWishStore((state) => state.isInList(item.id));

  const [isAnimating, setIsAnimating] = useState(false);

  if (!hasHydrated) return null;

  const handleClick = () => {
    if (isWished) {
      removeItem(item.id);
    } else {
      addItem({ ...item });
      setIsAnimating(true);
      setTimeout(() => setIsAnimating(false), 400);
    }
  };

  return (
    <div
      onClick={handleClick}
      className={`
        relative inline-flex items-center justify-center
        border-2 rounded-full p-2 cursor-pointer transition-all duration-300 group
        ${isWished ? 'border-pink-600 bg-pink-600 text-white' : 'border-pink-600 text-pink-600 hover:bg-pink-600 hover:text-white'}
        ${className}
      `}
    >
      <motion.div
        animate={isAnimating ? { scale: [1, 1.5, 1] } : {}}
        transition={{ duration: 0.4 }}
      >
        <HeartIcon
          className="w-5 h-5"
          fill={isWished ? 'currentColor' : 'none'}
        />
      </motion.div>
    </div>
  );
};

export default AddToWishButton;
