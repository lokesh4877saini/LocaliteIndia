export type CartItem = {
  id: string;         // product ID
  title: string;
  price: number;
  quantity: number;
  image: string[];    // now an array of image URLs
};
