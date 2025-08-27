
import Banner from "@/components/Home/Banner";
import ProductSection from "@/components/Home/ProductSection";


export default function Home() {
  return (
    <>
    <Banner />
      <main
        className="container bg-[whitesmoke] text-[#343434] min-h-screen flex flex-col mx-auto md:px-12 px-4"
      >
        <ProductSection />

      </main>
    </>
  );
}
