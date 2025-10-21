import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Stats from "./components/Stats";
import Listings from "./components/Listings";
import SearchForm from "./components/SearchForm";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App(){
  return (
    <div className="font-sans text-gray-800">
      <Navbar />
      <main>
        <Hero />
        <section className="max-w-7xl mx-auto px-6 md:px-8">
          <About />
          <Stats />
          <Listings />
          <SearchForm />
          <Services />
          <Gallery />
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
}
