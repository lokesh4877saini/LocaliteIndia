'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import ProductCard from './ProductCard';
import { ProductSliderProps } from '@/types/Slider.p';
import { FC } from 'react';

const ProductSlider: FC<ProductSliderProps> = ({ title, products }) => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <section
      className="w-full py-6 "
      data-aos="fade-up"
    >
      <div className="w-full">
        <div className="relative inline-block mb-10" data-aos="fade-right">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
            {title}
          </h2>
          <div className="absolute left-0 bottom-0 w-16 h-1 bg-gradient-to-r from-blue-500 via-blue-400 to-transparent rounded-full opacity-80" />
        </div>
        <div className="flex flex-wrap w-full items-center justify-center gap-8">
          {products.map((item, index) => (
            <div
              key={item.id}
              data-aos="zoom-in"
              data-aos-delay={`${index * 100}`} // stagger effect
            >
              {/* <ProductCard {...item} /> */}
              <ProductCard product={item} />

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSlider;
