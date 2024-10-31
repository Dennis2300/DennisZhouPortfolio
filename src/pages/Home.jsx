// import Dependencies
import React from "react";
import { Link } from "react-router-dom";

// import Components
import TypeWriter from "../components/TypeWriter";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollIndicator from "../components/ScrollIndicator";
import HeroImageGallery from "../components/HeroImageGallery";

// import Assets
import videoBg from "../assets/videos/videoBg.mp4";

// import Styles
import "../css/Button.css";
import "../css/FadeAnimations.css";

export default function Home() {
  return (
    <div>
      {/* Hero section on home page */}
      <div id="homepage-hero-container" className="relative">
        <div className="hero min-h-screen relative">
          {/* Video background */}
          <video
            autoPlay
            loop
            muted
            className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
          >
            <source src={videoBg} type="video/mp4" />
          </video>

          {/* Optional overlay to darken the video background */}
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-65 z-[-1]"></div>

          {/* Hero content positioned at 2/3 of the viewport height */}
          <div className="hero-content text-neutral-content text-center absolute left-1/2 transform -translate-x-1/2 top-[23vh]">
            <div className="max-w-7xl mx-auto">
              <h1 className="whitespace-nowrap text-white text-7xl font-heading">
                <TypeWriter
                  text="PRESERVING LIFE'S ARTFUL MOMENTS."
                  speed={100}
                />
              </h1>
              <p className="mb-5 mt-5 text-xl text-white font-heading tracking-wider fade-in-down">
                WHERE EVERY MOMENT IS TURNED INTO A LASTING MEMORY
              </p>
              <Link to="/gallery">
                <button className="button-30 text-xl font-content font-bold tracking-wide fade-in">
                  THE GALLERY
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Navbar on home page */}
      <Navbar />

      {/* Main content on home page */}
      <section
        id="section1"
        className="h-screen bg-dark flex flex-col items-center justify-center"
      >
        <h1 className="mb-10 text-7xl text-white">FEATURED WORK</h1>
        <HeroImageGallery />
        <Link to="/">
          <button className="button-30 mt-8">
            <a href="/gallery" className="font-content text-black">
              See more...
            </a>
          </button>
        </Link>
      </section>

      {/* Scroll indicator on home page */}
      <ScrollIndicator />

      {/* Footer on home page */}
      <Footer />
    </div>
  );
}
