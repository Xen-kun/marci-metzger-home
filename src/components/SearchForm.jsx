import React from "react";

export default function SearchForm(){
  return (
    <section className="py-12">
      <div className="text-center mb-6">
        <h2 className="text-3xl font-semibold">Find Your Dream Home</h2>
        <p className="text-gray-500">Search through our extensive listings in Pahrump</p>
      </div>

      <div className="bg-white rounded-xl p-6 md:p-8 card-shadow max-w-5xl mx-auto">
        <form className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <select className="p-3 rounded-md border bg-gray-50">
            <option>Select location</option>
          </select>
          <select className="p-3 rounded-md border bg-gray-50">
            <option>Select type</option>
          </select>
          <select className="p-3 rounded-md border bg-gray-50">
            <option>Bedrooms</option>
          </select>
          <select className="p-3 rounded-md border bg-gray-50">
            <option>Baths</option>
          </select>
          <select className="p-3 rounded-md border bg-gray-50">
            <option>Min Price</option>
          </select>
          <select className="p-3 rounded-md border bg-gray-50">
            <option>Max Price</option>
          </select>

          <div className="md:col-span-3 mt-3">
            <button className="w-full py-3 bg-primary text-white rounded-md font-semibold">Search Properties</button>
          </div>
        </form>
        
        <div className="mt-6 flex justify-center">
            <button disabled className="mb-10 inline-block px-6 py-3 bg-[#0b1026] text-white rounded-md" >Search Now</button>
        </div>
        <div className="text-center mt-4 text-gray-500">Can't find what you're looking for? <a href="#contact" className="text-primary">Contact us</a></div>
      </div>
    </section>
  );
}
