'use client';

import { HeartIcon } from "lucide-react";
import { ReactNode } from "react";

type AddToWishProps = {
  productId: string;
  onAdd?: (productId: string) => void;
  className?: string;
};

const AddToWishButton = ({
  productId,
  onAdd,
  className = "",
}: AddToWishProps): ReactNode => {
  const handleClick = () => {
    if (onAdd) {
      onAdd(productId);
    }
  };

  return (
    <div
      onClick={handleClick}
      className={`
        relative inline-flex items-center justify-center
        border-2 border-blue-600 text-blue-600 rounded-full
        p-2 cursor-pointer transition-all duration-300 group
        hover:bg-blue-600 hover:text-white
        ${className}
      `}
    >
      <HeartIcon className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
    </div>
  );
};

export default AddToWishButton;
