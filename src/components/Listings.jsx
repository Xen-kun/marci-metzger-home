import React from "react";

const cards = [
  { img: "/images/listing1.jpg", title: "Luxury Estates", desc: "High-end properties with premium features" },
  { img: "/images/listing2.jpg", title: "Family Homes", desc: "Perfect spaces for growing families" },
  { img: "/images/listing3.jpg", title: "Golf Course Living", desc: "Homes with stunning course views" },
];

export default function Listings(){
  return (
    <section id="listings" className="py-16">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-semibold">Get It Sold</h2>
        <p className="text-gray-500 mt-2">Proven track record of selling homes quickly and at the best price</p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {cards.map((c) => (
          <article key={c.title} className="rounded-xl overflow-hidden relative group card-shadow">
            <img src={c.img} alt={c.title} className="w-full h-56 object-cover group-hover:scale-105 transition-transform"/>
            <div className="absolute left-4 bottom-4 text-white">
              <h3 className="text-xl font-semibold drop-shadow">{c.title}</h3>
              <p className="text-sm drop-shadow">{c.desc}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
