import React, { useState } from "react";

const images = [
  "/images/gallery1.jpg",
  "/images/gallery2.jpg",
  "/images/gallery3.jpg"
];

export default function Gallery(){
  const [idx, setIdx] = useState(0);
  const next = () => setIdx((i) => (i + 1) % images.length);
  const prev = () => setIdx((i) => (i - 1 + images.length) % images.length);

  return (
    <section className="py-12">
      <div className="text-center mb-6">
        <h2 className="text-3xl font-semibold">Pahrump Gallery</h2>
        <p className="text-gray-500">Discover the beauty of Pahrump, Nevada</p>
      </div>

      <div className="max-w-4xl mx-auto relative">
        <div className="rounded-xl overflow-hidden card-shadow">
          <img src={images[idx]} alt="gallery" className="w-full h-80 object-cover" />
        </div>

        <button onClick={prev} className="absolute left-3 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow">‹</button>
        <button onClick={next} className="absolute right-3 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow">›</button>

        <div className="flex items-center justify-center gap-2 mt-4">
          {images.map((_, i) => (
            <button key={i} onClick={() => setIdx(i)} className={`w-3 h-3 rounded-full ${i === idx ? "bg-primary" : "bg-gray-200"}`} />
          ))}
        </div>
      </div>
    </section>
  );
}
