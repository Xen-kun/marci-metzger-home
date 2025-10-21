import React from "react";

export default function Footer(){
  return (
    <footer className="bg-[#081226] text-gray-300 mt-12">
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-primary rounded-md flex items-center justify-center font-bold">M</div>
          <div>© 2023 MARCI METZGER HOMES</div>
        </div>

        <div className="flex gap-4">
          <a className="hover:text-white">Facebook</a>
          <a className="hover:text-white">Instagram</a>
          <a className="hover:text-white">LinkedIn</a>
        </div>

        <div className="text-sm text-gray-400">Powered by GoDaddy</div>
      </div>
    </footer>
  );
}
