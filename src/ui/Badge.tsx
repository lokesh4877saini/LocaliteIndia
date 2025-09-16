import React from 'react';

interface BadgeProps {
  text?: string;
  bgColor?: string;
  textColor?: string;
}

const Badge: React.FC<BadgeProps> = ({
  text = 'NEW',
  bgColor = 'bg-black',
  textColor = 'text-white',
}) => (
  <span
  style={
    {
      left:'0.5rem'
    }
  }
    className={`absolute top-2 z-10 px-2 py-1 text-[10px] font-bold rounded-lg shadow-sm ${bgColor} ${textColor} border-2 border-red-500 bg-opacity-50`}
  >
    {text}
  </span>
);

export default Badge;
