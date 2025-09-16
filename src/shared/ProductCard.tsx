'use client';

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useCartStore } from "@/store/cartStore";
import { StandardizedProduct } from "@/types/standardized-product";

import AddToWishButton from "./AddToWish";
import Badge from "@/ui/Badge";
import ModalPortal from "@/components/ModalPortal";
import ProductModal from '@/shared/ProductModal';

type ProductCardProps = {
  product: StandardizedProduct;
};

const ProductCard = ({ product }: ProductCardProps) => {
  const {
    id,
    name,
    price,
    basePrice,
    description,
    image,
    slug,
    size,
    isFeatured,
  } = product;
  const [modalOpen, setModalOpen] = useState(false);
  const [clickedSize, setClickedSize] = useState<string | null>(null);
  const cartItems = useCartStore(state => state.items);
  const primaryImage = "/product/productImage.jpeg";
  const hoverImage = image.images[0] ;

  const isSizeInCart = (size: string) => {
    return cartItems.some(item => item.id === product.id && item.size === size);
  };

  return (
    <div className="w-[310px] h-[500px] relative group transform transition-transform duration-300 hover:scale-105"
    
    >
  {isFeatured && <Badge text="NEW" />}
      
      <div className="absolute top-2 right-2 z-10">
        <AddToWishButton
          item={{
            id,
            name,
            slug,
            size: clickedSize ?? '',
            price,
            quantity: 1,
            image: {images:[primaryImage, hoverImage]},
          }}
        />
      </div>

      <Link href={`/collections/${slug}`}>
        <div className="relative w-full rounded-lg z-0 p-5" style={{height:'340px',}}>
          <Image
            src={primaryImage}
            alt={name}
            fill
            unoptimized
            className="w-full h-full object-cover rounded-lg transition-opacity duration-300 opacity-100 group-hover:opacity-0"
          />
          <Image
            src={hoverImage}
            alt={`${name} hover`}
            fill
            unoptimized
            className="w-full h-full rounded-lg object-cover transition-opacity duration-300 opacity-0 group-hover:opacity-100 absolute top-0 left-0"
          />
        </div>
      </Link>

      <h2 className="text-lg font-semibold">{name}</h2>
      <p className="text-sm text-gray-500 mb-2 break-all">{description}</p>

      <div className="flex items-center gap-2 mb-4">
        <span className="text-red-600 font-bold">₹{price}</span>
        {basePrice !== price && (
          <span className="line-through text-gray-400">₹{basePrice}</span>
        )}
      </div>

      {Array.isArray(size) && size.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-4">
          {size.map((s) => (
            <button
              key={s}
              type="button"
              className={`px-3 py-1 border rounded transition-all cursor-pointer
                ${clickedSize === s
                  ? 'bg-gray-800 text-white border-gray-800'
                  : isSizeInCart(s)
                    ? 'bg-green-400 text-white border-black'
                    : 'bg-gray-100 text-black border-gray-400 hover:border-black'
                }
              `}
              onClick={() => {
                setClickedSize(s);
                setModalOpen(true);
              }}
            >
              {s}
            </button>
          ))}
        </div>
      )}

      {modalOpen && clickedSize && (
        <ModalPortal>
          <ProductModal
            product={product}
            selectedSize={clickedSize}
            onClose={() => {
              setModalOpen(false);
              setClickedSize(null);
            }}
          />
        </ModalPortal>
      )}
    </div>
  );
};

export default ProductCard;
