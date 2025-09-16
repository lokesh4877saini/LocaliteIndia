'use client';

import { useState } from 'react';
import Image from 'next/image';
import AddToCartButton from './AddToCart';
import { StandardizedProduct } from '@/types/standardized-product';
import { useCartStore } from '@/store/cartStore';
import { XIcon } from 'lucide-react'
type ProductModalProps = {
    product: StandardizedProduct;
    selectedSize: string;
    onClose: () => void;
};

const ProductModal = ({ product, selectedSize, onClose }: ProductModalProps) => {
    const [size, setSize] = useState<string>(selectedSize);
    const cartItems = useCartStore(state => state.items);
    const primaryImage = '/product/productImage.jpeg';

    const isSizeInCart = (size: string) => {
        return cartItems.some(item => item.id === product.id && item.size === size);
    };

    return (
        // Backdrop
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-[3px] px-4 sm:px-6"
            onClick={onClose} // ← Close on backdrop click
        >
            {/* Modal Content */}
            <div
                className="relative bg-white rounded-lg p-5 sm:p-6 w-full max-w-md max-h-[90vh] overflow-y-auto animate-fade-in-scale shadow-lg"
                onClick={(e) => e.stopPropagation()} // ← Prevent close when clicking inside
            >
                {/* Close button */}
                <button
                    onClick={onClose}
                    className="absolute top-3 right-4 text-2xl font-bold text-gray-600 hover:text-black cursor-pointer"
                    aria-label="Close"
                >
                    <XIcon />
                </button>

                {/* Product Image */}
                <Image
                    src={primaryImage}
                    alt={product.name}
                    width={250}
                    height={250}
                    className="mb-4 mx-auto rounded"
                />

                {/* Product Info */}
                <h2 className="text-xl font-semibold mb-2 text-center text-gray-800">{product.name}</h2>
                <p className="text-sm text-gray-600 mb-4 text-center">{product.description}</p>

                <div className="text-center mb-4 text-gray-800">
                    <strong>Price:</strong> ₹{product.price}
                </div>

                {/* Size Selector */}
                <div className="flex flex-wrap justify-center gap-2 mb-5">
                    {product.size.map((s) => (
                        <button
                            key={s}
                            className={`px-3 py-1 border rounded transition-all cursor-pointer
    ${size === s
                                    ? 'bg-gray-800 text-white border-gray-800' // Selected by user
                                    : isSizeInCart(s)
                                        ? 'bg-black text-white border-black'     // Already in cart
                                        : 'bg-white text-black border-gray-400 hover:border-black'
                                }
  `}
                            onClick={() => setSize(s)}
                        >
                            {s}
                        </button>

                    ))}
                </div>

                {/* Add to Cart */}
                <AddToCartButton
                    item={{
                        id: product.id,
                        slug:product.slug ,
                        name: product.name,
                        image: {images:[primaryImage, ...product.image.images]},
                        price: product.price,
                        quantity: 1,
                        size: size,
                    }}
                    isDisable={!size}
                />
            </div>
        </div>
    );
};

export default ProductModal;
