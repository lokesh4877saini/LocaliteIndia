import Image from "next/image";
function ProductCategorySection() {
  return (
    <> 
    <section>

     <div className="tab_header_color flex items-center justify-between mb-4">
   <div className="flex items-center justify-between">
      <h2 className="text-2xl font-bold">New <br /> Arrivals</h2>
    </div>
        
   <ul className="flex space-x-3  no-scrollbar-hide">
     
    <li><a href="ProductCategorySection" className="px-4 py-2 rounded-md bg-black text-white font-medium  whitespace-nowrap">New</a></li> 
     
    <li><a href="ProductCategorySection" className="px-4 py-2 rounded-md w-full border border-gray-300 text-gray-700 font-medium hover:bg-gray-100 whitespace-nowrap">Best Sellers</a></li> 
     
    <li><a href="ProductCategorySection" className=" px-4 py-2 rounded-md w-full border border-gray-300 text-gray-700 font-medium hover:bg-gray-100  whitespace-nowrap">All Co-ords </a></li> 
     
    <li><a href="ProductCategorySection"className=" px-4 py-2 rounded-md w-full border border-gray-300 text-gray-700 font-medium hover:bg-gray-100  whitespace-nowrap">All Dresses</a></li> 
     
    <li><a href="ProductCategorySection" className=" px-4 py-2 rounded-md w-full border border-gray-300 text-gray-700 font-medium hover:bg-gray-100  whitespace-nowrap">All Kurtas</a></li> 
     
    <li><a href="ProductCategorySection" className=" px-4 py-2 rounded-md w-full border border-gray-300 text-gray-700 font-medium hover:bg-gray-100  whitespace-nowrap">Ankle Leggings</a></li> 
     
    <li><a href="ProductCategorySection" className=" px-4 py-2 rounded-md w-full border border-gray-300 text-gray-700 font-medium hover:bg-gray-100 whitespace-nowrap">Editions</a></li> 
     
    <li><a href="ProductCategorySection"className="px-4 py-2 rounded-md w-full border border-gray-300 text-gray-700 font-medium hover:bg-gray-100  whitespace-nowrap">Organza</a></li> 
     
    <li><a href="ProductCategorySection" className="px-4 py-2 rounded-md w-full border border-gray-300 text-gray-700 font-medium hover:bg-gray-100  whitespace-nowrap">Suit Sets</a></li> 
     
    <li><a href="#ProductCategorySection" className="px-4 py-2 rounded-md w-full border border-gray-300 text-gray-700 font-medium hover:bg-gray-100  whitespace-nowrap">Festive</a></li> 
     
    <li><a href="#ProductCategorySection" className="px-4 py-2 rounded-md w-full border border-gray-300 text-gray-700 font-medium hover:bg-gray-100  whitespace-nowrap">Straight Pant</a></li> 
     
   </ul>
    
    </div>
  

    </section>
    </>
  );
}
export default ProductCategorySection;
