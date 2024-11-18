import React, { useState, useEffect } from "react";
import { ref, listAll, getDownloadURL } from "firebase/storage";
import { Link } from "react-router-dom";
import { storage } from "../firebaseConfig.js";

import "../css/Gallery.css";

export default function Gallery() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

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
      <section>
        {loading ? (
          <span className="loading loading-spinner loading-lg"></span>
        ) : (
          <div className="gallery">
            {images.map((url, index) => (
              <div key={index} className="gallery-item">
                <img
                  className="gallery-image"
                  key={index}
                  src={url}
                  alt={`Featured work ${index}`}
                />
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
