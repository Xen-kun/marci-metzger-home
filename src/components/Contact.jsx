import React from "react";
import MapSection from "./MapSection";

export default function Contact(){
  return (
    <section id="contact" className="py-12">
      <div className="text-center mb-6">
        <h2 className="text-3xl font-semibold">Call or Visit</h2>
        <p className="text-gray-500">Get in touch to start your real estate journey</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="flex flex-col h-full justify-between bg-white rounded-lg shadow p-6">
            <form className="flex flex-col flex-grow space-y-4">
                <input
                className="w-full p-3 border rounded-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your name"
                />
                <input
                className="w-full p-3 border rounded-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="your.email@example.com"
                />
                <textarea
                className="w-full p-3 border rounded-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="How can I help you?"
                rows="5"
                />
                
                {/* Spacer to push buttons down */}
                <div className="flex-grow" />
            </form>

            {/* Buttons section anchored to bottom */}
            <div className="mt-4 space-y-3">
                <button className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition-all duration-200 hover:scale-[1.02]">
                    Send
                </button>
                <button className="w-full py-3 bg-emerald-500 hover:bg-emerald-600 text-white font-medium rounded-md transition-all duration-200 hover:scale-[1.02]">
                    Message us on WhatsApp
                </button>
            </div>
        </div>

        <aside className="space-y-4">
          <div>
            <h3 className="text-xl font-semibold">Marci Metzger - THE RIDGE REALTY GROUP</h3>
            <p className="text-gray-600 mt-2">3290 HW-160, Suite F, Pahrump, Nevada 89048, United States</p>
            <p className="text-gray-600 mt-2">📞 (702) 519-0406</p>
          </div>

          <div className="bg-gray-50 rounded-md p-4">
            <h4 className="font-medium mb-2">Office Hours</h4>
            <div className="flex justify-between text-gray-600">
              <span>Open today:</span>
              <span>08:00 am - 07:00 pm</span>
            </div>
            <div className="flex justify-between text-gray-600">
              <span>Open daily:</span>
              <span>8:00 am - 7:00 pm</span>
            </div>
            <p className="text-sm text-gray-500 mt-2">Appointments outside office hours available upon request.</p>
          </div>

          <div>
            <h4 className="font-medium mb-2">Connect With Us</h4>
            <div className="flex gap-3">
              <a className="p-2 rounded-md bg-white shadow">f</a>
              <a className="p-2 rounded-md bg-white shadow">ig</a>
              <a className="p-2 rounded-md bg-white shadow">in</a>
            </div>
          </div>

          <div className="mt-4">
            {/* Map placeholder - replace with real iframe if desired */}
            {/* <img src="/images/map-placeholder.jpg" alt="map" className="w-full rounded-md" /> */}
            <MapSection />
          </div>
        </aside>
      </div>
    </section>
  );
}
