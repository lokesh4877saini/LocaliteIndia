import { ProductTest } from "@/types/Product";
export async function fetchAllProducts(): Promise<ProductTest[]> {
  try {
    const url = `${process.env.NEXT_PUBLIC_API_ALL_PRODUCTS!}allproducts`;

    const res = await fetch(url, {
      method: "GET",
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch products: ${res.status} ${res.statusText}`);
    }

    const product: ProductTest[] = await res.json();
    return product;
  } catch (error) {
    console.error("Fetch error:", error);
    throw error;
  }
}
