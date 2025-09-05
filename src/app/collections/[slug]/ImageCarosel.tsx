import { useRef } from 'react';
import Image from 'next/image';
import { ChevronUp, ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';

interface VerticalImageCarouselProps {
  fallbackImage: string[];
  name: string;
  selectedImage: string;
  setSelectedImage: (url: string) => void;
}

const ImageCarousel: React.FC<VerticalImageCarouselProps> = ({
  fallbackImage = [],
  name,
  selectedImage,
  setSelectedImage,
}) => {
  const imageRefs = useRef<(HTMLDivElement | null)[]>([]);

  const selectedIndex = fallbackImage.indexOf(selectedImage);

  const scrollToImage = (index: number) => {
    const target = imageRefs.current[index];
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'nearest', // allows horizontal scroll on mobile
      });
      setSelectedImage(fallbackImage[index]);
    }
  };

  const handleScrollPrev = () => {
    if (selectedIndex > 0) scrollToImage(selectedIndex - 1);
  };

  const handleScrollNext = () => {
    if (selectedIndex < fallbackImage.length - 1) scrollToImage(selectedIndex + 1);
  };

  return (
    <div className="flex flex-col h-full items-center w-full relative">
      {/* Mobile Arrows */}
      <div className="md:hidden  absolute top-15 z-50 flex justify-between items-center w-full  mb-2">
        <button
          onClick={handleScrollPrev}
          disabled={selectedIndex === 0}
          className={`p-2 transition-opacity bg-white shadow rounded-full ${
            selectedIndex === 0 ? 'opacity-30 cursor-not-allowed' : 'cursor-pointer  hover:opacity-80'
          }`}
          aria-label="Scroll left"
        >
          <ChevronLeft size={18} />
        </button>
        <button
          onClick={handleScrollNext}
          disabled={selectedIndex === fallbackImage.length - 1}
          className={`p-2 transition-opacity bg-white shadow rounded-full ${
            selectedIndex === fallbackImage.length - 1 ? 'opacity-30 cursor-not-allowed' : 'cursor-pointer hover:opacity-80'
          }`}
          aria-label="Scroll right"
        >
          <ChevronRight size={18} />
        </button>
      </div>

      {/* Desktop Up Arrow */}
      <button
        onClick={handleScrollPrev}
        disabled={selectedIndex === 0}
        className={`hidden md:block p-2 mb-1 transition-opacity ${
          selectedIndex === 0 ? 'opacity-30 cursor-not-allowed' : 'cursor-pointer hover:opacity-80'
        }`}
        aria-label="Scroll up"
      >
        <ChevronUp size={24} />
      </button>

      {/* Scrollable Thumbnails */}
      <div
        className={`
          w-full
          h-[150px] md:h-[610px]
          py-4
          overflow-x-auto md:overflow-y-auto
          overflow-y-hidden md:overflow-x-hidden
          flex md:flex-col flex-row
          items-center
          gap-3
          scroll-smooth
          snap-mandatory
          snap-x md:snap-y
          no-scrollbar
        `}
      >
        {fallbackImage.map((imgUrl, index) => {
          const isActive = selectedImage === imgUrl;

          return (
            <div
              key={index}
              ref={(el: HTMLDivElement | null) => {
                imageRefs.current[index] = el;
              }}
              onClick={() => scrollToImage(index)}
              className={`
                snap-start
                transition-all duration-300 ease-in-out
                cursor-pointer
                rounded-lg border-2
                ${isActive
                  ? 'border-blue-500 scale-110 shadow-lg ring-2 ring-blue-300'
                  : 'border-gray-200 hover:scale-105 hover:shadow-sm'}
              `}
              style={{
                width: isActive ? 100 : 88,
                height: isActive ? 100 : 88,
                flexShrink: 0, // ensures proper horizontal scroll
              }}
            >
              <Image
                src={imgUrl}
                alt={`${name} ${index}`}
                width={isActive ? 100 : 88}
                height={isActive ? 100 : 88}
                unoptimized
                className="w-full object-cover rounded-md transition-all duration-300"
              />
            </div>
          );
        })}
      </div>

      {/* Desktop Down Arrow */}
      <button
        onClick={handleScrollNext}
        disabled={selectedIndex === fallbackImage.length - 1}
        className={`hidden md:block p-2 mt-1 transition-opacity ${
          selectedIndex === fallbackImage.length - 1
            ? 'opacity-30 cursor-not-allowed'
            : 'cursor-pointer hover:opacity-80'
        }`}
        aria-label="Scroll down"
      >
        <ChevronDown size={24} />
      </button>
    </div>
  );
};

export default ImageCarousel;
