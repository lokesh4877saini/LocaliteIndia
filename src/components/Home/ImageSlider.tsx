'use client';

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Thumbs, Autoplay, EffectFade, Pagination } from "swiper/modules";
import Image from "next/image";

import defaulImage from "@/public/home/banner.jpg";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/thumbs";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

interface Slide {
  src: string;
  alt?: string;
}

export default function ImageSlider({ slides }: { slides: Slide[] }) {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);

  return (
    <div className="relative w-full mx-auto my-10">
      {/* Main Swiper */}
      <Swiper
        modules={[Autoplay, Pagination, Thumbs, EffectFade]}
        slidesPerView={1}
        loop={true}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        speed={500}
        autoplay={{ delay: 3000 }}
        thumbs={{ swiper: thumbsSwiper }}
        pagination={{
          clickable: true,
          type: "bullets",
        }}
        
      >
        {slides.map((slide, idx) => (
          <SwiperSlide key={idx}>
            <div className="relative w-full p-5 bg-red-700 h-[60vh]">
              <Image
                src={slide.src}
                alt={slide.alt || `Slide ${idx + 1}`}
                fill
                className="object-cover object-center"
                priority={idx === 0}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Thumbnails Swiper (optional) */}
      
      {/* <Swiper
        modules={[Thumbs]}
        onSwiper={setThumbsSwiper}
        slidesPerView={4}
        spaceBetween={10}
        loop={true}
        watchSlidesProgress
        className="cursor-pointer"
      >
        {slides.map((slide, idx) => (
          <SwiperSlide key={`thumb-${idx}`}>
            <div className="relative w-[90px] h-14 border rounded overflow-hidden">
              <Image
                src={slide.src}
                alt={`Thumbnail ${idx}`}
                fill
                className="object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>  */}
     
    </div>
  );
}
