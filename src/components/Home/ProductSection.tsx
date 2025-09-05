import { ReactElement, ReactNode } from "react";
import { ProductTest } from "@/types/Product";
import ProductSlider from "../../shared/ProductSlider";
// import { useProductList } from "@/hooks/home/getallProductList";
import {fetchAllProducts} from '@/lib/api/Product';
export default async function ProductSection(): Promise<ReactElement> {
  const products: ProductTest[] = await fetchAllProducts();
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
