import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar bg-base-100 sticky top-0 z-50 shadow-lg">
      <div className="navbar-start">
        {/* TODO: Whatever here logo or smth. */}
      </div>

      <div className="navbar-center hidden lg:flex space-x-32 text-2xl m-3 font-navfont">
        {/* TODO: Button to link to pages */}
        <div id="link-to-gallery-container">
          <Link to="gallery">
            <button>Gallery</button>
          </Link>
        </div>
        <div id="link-to-about-container">
          <Link to="about">
            <button>About me</button>
          </Link>
        </div>
        <div id="link-to-contact-container">
          <Link to="contact">
            <button>Contact</button>
          </Link>
        </div>
      </div>

      <div className="navbar-end">
        {/* TODO: login button with google account */}
      </div>
    </div>
  );
}
