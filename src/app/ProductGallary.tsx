import Image from "next/image";
function ProductGallary() {
  return (
    <>
      <section className="w-full">
        <div className="px-60">
          <div className="grid grid-cols-5 gap-2 place">
            <span className="">
              <a href="/collections/new-arrivals" className="w-full">
                <div className="collection-gallery-img flex flex-col items-center text-center padding-right:100px margin-bottom:60px">
                  <img
                    src="//www.hayclothing.in/cdn/shop/files/ci-15_1.png?v=1755764905"
                    className=" w-30 h-40"
                  />
                </div>
                <div className="overlay-text__heading-vsb rounded-2xl p-4 text-center">
                  Sale
                </div>
              </a>
            </span>
            <div className="">
              <a href="/collections/bestsellers">
                <div className="collection-gallery-img flex flex-col items-center text-center padding-right:10 margin-bottom:100">
                  <img
                    src="//www.hayclothing.in/cdn/shop/files/ci-11_540ffd15-7ffb-43bf-a653-c92e739ada63.png?v=1755760978"
                    className=" w-30 h-40"
                  />
                </div>
                <div className="overlay-text__heading-vsb rounded-2xl p-4 text-center">
                  New Arrivals
                </div>
              </a>
            </div>
            <div className="">
              <a href="/collections/bestsellers">
                <div className="collection-gallery-img flex flex-col items-center text-center ">
                  <img
                    src="//www.hayclothing.in/cdn/shop/files/ci-10.png?v=1755760978"
                    className=" w-30 h-40 "
                  />
                </div>
                <div className="overlay-text__heading-vsb rounded-2xl p-4 text-center">
                  Best Sellers
                </div>
              </a>
            </div>
            <div className="">
              <a href="/collections/dresses">
                <div className="collection-gallery-img flex flex-col items-center text-center">
                  <img
                    src="//www.hayclothing.in/cdn/shop/files/ci-09.png?v=1755760978"
                    className=" w-30 h-40 "
                  />
                </div>
                <div className="overlay-text__heading-vsb rounded-2xl p-4 text-center">
                  All Dresses
                </div>
              </a>
            </div>

            <div className="">
              <a href="/collections/casual-wear">
                <div className="collection-gallery-img flex flex-col items-center text-center ">
                  <img
                    src="//www.hayclothing.in/cdn/shop/files/ci-08_025e9825-5b7b-43e4-ace8-0566c33272e3.png?v=1755760979"
                    className=" w-30 h-40 "
                  />
                </div>
                <div className="overlay-text__heading-vsb rounded-2xl p-4 text-center">
                  All Kurtas
                </div>
              </a>
            </div>
            <div className="">
              <a href="/collections/co-ords">
                <div className="collection-gallery-img flex flex-col items-center text-center">
                  <img
                    src="//www.hayclothing.in/cdn/shop/files/ci-07_43655763-e92f-4af3-a895-1c30253cfd28.png?v=1755760978"
                    className=" w-30 h-40 "
                  />
                </div>
                <div className="overlay-text__heading-vsb rounded-2xl p-4 text-center">
                  All Co-Ords
                </div>
              </a>
            </div>

            <div className="">
              <a href="/collections/maternity">
                <div className="collection-gallery-img flex flex-col items-center text-center">
                  <img
                    src="//www.hayclothing.in/cdn/shop/files/ci-14_c5e768cb-f8a1-4c89-a6e5-b689b2d220cd.png?v=1755760979"
                    className=" w-30 h-40"
                  />
                </div>
                <div className="overlay-text__heading-vsb rounded-2xl p-4 text-center">
                  Maternity
                </div>
              </a>
            </div>

            <div className="">
              <a href="/collections/editions">
                <div className="collection-gallery-img flex flex-col items-center text-center">
                  <img
                    src="//www.hayclothing.in/cdn/shop/files/ci-20_1.png?v=1752148190"
                    className="w-30 h-40"
                  />
                </div>
                <div className="overlay-text__heading-vsb rounded-2xl p-4 text-center">
                  Resort Wear
                </div>
              </a>
            </div>

            <div className="">
              <a href="/collections/organza">
                <div className="collection-gallery-img flex flex-col items-center text-center">
                  <img
                    src="//www.hayclothing.in/cdn/shop/files/ci-12.png?v=1755760978"
                    className="w-30 h-40"
                  />
                </div>
                <div className="overlay-text__heading-vsb rounded-2xl p-4 text-center">
                  Organza
                </div>
              </a>
            </div>
          </div>
        </div>

      </section>

        
    </>
  );
}
export default ProductGallary;
