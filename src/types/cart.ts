export type CartItem = {
  id: number;   
  price: number;
  name:string;
  slug:string;
  quantity: number;
  size:string;
  image: {images:string[]};    // now an array of image URLs
};
