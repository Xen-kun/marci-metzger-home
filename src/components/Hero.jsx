import React from "react";

export default function Hero(){
  return (
    <section className="relative h-[70vh] md:h-[75vh] w-full">
      <div
        className="absolute inset-0 bg-center bg-cover hero-overlay"
        style={{ backgroundImage: "url('/images/hero.jpg')" }}
      />
      <div className="relative z-10 max-w-4xl mx-auto text-center text-white px-6 py-24 flex flex-col items-center justify-center h-full">
        <div className="uppercase text-sm tracking-widest text-blue-200 mb-3">PAHRUMP REALTOR</div>
        <h1 className="text-4xl md:text-6xl font-extralight leading-tight">Your Trusted Partner in Real Estate</h1>
        <p className="mt-6 text-lg max-w-2xl">Nearly 3 decades of experience helping families find their dream homes in Pahrump, Nevada</p>
        <div className="mt-8 flex gap-4">
          <a className="px-5 py-3 bg-primary rounded-md text-white font-medium shadow" href="#listings">Find Your Home</a>
          <a className="px-5 py-3 border border-white rounded-md text-white/90 font-medium" href="#contact">Get In Touch</a>
        </div>
      </div>
    </section>
  );
}
