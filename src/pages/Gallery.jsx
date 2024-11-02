import React, { useState, useEffect } from "react";
import { ref, listAll, getDownloadURL } from "firebase/storage";
import { Link } from "react-router-dom";
import { storage } from "../firebaseConfig.js";

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
    <div>
      <section>
        {loading ? (
          <span className="loading loading-spinner loading-lg"></span>
        ) : (
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            {images.map((url, index) => (
              <div key={index} className="hero-image-container zoom-in">
                <Link to={`/images/${index}`}>
                  <img
                    key={index}
                    src={url}
                    alt={`Featured work ${index}`}
                    className="hero-image"
                  />
                </Link>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  )
}
