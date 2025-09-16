'use client';

import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import Image from "next/image";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

interface Slide {
  src: string;
  alt?: string;
}

export default function ImageSlider({ slides }: { slides: Slide[] }) {
  const progressCircle = useRef<SVGSVGElement | null>(null);
  const progressContent = useRef<HTMLSpanElement | null>(null);

  const onAutoplayTimeLeft = (
    swiper: any,
    time: number,
    progress: number
  ) => {
    if (progressCircle.current) {
      const circle = progressCircle.current.querySelector('circle');
      if (circle) {
        const length = circle.getTotalLength();
        const offset = length - progress * length;
        circle.style.strokeDasharray = `${length}`;
        circle.style.strokeDashoffset = `${offset}`;
      }
    }
    if (progressContent.current) {
      progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    }
  };

  return (
    <div className="relative w-full mx-auto mb-10">
      <div className="absolute -bottom-15 left-0 w-full h-10 bg-gradient-to-b from-white/40 to-transparent z-10 pointer-events-none" />
      <div className="absolute -bottom-0 left-0 w-full h-10 bg-gradient-to-t from-white/40 to-transparent z-10 pointer-events-none" />


      {/* Main Swiper */}
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        slidesPerView={1}
        loop={true}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        speed={500}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        autoplay={{ delay: 3000 }}
        pagination={{
          clickable: true,
          type: "bullets",
        }}
      >
        {slides.map((slide, idx) => (
          <SwiperSlide key={idx}>
            <div className="relative w-full p-5 bg-primary h-[65vh]">
              <Image
                src={slide.src}
                alt={slide.alt || `Slide ${idx + 1}`}
                fill
                // unoptimized
                className="object-cover object-center"
                priority={idx === 0}
              />
            </div>
          </SwiperSlide>
        ))}
        <div className="absolute bottom-2 left-2 z-10" slot="container-end">
          <svg viewBox="0 0 24 24" width="24" height="24" ref={progressCircle} className="stroke-current text-gray-800">
            <circle cx="12" cy="12" r="10" strokeWidth="2" fill="none" stroke="#4ADE80"></circle>
          </svg>
          <span className="text-[8px] absolute bottom-[6px] left-2 font-semibold text-[#ffff]" ref={progressContent}></span>
        </div>

      </Swiper>
    </div>
  );
}
