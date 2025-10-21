import React from "react";

export default function Hero(){
  return (
<section className="relative w-full h-[90vh] md:h-[80vh] flex items-center justify-center mt-5">
  {/* Background container - 80% width and centered */}
  <div className="relative w-[75%] h-full mx-auto rounded-2xl overflow-hidden shadow-lg">
    {/* Background image */}
    <div
      className="absolute inset-0 bg-cover bg-center"
      style={{
        backgroundImage: "url('/images/landingpage/hero.png')",
      }}
    />

    {/* Subtle dark overlay for readability */}
    <div className="absolute inset-0 bg-black/50"></div>

    {/* Content */}
    <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto flex flex-col items-center justify-center h-full">
      <div className="uppercase text-sm tracking-widest text-blue-300 mb-3">
        PAHRUMP REALTOR
      </div>
      <h1 className="text-4xl md:text-6xl font-light leading-tight">
        Your Trusted Partner in Real Estate
      </h1>
      <p className="mt-6 text-lg max-w-2xl mx-auto text-gray-200">
        Nearly 3 decades of experience helping families find their dream homes in
        Pahrump, Nevada.
      </p>

      {/* Buttons */}
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <a
          href="#listings"
          className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-md text-white font-medium shadow-lg transition-transform duration-200 hover:scale-105"
        >
          Find Your Home
        </a>
        <a
          href="#contact"
          className="px-6 py-3 border border-white rounded-md text-white/90 hover:bg-white hover:text-blue-700 font-medium transition-all duration-200 hover:scale-105"
        >
          Get In Touch
        </a>
      </div>
    </div>
  </div>
</section>
  );
}
