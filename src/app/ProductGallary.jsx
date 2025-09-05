import Image from "next/image";
function ProductGallary(){

    return (
        <>
        <div className="p-5 bg-red-300">
Rahul
        <Image
        src={'/product/productImage.jpeg'}
        width={90}
        height={90}
        alt="test"
        />
        </div>
        </>
    )
}
export default ProductGallary;