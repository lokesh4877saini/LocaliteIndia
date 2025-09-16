export type StandardizedProduct = {
  id: number;
  name: string;
  price: number;
  basePrice: number;
  size:string[];
  image: {
    images:string[];
  }
  description: string;
  slug: string;
  isFeatured?: boolean;
};
