'use client'
import { ReactNode, useEffect, useState } from "react";
import { useFetcher } from "@/hooks/useFecher";
import ZoomImage from "./ZoomImage";
import KeyHighlights from "./KeyHighlights";
import DescriptionDropdown from "./DescriptionDetail";
import ImageCarousel from "./ImageCarosel";
import AddToCartButton from "@/shared/AddToCart";
interface productProps {
    slug: string
}
interface Product {
    name: string;
    base_price: string;
    sale_price: string;
    price_currency: string;
    image_gallery: {images:string[]};
    main_image_url: string;
    available_sizes?: string[];
    available_colors?: { colors:string[]; };
    description: string;
    is_handmade: boolean;
    material: string;
    care_instructions: string;
    fabric_weight: string;
    printing_technique: string;
    short_description: string;
    dye_type:string;
    design_origin:string;
}

const ProducContainer = ({ slug }: productProps): ReactNode => {
    // const fallbackImages = Array.from({ length: 100 }).map((_, i) =>
    //     `https://picsum.photos/seed/${i}/200/200`
    // );
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const { data, loading, error } = useFetcher<Product>({
        url: slug,
        method: "GET",
        dep: slug,
    });
    useEffect(() => {
    if (data?.image_gallery?.images?.length) {
        setSelectedImage(data.image_gallery.images[0]);
    }
}, [data]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;
    if (!data) return <>Waiting loading...</>
    const {
        name,
        base_price,
        sale_price,
        price_currency,
        main_image_url,
        available_sizes,
        available_colors,
        description,
        is_handmade,
        fabric_weight,
        care_instructions,
        material,
        printing_technique,
        dye_type,
        design_origin,
    } = data;
    const fallbackImages = data.image_gallery.images;
    return (
        <div className="container mx-auto px-4 sm:px-6 md:px-15 ">
            <div className="w-full mx-auto py-8 grid grid-cols-1 md:grid-cols-12 gap-8">
                {/* Left Panel – Thumbnails */}
                <div className="md:col-span-2 flex md:flex-col gap-4 h-full">
                    <ImageCarousel
                        fallbackImage={fallbackImages}
                        name="Product Thumbnail"
                        selectedImage={selectedImage}
                        setSelectedImage={setSelectedImage}
                    />
                </div>

                {/* Center – Main Image */}
                <ZoomImage selectedImage={selectedImage} main_image_url={main_image_url} name="Product Image" />


                {/* Right – Product Info */}
                <div className="md:col-span-5 space-y-3">
                    <h1 className="text-2xl font-bold">{name}</h1>
                    <div className="text-xl font-semibold text-green-700">
                        {price_currency} ₹{sale_price}{' '}
                        <span className="text-gray-500 line-through text-base ml-2">
                            ₹{base_price}
                        </span>
                    </div>
                    {/* Sizes */}
                    <div>
                        <h3 className="font-semibold mb-2">Sizes</h3>
                        <div className="flex gap-2">
                            {available_sizes?.map((size) => (
                                <span
                                    key={size}
                                    className="px-3 py-1 border border-gray-400 rounded text-sm"
                                >
                                    {size}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Colors */}
                    <div>
                        <h3 className="font-semibold mb-2">Colors</h3>
                        <div className="flex gap-2">
                            {available_colors?.colors?.map((color) => (
                                <div key={color} className="flex items-center gap-1">
                                    <div
                                        className="w-5 h-5 rounded-full border"
                                        style={{ backgroundColor: color }}
                                    ></div>
                                    <span className="text-sm text-gray-600">{color}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <KeyHighlights
                        is_handmade={is_handmade}
                        fabric_weight={fabric_weight}
                        material={material}
                        dye_type={dye_type}
                        design_origin={design_origin}
                        printing_technique={printing_technique}
                    />
                    {/* Add to Cart or other buttons */}
                    <div className="flex gap-4">
                        <AddToCartButton 
                             item={{
          id:Number(34),
          name: name,
          slug:slug,
          size:'',
          price: Number(34),
          quantity: 1,
          image: {images:[]}
        }}
        className="w-1/2"
                        />
                        <AddToCartButton 
                             item={{
          id:Number(34),
          name: name,
          slug:slug,
          size:'',
          price: Number(34),
          quantity: 1,
          image: {images:[]}
        }}
        className="w-1/2"
        label="Buy It Now"
                        />
                        
                    </div>
                    <DescriptionDropdown description={description} care_instructions={care_instructions} />
                </div>
            </div>
            <div className="mt-10 border-t border-[#ccc] pt-6 text-center text-xs text-[#666]"></div>
        </div>
    );
};

export default ProducContainer;