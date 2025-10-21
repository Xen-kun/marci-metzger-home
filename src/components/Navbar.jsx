import React from "react";

export default function Navbar(){
  return (
    <header className="bg-white border-b">
      <div className="max-w-7xl mx-auto px-6 md:px-8 flex items-center justify-between h-20">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-primary text-white rounded-md flex items-center justify-center font-bold">M</div>
          <div>
            <div className="font-semibold">Marci Metzger Homes</div>
            <div className="text-sm text-gray-500">The Ridge Realty Group</div>
          </div>
        </div>

        <nav className="hidden md:flex gap-8 text-gray-700">
          <a href="#" className="hover:text-primary">Home</a>
          <a href="#" className="hover:text-primary">Listings</a>
          <a href="#" className="hover:text-primary">Let's Move</a>
          <a href="#" className="hover:text-primary">About Us</a>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <div className="text-sm text-gray-600">📞 (702) 519-0406</div>
          <button className="px-4 py-2 bg-primary text-white rounded-md">Get In Touch</button>
        </div>

        {/* Mobile menu icon */}
        <div className="md:hidden">
          <button className="p-2">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
