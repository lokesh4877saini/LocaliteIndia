import ImageSlider from "@/components/Home/ImageSlider";
export default function HomePage() {
  const imageSlides = [
    { src: '/home/banner.jpg', alt: "Slide 1" },
    { src: '/home/banner2.jpeg', alt: "Slide 2" },
    { src: '/home/banner3.jpeg', alt: "Slide 3" },
    { src: '/home/banner4.jpg', alt: "Slide 4" },
    { src: '/home/banner5.jpg', alt: "Slide 5" },
  ];

  return (
    <>
      {/* Banner section */}
      {/* <Banner /> */}

      {/* Second section image slider */}
      <ImageSlider slides={imageSlides} />
    </>
  );
}
