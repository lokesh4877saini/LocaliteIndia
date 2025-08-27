import React from 'react';

interface TriangleBadgeProps {
  text?: string;
  color?: string; // Tailwind color class string
}

const TriangleBadge: React.FC<TriangleBadgeProps> = ({
  text = 'NEW',
  color = 'bg-green-500',
}) => (
<span
  className="absolute top-0 left-0 z-10"
  style={{
    width: '60px',
    height: '60px',
  }}
>
  {/* Shadow layer */}
  {/* <span
    className="absolute top-[2px] left-[0px] w-full h-full rounded-tl-md"
    style={{
      backgroundColor: 'rgba(0,0,0,0.25)',
      clipPath: 'polygon(0 0, 100% 0, 0 100%)',
      filter: 'blur(3px)',
      zIndex: 0,
    }}
  /> */}
  {/* Main colored triangle */}
  <span
    className={`relative w-full h-full ${color} text-white text-[10px] font-bold px-2 py-1 flex items-center justify-center rounded-tl-[3]`}
    style={{
      clipPath: 'polygon(0 0, 100% 0, 0 100%)',
    }}
  >
    <span className="rotate-[-45deg] font-bold text-sm md:text-base translate-x-[-10px] -translate-y-[10px] z-10">
  {text}
</span>

  </span>
</span>

);

export default TriangleBadge;
