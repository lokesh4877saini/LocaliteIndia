'use client'
import { useState,useEffect } from "react";
import ImageSlider from "@/components/Home/ImageSlider";
import BannerSkeleton from "../skeleton/banner";
interface Slide {
  src: string;
  alt: string;
}
export default function HomePage() {
  const [slides, setSlides] = useState<Slide[]>([]);

  useEffect(() => {
    fetch('/api/home-images')
      .then((res) => res.json())
      .then((data) => setSlides(data))
      .catch(console.error);
  }, []);

  if (slides.length === 0) return <div><BannerSkeleton/></div>;

  return (
    <>
      <ImageSlider slides={slides} />
    </>
  );
}
