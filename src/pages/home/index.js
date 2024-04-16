import React, { useEffect, useState } from "react";
import "./Home.css";
import TopLeftContent from "../../components/TopLeftContent";
import BottomRightContent from "../../components/BottomRightContent";

const MainPage = () => {
  const [images, setImages] = useState([]);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = () => {
    const apiKey = "LeAfUxELS3qyLthIHyJbRPiEdzNaxL2tKPs8FHVcWbmn4CVUhKEqvixy";
    const url = `https://api.pexels.com/v1/curated?page=1&per_page=50`;

    fetch(url, {
      headers: {
        Authorization: apiKey,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setImages(data?.photos);
        console.log(data); // Handle the data here
      })
      .catch((error) => {
        console.error("Error fetching images:", error);
      });
  };

  const handleNextClick = () => {
    setCurrentPhotoIndex(currentPhotoIndex + 1);
  };

  const handlePrevClick = () => {
    setCurrentPhotoIndex(currentPhotoIndex - 1);
  };

  return (
      <div
        className="container"
      >
        <img
          style={{ width: "100%", height: "100%" }}
          src={images[currentPhotoIndex]?.src?.original}
          alt={images[currentPhotoIndex]?.alt}
        />

        <div className="scrollableContent">
          <TopLeftContent />
        </div>

        <div style={{ position: "absolute", right: 20, bottom: 20 }}>
          <BottomRightContent
            images={images}
            index={currentPhotoIndex}
            handleNextClick={handleNextClick}
            handlePrevClick={handlePrevClick}
          />
        </div>
      </div>
  );
};

export default MainPage;
