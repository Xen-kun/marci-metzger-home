import React from "react";

const logos = [
  { src: "/images/partnerlogos/equal.png", alt: "Equal Housing Logo" },
  { src: "/images/partnerlogos/parhump.png", alt: "Pahrump Logo" },
  { src: "/images/partnerlogos/realtor.png", alt: "Realtor Logo" },
  { src: "/images/partnerlogos/Ridge.png", alt: "Ridge Realty Logo" },
];

export default function PartnerLogos() {
  return (
    <section className="bg-white py-12">
      <div className="w-[80%] mx-auto">
        <h2 className="text-center text-gray-800 text-2xl font-semibold mb-10">
          Our Trusted partnerlogos
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 items-center justify-items-center gap-8">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="flex items-center justify-center w-40 h-20 grayscale hover:grayscale-0 transition-all duration-300"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="max-h-16 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
