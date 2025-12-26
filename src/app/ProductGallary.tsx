import Image from "next/image";
import Link from "next/link";
function ProductGallary() {
  return (
    <>
      <section className="w-full">
        <div className="px-60">
          <div className="grid grid-cols-5 gap-2 place">
            <span className="">
              <Link href="/collections/new-arrivals" className="w-full">
                <div className="collection-gallery-img flex flex-col items-center text-center padding-right:100px margin-bottom:60px">
                  <Image
                    src={'/product/productImage2.jpg'}
                    className=" w-30 h-40"
                    alt="Image"
                    width={150}
                    height={150}
                  />
                </div>
                <div className="overlay-text__heading-vsb rounded-2xl p-4 text-center">
                  Sale
                </div>
              </Link>
            </span>
              <div className="">
              <Link href="/collections/bestsellers">
                <div className="collection-gallery-img flex flex-col items-center text-center padding-right:10 margin-bottom:100">
                  <Image
                    src={'/product/productImage.jpeg'}
                    className="w-30 h-40"
                    alt="Image"
                    width={150}
                    height={150}
                    />
                </div>
                <div className="overlay-text__heading-vsb rounded-2xl p-4 text-center">
                  New Arrivals
                </div>
              </Link>
            </div>
            <div className="">
              <Link href="/collections/bestsellers">
                <div className="collection-gallery-img flex flex-col items-center text-center ">
                  <Image
                    src={'/product/productImage.jpeg'}
                    className=" w-30 h-40 "
                    alt="Image"
                    width={150}
                    height={150}
                    />
                </div>
                <div className="overlay-text__heading-vsb rounded-2xl p-4 text-center">
                  Best Sellers
                </div>
              </Link>
            </div>
            
            <div className="">
              <Link href="/collections/dresses">
                <div className="collection-gallery-img flex flex-col items-center text-center">
                  <Image
                    src={'/product/productImage.jpeg'}
                    className=" w-30 h-40 "
                     alt="Image"
                    width={150}
                    height={150}
                  />
                </div>
                <div className="overlay-text__heading-vsb rounded-2xl p-4 text-center">
                  All Dresses
                </div>
              </Link>
            </div> 

            <div className="">
              <Link href="/collections/casual-wear">
                <div className="collection-gallery-img flex flex-col items-center text-center ">
                  <Image
                    src={'/product/productImage.jpeg'}
                      className=" w-30 h-40 "
                     alt="Image"
                    width={150}
                    height={150}
                  />
                </div>
                <div className="overlay-text__heading-vsb rounded-2xl p-4 text-center">
                  All Kurtas
                </div>
              </Link>
            </div>
            
            <div className="">
              <Link href="/collections/co-ords">
                <div className="collection-gallery-img flex flex-col items-center text-center">
                  <Image
                    src={'/product/productImage.jpeg'}
                      className=" w-30 h-40 "
                     alt="Image"
                    width={150}
                    height={150}
                  />
                </div>
                <div className="overlay-text__heading-vsb rounded-2xl p-4 text-center">
                  All Co-Ords
                </div>
              </Link>
            </div>

            <div className="">
              <Link href="/collections/maternity">
                <div className="collection-gallery-img flex flex-col items-center text-center">
                  <Image
                    src={'/product/productImage.jpeg'}
                    className=" w-30 h-40"
                     alt="Image"
                    width={150}
                    height={150}
                  />
                </div>
                <div className="overlay-text__heading-vsb rounded-2xl p-4 text-center">
                  Maternity
                </div>
              </Link>
            </div>

            <div className="">
              <Link href="/collections/editions">
                <div className="collection-gallery-img flex flex-col items-center text-center">
                  <Image
                  src={'/product/productImage.jpeg'}
                  className=" w-30 h-40"
                   alt="Image"
                    width={150}
                    height={150}
                  />
                </div>
                <div className="overlay-text__heading-vsb rounded-2xl p-4 text-center">
                  Resort Wear
                </div>
              </Link>
            </div>

            <div className="">
              <Link href="/collections/organza">
                <div className="collection-gallery-img flex flex-col items-center text-center">
                  <Image
                  src={'/product/productImage.jpeg'}
                  className=" w-30 h-40"
                    alt="Image"
                    width={150}
                    height={150}
                  />
                </div>
                <div className="overlay-text__heading-vsb rounded-2xl p-4 text-center">
                  Organza
                </div>
              </Link>
            </div>
          </div>

        </div>

      </section>

        
    </>
  );
}
export default ProductGallary;
