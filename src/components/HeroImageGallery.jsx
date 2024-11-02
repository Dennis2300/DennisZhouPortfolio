import React, { useEffect, useState } from "react";
import { ref, listAll, getDownloadURL } from "firebase/storage";
import { storage } from "../firebaseConfig.js";
import "../css/HeroImages.css";

export default function HeroImageGallery() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  const captions = [
    "X marks the spot",
    "A serene landscape",
    "Cozy cabin in the mountains",
  ];

  useEffect(() => {
    async function fetchImages() {
      const imagesRef = ref(storage, "images/");

      try {
        const imagesList = await listAll(imagesRef);

        const firstThreeImages = imagesList.items.slice(0, 3);

        const urls = await Promise.all(
          firstThreeImages.map((imageRef) => getDownloadURL(imageRef))
        );
        setImages(urls);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching images: ", error);
        setLoading(false);
      }
    };

    fetchImages();
  }, []);

  return (
    <div>
      <section>
        {loading ? (
          <span className="loading loading-spinner loading-lg"></span>
        ) : (
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            {images.map((url, index) => (
              <div key={index} className="hero-image-container zoom-in">
                <img
                  key={index}
                  src={url}
                  alt={`Featured work ${index}`}
                  className="hero-image"
                />

                <p className="text-black font-content z-10 mb-7">
                  {captions[index]}
                </p>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
