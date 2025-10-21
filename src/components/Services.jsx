import React from "react";

const services = [
  { title: "Real Estate Done Right", desc: "Whether you're getting ready to buy or sell, our team ensures you get the best experience possible.", icon: "🏠" },
  { title: "Commercial & Residential", desc: "Large or small, condo or mansion — we can find it and get it at the price that's right.", icon: "🏢" },
  { title: "Rely on Expertise", desc: "Questions about affordability, credit, or loan options? We connect you with the right people.", icon: "🔑" }
];

export default function Services(){
  return (
    <section className="py-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-semibold">Our Services</h2>
        <p className="text-gray-500">Comprehensive real estate solutions tailored to your needs</p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {services.map(s => (
          <div key={s.title} className="bg-white rounded-xl p-6 card-shadow border">
            <div className="w-12 h-12 bg-blue-50 flex items-center justify-center rounded-lg text-xl mb-4">{s.icon}</div>
            <h3 className="font-semibold text-lg mb-2">{s.title}</h3>
            <p className="text-gray-600">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
