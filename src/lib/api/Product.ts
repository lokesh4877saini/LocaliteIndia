import { ProductTY } from "@/types/product";
export async function fetchAllProducts(): Promise<ProductTY[]> {
  try {
    const url = `${process.env.NEXT_PUBLIC_API_ALL_PRODUCTS!}allproducts`;
    const res = await fetch(url, {
      method: "GET",
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch products: ${res.status} ${res.statusText}`);
    }
    const {data} = await res.json();
    return data as ProductTY[];
  } catch (error) {
    console.error("Fetch error:", error);
    throw error;
  }
}
