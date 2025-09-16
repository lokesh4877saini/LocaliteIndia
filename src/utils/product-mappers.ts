import { CartItem } from "@/types/cart";
import { ProductTY } from "@/types/product";
import { StandardizedProduct } from "@/types/standardized-product";
import { productData } from "@/types/product";

// Maps ProductTY to StandardizedProduct
export const mapFromProductTY = (product: ProductTY): StandardizedProduct => ({
  
  id: Number(product.id),
  name: product.name,
  price: Number(product.sale_price ?? product.base_price),
  basePrice: Number(product.base_price),
  image:{images:[...product.image_gallery.images]},
  description: product.short_description,
  size: [...product.available_sizes],
  slug: product.slug,
  isFeatured: product.is_featured,
});

// Maps CartItem to ProductCardData
export function mapCartItemToProductCardData(item: CartItem): typeof productData {
  return {
    id: item.id,
    name: item.name,
    price: item.price,
    basePrice: item.price,
    size: item.size,
    image: item.image,
    description: '',
    slug: '',
    isFeatured: false,
  };
}

// Optionally: Map CartItem to StandardizedProduct
export const mapCartItemToStandardizedProduct = (item: CartItem): StandardizedProduct => ({
  id: item.id,
  name: item.name,
  price: item.price,
  basePrice: item.price ,
  size: [item.size],
  image: {images:[...item.image.images]},
  description:'',
  slug:'',
  isFeatured: false,
});
