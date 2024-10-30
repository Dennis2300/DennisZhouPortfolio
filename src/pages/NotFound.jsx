import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div
      id="404-not-found"
      className="min-h-screen bg-white flex items-center justify-center"
    >
      <section className="text-center">
        <div className="max-w-2xl mx-auto p-8">
          <h1 className="text-9xl text-black font-bold">404</h1>
          <div
            className="bg-cover bg-center h-96"
            style={{
              backgroundImage:
                "url(https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif)",
            }}
          ></div>
          <div className="">
            <h3 className="text-3xl font-bold text-black">
              Looks like you got lost
            </h3>
            <p className="text-lg mt-3 text-black">
              The page you are looking for is not available!
            </p>
            <Link to="/">
              <button className="button-30 text-xl font-content font-bold tracking-wide mt-5">
                Back to homepage
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
