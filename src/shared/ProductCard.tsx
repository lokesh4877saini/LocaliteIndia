'use client';

import { ReactNode } from "react";
import AddToCartButton from "./AddToCart";
import AddToWishButton from "./AddToWish";
import { ProductTest } from "@/types/Product";  // Your updated Product type
import TriangleBadge from "@/ui/Badge";
import { sanitizer } from '@/utils/converter';
import Link from "next/link";
import Image from "next/image";

const ProductCard = ({
  id,
  name,
  base_price,
  sale_price,
  is_featured,
  meta_title,
  main_image_url,
  image_gallery,
  short_description,
}: ProductTest): ReactNode => {
  // Images for normal and hover states
  const primaryImage = "/product/productImage.jpeg";
//   const primaryImage = main_image_url || "/product/productImage.jpeg" ;
  const hoverImage = image_gallery && image_gallery.length > 0 ? image_gallery[0] : primaryImage;

  // Price display: sale price if available, else base price
  const SellingPrice = sale_price ?? base_price;

  return (
    <div className="border p-4 w-70 rounded shadow relative group transform transition-transform duration-300 hover:scale-105">

      {/* Show NEW badge if featured (adjust if you want a different condition) */}
      {is_featured && (
        <TriangleBadge text="NEW" />
      )}

      <div className="absolute top-2 right-2 z-10">
        <AddToWishButton productId={String(id)} />
      </div>

      <Link href={`/collections/${sanitizer(meta_title || '')}`}>
        <div className="relative w-full h-60 mb-4 overflow-hidden">
          <Image
            src={primaryImage}
            alt={name}
            fill
            className="w-full h-full object-cover transition-opacity duration-300 opacity-100 group-hover:opacity-0 absolute top-0 left-0"
          />
          <Image
            src={hoverImage || "/product/productImage2.jpeg"}
            fill
            alt={`${name} hover`}
            className="w-full h-full object-cover transition-opacity duration-300 opacity-0 group-hover:opacity-100 absolute top-0 left-0"
          />
        </div>
      </Link>

      <h2 className="text-lg font-semibold">{name}</h2>
      <p className="text-sm text-gray-500 mb-2">{short_description}</p>

      <div className="flex items-center gap-2 mb-4">
        <span className="text-red-600 font-bold">₹{SellingPrice}</span>
        {sale_price && (
          <span className="line-through text-gray-400">₹{base_price}</span>
        )}
      </div>

      <AddToCartButton
        item={{
          id:String(id),
          title: name,
          price: Number(SellingPrice),
          quantity: 1,
          image: [primaryImage, hoverImage]
        }}
        onAdd={(item) => {
          // console.log("Added to cart:", item);
        }}
      />
    </div>
  );
};

export default ProductCard;
