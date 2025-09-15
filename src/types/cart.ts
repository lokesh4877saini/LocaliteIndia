export type CartItem = {
  id: number;   
  price: number;
  name:string;
  slug:string;
  quantity: number;
  size:string;
  image: string[];    // now an array of image URLs
};
