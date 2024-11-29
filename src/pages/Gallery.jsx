import React, { useState, useEffect } from "react";
import { ref, listAll, getDownloadURL } from "firebase/storage";
import { Link } from "react-router-dom";
import { storage } from "../firebaseConfig.js";

import "../css/Gallery.css";

export default function Gallery() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    async function fetchImages() {
      const imagesRef = ref(storage, "images/");

      try {
        const imagesList = await listAll(imagesRef);

        const urls = await Promise.all(
          imagesList.items.map((imageRef) => getDownloadURL(imageRef))
        );
        setImages(urls);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching images: ", error);
        setLoading(false);
      }
    }

    fetchImages();
  });
  return (
    <div className="gallery-container">
      <Link to="/">
        <button className="fixed top-2 left-2 bg-blue-500 text-white px-4 py-2 rounded shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400">
          Home
        </button>
      </Link>
      <button
        onClick={scrollToTop}
        className="fixed top-2 right-2 bg-blue-500 text-white px-4 py-2 rounded shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        Scroll to Top
      </button>
      <section>
        {loading ? (
          <span className="loading loading-spinner loading-lg"></span>
        ) : (
          <div className="gallery">
            {images.map((url, index) => (
              <div
                key={index}
                className={`gallery-item ${
                  index % 2 === 0 ? "horizontal" : "vertical"
                }`}
              >
                <img
                  src={url}
                  alt={`Featured work ${index}`}
                  className="gallery-image"
                />
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
