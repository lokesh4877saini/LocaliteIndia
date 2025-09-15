export type ProductTY = {
  id: number;
  name: string;
  slug: string;
  description: string;
  short_description: string;
  product_type: string;
  is_handmade: boolean;
  material: string;
  fabric_weight: string;
  base_price: string;
  sale_price: string | null;
  price_currency: string;
  in_stock: boolean;
  stock_quantity: number;
  low_stock_threshold: number;
  printing_technique: string;
  dye_type: string;
  design_origin: string;
  care_instructions: string;
  main_image_url: string;
  image_gallery: string[];
  available_sizes: string[];
  available_colors: {
    hex: string;
    name: string;
  }[];
  is_featured: boolean;
  is_best_seller: boolean;
  rating: string;
  review_count: number;
  created_at: string;
  updated_at: string;
  meta_title: string;
  meta_description: string;
}

export type Product = {
  id: string;
  Pname: string;
  basePrice: string;
  SellingPrice: string;
  newArrivals: boolean;
  image: string[];
  title: string;
  seo: { metaTitle: string };
  description: string;
};

export const productData: StandardizedProduct = {
  id: item.id,
  name: item.name,
  price: item.price,
  basePrice: item.basePrice ?? item.price,  
  size: item.size || [],
  image: item.image,
  description: item.description || '',
  slug: item.slug || '',
  isFeatured: item.isFeatured ?? false,
};

