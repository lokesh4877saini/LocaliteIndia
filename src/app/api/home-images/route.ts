// src/app/api/home-images/route.ts
import fs from 'fs';
import path from 'path';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const imagesDir = path.join(process.cwd(), 'public', 'home');
    const files = fs.readdirSync(imagesDir);
    
    const imageFiles = files
      .filter((file) => /\.(jpe?g|png|webp|gif)$/i.test(file))
      .sort();

    const imageSlides = imageFiles.map((file, index) => ({
      src: `/home/${file}`,
      alt: `Slide ${index + 1}`,
    }));

    return NextResponse.json(imageSlides);
  } catch (error) {
    console.error('Error reading images:', error);
    return NextResponse.json({ error: 'Failed to load images' }, { status: 500 });
  }
}
