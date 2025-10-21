import React, { useState } from "react";

const images = [
  "/images/gallery/1.png",
  "/images/gallery/2.png",
  "/images/gallery/3.png",
  "/images/gallery/4.png",
  "/images/gallery/5.png",
  "/images/gallery/6.png",
];

export default function Gallery(){
  const [idx, setIdx] = useState(0);
  const next = () => setIdx((i) => (i + 1) % images.length);
  const prev = () => setIdx((i) => (i - 1 + images.length) % images.length);

  return (
<section className="py-16">
  <div className="text-center mb-8">
    <h2 className="text-3xl md:text-4xl font-semibold">Pahrump Gallery</h2>
    <p className="text-gray-500 mt-2">Discover the beauty of Pahrump, Nevada</p>
  </div>

  <div className="max-w-6xl mx-auto relative">
    <div className="rounded-2xl overflow-hidden card-shadow">
      <img
        src={images[idx]}
        alt="gallery"
        className="w-full h-[500px] md:h-[550px] object-cover transition-all duration-300"
      />
    </div>

    <button
      onClick={prev}
      className="absolute left-4 top-1/2 -translate-y-1/2 bg-white p-4 rounded-full shadow-lg hover:scale-110 transition"
    >
      ‹
    </button>
    <button
      onClick={next}
      className="absolute right-4 top-1/2 -translate-y-1/2 bg-white p-4 rounded-full shadow-lg hover:scale-110 transition"
    >
      ›
    </button>

    <div className="flex items-center justify-center gap-3 mt-6">
      {images.map((_, i) => (
        <button
          key={i}
          onClick={() => setIdx(i)}
          className={`w-3 h-3 rounded-full transition-all duration-200 ${
            i === idx ? "bg-primary scale-125" : "bg-gray-300 hover:bg-gray-400"
          }`}
        />
      ))}
    </div>
  </div>
</section>

  );
}
