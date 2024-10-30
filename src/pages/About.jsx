import React from "react";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="text-center">
      <h1 className="text-7xl">Page is under developement</h1>
      <p className="text-2xl mt-3">
        This is my freetime project so I will be working on this in my sparetime
      </p>
      <div id="home-button-container" className="mt-5">
        <Link to="/">
          <button className="button-30 text-xl font-content font-bold tracking-wide">
            Back to homepage
          </button>
        </Link>
      </div>
    </div>
  );
}
