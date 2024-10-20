// import Dependencies
import React from "react";

// import Components
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollIndicator from "../components/ScrollIndicator";

// import Assets
import videoBg from "../assets/videos/videoBg.mp4";

// import Components
import TypeWriter from "../components/TypeWriter";

export default function Home() {
  return (
    <div>
      {/* Hero section on home page */}
      <div id="homepage-hero-container" className="relative">
        <div className="hero min-h-screen relative">
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
            <div className="max-w-5xl">
              <h1 className="mb-3 text-5xl font-heading text-white tracking-wide h-10">
                <TypeWriter
                  text="PRESERVING LIFE'S ARTFUL MOMENTS."
                  speed={100}
                />
              </h1>
              <p className="mb-5 mt-5 text-xl text-white font-heading tracking-wider">
                WHERE EVERY MOMENT IS TURNED INTO A LASTING MEMORY
              </p>
              <button className="btn btn-primary">Get Started</button>
            </div>
          </div>
        </div>
      </div>

      {/* Navbar on home page */}
      <Navbar />

      {/* Main content on home page */}
      <section
        id="section1"
        className="h-screen bg-white flex items-center justify-center"
      >
        {" "}
        <div
          className="hero min-h-screen"
          style={{
            backgroundImage:
              "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
          }}
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-neutral-content text-center">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
              <p className="mb-5">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
              <button className="btn btn-primary">Get Started</button>
            </div>
          </div>
        </div>
      </section>

      {/* Scroll indicator on home page */}
      <ScrollIndicator />

      {/* Footer on home page */}
      <Footer />
    </div>
  );
}
