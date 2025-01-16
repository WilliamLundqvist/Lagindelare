import React, { useEffect, useState } from "react";

const SlideShow = () => {
  const [images, setImages] = useState([]);
  const folderId = "1_IFGgfDVrpqyrKADJ6_R4yMlEKhU4sUn";
  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch(
          `https://drive.google.com/drive/folders/${folderId}?usp=sharing`
        );
        const text = await response.text();
        const fileIds = Array.from(text.matchAll(/data-id="(.*?)"/g)).map(
          (match) => match[1]
        );
        const imageUrls = fileIds.map(
          (id) => `https://drive.google.com/uc?id=${id}`
        );
        setImages(imageUrls);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    fetchImages();
  }, [folderId]);

  return (
    <div className="slideshow">
      {images.length > 0 ? (
        images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Event image ${index + 1}`}
            className="slide"
          />
        ))
      ) : (
        <p>Loading images...</p>
      )}
    </div>
  );
};

export default SlideShow;
