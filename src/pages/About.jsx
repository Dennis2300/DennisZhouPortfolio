import React from "react";

export default function About() {
  return (
    <div className="text-center">
      <h1 className="text-7xl">Page is under developement</h1>
      <p className="text-2xl mt-3">
        This is my freetime project so I will be working on this in my sparetime
      </p>
      <div id="home-button-container">
        <a
          href="/"
          className="mt-6 inline-block text-lg font-bold py-3 px-8 bg-white text-black rounded hover:bg-black hover:text-white"
        >
          Go to Homepage
        </a>
      </div>
    </div>
  );
}
