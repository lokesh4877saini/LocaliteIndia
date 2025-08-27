import { ReactElement, ReactNode } from "react";
import { ProductTest } from "@/types/Product";
import ProductSlider from "../../shared/ProductSlider";
// import { useProductList } from "@/hooks/home/getallProductList";
import {fetchAllProducts} from '@/lib/api/Product';
export default async function ProductSection(): Promise<ReactElement> {
  const products: ProductTest[] = await fetchAllProducts();
//   console.log(prods)
//   const products = [
//   {
//     id: "101",
//     Pname: "Handblock Cotton Shirt",
//     basePrice: "60",
//     SellingPrice: "45",
//     newArrivals: true,
//     image: ["/product/productImage.jpeg", "/product/productImage2.jpg"],
//     title: "Handblock Printed Cotton Shirt",
//     seo: {
//       metaTitle: "Handblock Cotton Shirt - Traditional Art",
//     },
//     description: "Comfortable handblock printed shirt made from 100% cotton.",
//   },
//   {
//     id: "102",
//     Pname: "Indigo Kurta",
//     basePrice: "80",
//     SellingPrice: "65",
//     newArrivals: false,
//     image: ["/product/productImage.jpeg", "/product/productImage2.jpg"],
//     title: "Indigo Handblock Kurta",
//     seo: {
//       metaTitle: "Indigo Handblock Kurta - Ethnic Wear",
//     },
//     description: "Elegant indigo-dyed kurta with traditional patterns.",
//   },
//   {
//     id: "103",
//     Pname: "Floral Block Print Shirt",
//     basePrice: "70",
//     SellingPrice: "55",
//     newArrivals: true,
//     image: ["/product/productImage.jpeg", "/product/productImage2.jpg"],
//     title: "Floral Handblock Shirt",
//     seo: {
//       metaTitle: "Floral Block Print Shirt - Casual Look",
//     },
//     description: "Soft cotton shirt with floral block prints, perfect for summer.",
//   },
//   {
//     id: "104",
//     Pname: "Ajrakh Printed Kurta",
//     basePrice: "85",
//     SellingPrice: "70",
//     newArrivals: false,
//     image: ["/product/productImage.jpeg", "/product/productImage2.jpg"],
//     title: "Ajrakh Cotton Kurta",
//     seo: {
//       metaTitle: "Ajrakh Printed Kurta - Artisanal Style",
//     },
//     description: "Rich Ajrakh printed kurta made with natural dyes.",
//   },
//   {
//     id: "105",
//     Pname: "Bagru Print Shirt",
//     basePrice: "65",
//     SellingPrice: "50",
//     newArrivals: true,
//     image: ["/product/productImage.jpeg", "/product/productImage2.jpg"],
//     title: "Bagru Printed Shirt",
//     seo: {
//       metaTitle: "Bagru Print Shirt - Traditional Block Print",
//     },
//     description: "Earthy-toned shirt with handcrafted Bagru block prints.",
//   },
//   {
//     id: "106",
//     Pname: "Ethnic Cotton Kurti",
//     basePrice: "75",
//     SellingPrice: "60",
//     newArrivals: true,
//     image: ["/product/productImage.jpeg", "/product/productImage2.jpg"],
//     title: "Ethnic Block Print Kurti",
//     seo: {
//       metaTitle: "Ethnic Cotton Kurti - Graceful Comfort",
//     },
//     description: "Comfortable kurti with ethnic block prints and relaxed fit.",
//   },
//   {
//     id: "107",
//     Pname: "Boho Block Print Dress",
//     basePrice: "95",
//     SellingPrice: "79",
//     newArrivals: false,
//     image: ["/product/productImage.jpeg", "/product/productImage2.jpg"],
//     title: "Bohemian Block Print Dress",
//     seo: {
//       metaTitle: "Boho Block Print Dress - Free Spirit Style",
//     },
//     description: "Flowy boho dress with intricate block printing and tassel details.",
//   },
//   {
//     id: "108",
//     Pname: "Chikankari Handblock Shirt",
//     basePrice: "85",
//     SellingPrice: "70",
//     newArrivals: true,
//     image: ["/product/productImage.jpeg", "/product/productImage2.jpg"],
//     title: "Chikankari Handblock Shirt",
//     seo: {
//       metaTitle: "Chikankari Shirt - Subtle Elegance",
//     },
//     description: "Fusion of Chikankari embroidery with soft block prints.",
//   },
//   {
//     id: "109",
//     Pname: "Jaipur Printed Shirt",
//     basePrice: "60",
//     SellingPrice: "48",
//     newArrivals: false,
//     image: ["/product/productImage.jpeg", "/product/productImage2.jpg"],
//     title: "Jaipur Cotton Shirt",
//     seo: {
//       metaTitle: "Jaipur Printed Shirt - Heritage Collection",
//     },
//     description: "Vibrant cotton shirt inspired by Jaipur's traditional prints.",
//   },
//   {
//     id: "110",
//     Pname: "Handwoven Indigo Top",
//     basePrice: "70",
//     SellingPrice: "55",
//     newArrivals: true,
//     image: ["/product/productImage.jpeg", "/product/productImage2.jpg"],
//     title: "Handwoven Indigo Cotton Top",
//     seo: {
//       metaTitle: "Handwoven Indigo Top - Sustainable Fashion",
//     },
//     description: "Minimal indigo top made from handwoven, organic cotton.",
//   },
// ];

  return (
    <section className="bg-[whitesmoke] text-[#343434] pb-10">
      <div className="container mx-auto">
        <div className="flex items-center gap-4 my-8">
          <hr className="flex-grow border-t border-gray-300" />
          <h1 className="text-2xl font-semibold text-gray-700 whitespace-nowrap">
            Our Products
          </h1>
          <hr className="flex-grow border-t border-gray-300" />
        </div>

        <ProductSlider products={products} title="New  Arrivals" />
      </div>
    </section>
  );
}
