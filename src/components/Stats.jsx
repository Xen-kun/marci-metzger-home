import React from "react";

const statList = [
  { value: "95%", label: "Success Rate" },
  { value: "500+", label: "Homes Sold" },
  { value: "28", label: "Years Experience" },
  { value: "100%", label: "Client Satisfaction" }
];

export default function Stats(){
  return (
    <section className="bg-blue-700 text-white py-10">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 px-6">
            {statList.map((s) => (
                <div key={s.label} className="text-center">
                    <div className="text-3xl md:text-4xl font-semibold">{s.value}</div>
                    <div className="text-sm opacity-90 mt-1">{s.label}</div>
                </div>
            ))}
        </div>
    </section>
  );
}
