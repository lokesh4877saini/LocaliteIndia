import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { XIcon } from 'lucide-react';

type ZoomModalMagnifierProps = {
  selectedImage?: string | null;
  main_image_url: string;
  name: string;
};

const ZoomModalMagnifier: React.FC<ZoomModalMagnifierProps> = ({
  selectedImage,
  main_image_url,
  name,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const imageRef = useRef<HTMLImageElement | null>(null);
  const resultRef = useRef<HTMLDivElement | null>(null);
  const lensRef = useRef<HTMLDivElement | null>(null);

  const imageUrl = selectedImage || main_image_url;

  // Setup zoom only on desktop
  useEffect(() => {
    if (!isOpen || window.innerWidth < 768) return; // Skip zoom on mobile

    const img = imageRef.current;
    const result = resultRef.current;

    if (!img || !result) return;

    const lens = document.createElement('div');
    lens.className = 'img-zoom-lens absolute border border-gray-400 opacity-50 bg-white';
    lens.style.position = 'absolute';
    lens.style.width = '100px';
    lens.style.height = '100px';
    lens.style.borderRadius = "10px";
    img.parentElement?.insertBefore(lens, img);
    lensRef.current = lens;

    const cx = result.offsetWidth / lens.offsetWidth;
    const cy = result.offsetHeight / lens.offsetHeight;

    result.style.backgroundImage = `url('${img.src}')`;
    result.style.backgroundSize = `${img.width * cx}px ${img.height * cy}px`;
    result.style.backgroundRepeat = 'no-repeat';

    const moveLens = (e: MouseEvent | TouchEvent) => {
      e.preventDefault();

      const pos = getCursorPos(e);
      let x = pos.x - lens.offsetWidth / 2;
      let y = pos.y - lens.offsetHeight / 2;

      if (x > img.width - lens.offsetWidth) x = img.width - lens.offsetWidth;
      if (x < 0) x = 0;
      if (y > img.height - lens.offsetHeight) y = img.height - lens.offsetHeight;
      if (y < 0) y = 0;

      lens.style.left = x + 'px';
      lens.style.top = y + 'px';

      result.style.backgroundPosition = `-${x * cx}px -${y * cy}px`;
    };

    const getCursorPos = (e: MouseEvent | TouchEvent) => {
      e = e || (window.event as MouseEvent);
      const rect = img.getBoundingClientRect();
      const x = ('touches' in e ? e.touches[0].pageX : e.pageX) - rect.left - window.pageXOffset;
      const y = ('touches' in e ? e.touches[0].pageY : e.pageY) - rect.top - window.pageYOffset;
      return { x, y };
    };

    lens.addEventListener('mousemove', moveLens);
    img.addEventListener('mousemove', moveLens);
    lens.addEventListener('touchmove', moveLens);
    img.addEventListener('touchmove', moveLens);

    return () => {
      lens.remove();
    };
  }, [isOpen]);

  return (
    <>
      <div
        className="md:col-span-5 flex items-start justify-center w-full h-full"
        
      >
        <Image
          src={imageUrl}
          onClick={() => setIsOpen(true)}
          alt={name}
          width={250}
          height={250}
          className="w-full max-w-lg object-contain rounded-lg cursor-zoom-in shadow-md"
        />
      </div>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-gray-100 bg-opacity-90 flex items-center justify-center">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 bg-white text-black rounded-full p-2 shadow-md hover:bg-gray-200 transition z-50"
          >
            <XIcon />
          </button>

          {/* Mobile View: Only Image */}
          <div className="flex md:hidden w-full h-full items-center justify-center p-4">
            <Image
              src={imageUrl}
              alt={name}
              width={250}
              height={250}
              className="w-full max-w-md object-contain rounded-lg"
            />
          </div>

          {/* Desktop View: Zoom Setup */}
          <div className="hidden md:flex w-full h-full flex-col md:flex-row gap-6 p-4">
            <div
              className="relative basis-2/5 aspect-square"
              style={{ width: '500px', height: '500px' }}
            >
              <img
                ref={imageRef}
                src={imageUrl}
                alt={name}
                className="w-full h-full object-contain rounded-lg"
              />
            </div>

            <div
              ref={resultRef}
              className="w-full h-full rounded-lg shadow-inner bg-white"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default ZoomModalMagnifier;
