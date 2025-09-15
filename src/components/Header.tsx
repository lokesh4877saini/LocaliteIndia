import React from 'react';
import HeaderLinks from "@/components/HeaderLinks"
export default function Header() {
  return (
    <nav>
      <div className="container mx-auto px-6 md:px-12">
        <div className='flex items-center justify-between py-4' style={{ backgroundColor: 'whitesmoke', color: '#343434' }}>
          <HeaderLinks/>
        </div>
      </div>
    </nav>
  );
}
