import React, { useState } from "react";
import { storage } from "../firebaseConfig";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

const FileUpload = () => {
  const [image, setImage] = useState(null);
  const [url, setUrl] = useState("");

  const handleImageChange = (event) => {
    if (event.target.files[0]) {
      setImage(event.target.files[0]);
    }
  };

  const handleUpload = () => {
    if (image) {
      const storageRef = ref(storage, `images/${image.name}`);
      uploadBytes(storageRef, image).then((snapshot) => {
        // write a user feedback for successful upload
        console.log("Uploaded a file!");

        // Get the download URL for the uploaded file
        getDownloadURL(storageRef).then((downloadURL) => {
          setUrl(downloadURL);  // Set the image URL to state
          console.log("File available at:", downloadURL);
        });
      });
    }
  };

  return (
    <div>
      <input type="file" onChange={handleImageChange} />
      <button onClick={handleUpload}>Upload Image</button>

      {url && <img src={url} alt="Uploaded" width="300" />}
    </div>
  );
};

export default FileUpload;
