import React, { useState } from "react";

const MainPage = () => {
    const [images, setImages] = useState([])
  const fetchImages = () => {
    const apiKey = "LeAfUxELS3qyLthIHyJbRPiEdzNaxL2tKPs8FHVcWbmn4CVUhKEqvixy";
    const url = `https://api.pexels.com/v1/curated?page=1&per_page=10&query=example`;

    fetch(url, {
      headers: {
        Authorization: apiKey,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setImages(data?.photos)
        console.log(data); // Handle the data here
      })
      .catch((error) => {
        console.error("Error fetching images:", error);
      });
  };

  return <div>ph0tos</div>;
};

export default MainPage;
