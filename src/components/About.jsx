import React from "react";

export default function About(){
  return (
    <section className="py-16 grid md:grid-cols-2 gap-10 items-center">
      <div className="bg-white rounded-xl overflow-hidden card-shadow p-4">
        <img src="/images/aboutMarci/marci.png" alt="about" className="w-full h-70 object-cover rounded-xl"/>
      </div>

      <div>
        <div className="text-sm text-primary font-medium mb-2">ABOUT MARCI</div>
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">Realtor for Nearly 3 Decades!</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          With nearly 30 years of experience in the Pahrump real estate market, I've helped hundreds of families find their perfect home. My commitment is to provide personalized service, expert market knowledge, and unwavering dedication to your real estate goals.
        </p>
        <p className="text-gray-600 leading-relaxed mb-6">
          Whether you're a first-time buyer, looking to sell, or seeking investment opportunities, I bring the expertise and local knowledge to guide you through every step of the process.
        </p>

        <div className="flex items-center gap-3">
          <div className="flex gap-2">
            <div className="p-2 bg-blue-50 rounded-full">🏠</div>
            <div className="p-2 bg-blue-50 rounded-full">🏡</div>
            <div className="p-2 bg-blue-50 rounded-full">⭐</div>
          </div>
          <div className="text-gray-500 ml-3">Trusted by 500+ happy clients</div>
        </div>

        <div className="mt-6">
          <a className="inline-block px-6 py-3 bg-[#0b1026] text-white rounded-md" href="#contact">Schedule a Consultation</a>
        </div>
      </div>
    </section>
  );
}
