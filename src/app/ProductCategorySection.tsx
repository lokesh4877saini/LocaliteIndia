import Link from "next/link";
function ProductCategorySection() {
  return (
    <>
      <section>
        <div className="tab_header_color flex items-center mb-4">
          <div className="flex items-center ">
            <h2 className="text-2xl font-bold">
              New Arrivals
            </h2>
          </div>

          <ul className="flex space-x-3 m-5 min-width-110">
            <button className="px-2 bg-black text-white text-sm font-medium rounded-none">
              <Link
                href="#"
                className="rounded-md text-gray-400  text-white font-medium  hover:bg-gray-100 whitespace-nowrap"
              />
              New
            </button>

            <button className="bg-black text-white text-sm font-medium px-2 py-1 rounded-none">
              <Link
                href="#"
                className="rounded-md w-full  text-gray-700 font-medium hover:bg-gray-100 whitespace-nowrap"
              />
              Best Sellers
            </button>

            <button className="px-2 bg-black text-white text-sm font-medium rounded-none">
              <Link
                href="#"
                className="rounded-md w-full text-gray-700 font-medium hover:bg-gray-100  whitespace-nowrap"
              />
              All Co-ords{" "}
            </button>

            <button className=" px-2 bg-black text-white text-sm font-medium hover:bg-gray-100 whitespace-nowrap">
              <Link
                href="#"
                className=" rounded-md w-full text-gray-700 font-medium hover:bg-gray-100  whitespace-nowrap"
              />
              All Dresses
            </button>

            {/* <button><Link href="#" className=" px-4 py-2 rounded-md w-full border border-gray-300 text-gray-700 font-medium hover:bg-gray-100  whitespace-nowrap"/>All Kurtas</button> 
     
    <button><Link href="#" className=" px-4 py-2 rounded-md w-full border border-gray-300 text-gray-700 font-medium hover:bg-gray-100  whitespace-nowrap"/>Ankle Leggings</button> 
     
    <button><Link href="#" className=" px-4 py-2 rounded-md w-full border border-gray-300 text-gray-700 font-medium hover:bg-gray-100 whitespace-nowrap"/>Editions</button> 
     
    <button><Link href="#"className="px-4 py-2 rounded-md w-full border border-gray-300 text-gray-700 font-medium hover:bg-gray-100  whitespace-nowrap"/>Organza</button> 
     
    <button><Link href="#" className="px-4 py-2 rounded-md w-full border border-gray-300 text-gray-700 font-medium hover:bg-gray-100  whitespace-nowrap"/>Suit Sets</button> 
     
    <button><Link href="#" className="px-4 py-2 rounded-md w-full border border-gray-300 text-gray-700 font-medium hover:bg-gray-100  whitespace-nowrap"/>Festive</button> 
     
    <button><Link href="#" className="px-4 py-2 rounded-md w-full border border-gray-300 text-gray-700 font-medium hover:bg-gray-100  whitespace-nowrap"/>Straight Pant</button> 
      */}
          </ul>
        </div>
      </section>
    </>
  );
}
export default ProductCategorySection
