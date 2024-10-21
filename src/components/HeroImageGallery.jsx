import React, { useEffect, useState } from "react";
import { ref, listAll, getDownloadURL } from "firebase/storage";
import { storage } from "../firebaseConfig.js";

export default function HeroImageGallery() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchImages = async () => {
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
              <img
                key={index}
                src={url}
                alt={`Featured work ${index}`}
                style={{
                  width: "300px",
                  height: "200px",
                  objectFit: "cover",
                  margin: "10px",
                }}
              />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
