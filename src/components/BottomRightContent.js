import { IconButton } from "@mui/material";
import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const BottomRightContent = (props) => {
  const { images, index, handlePrevClick, handleNextClick } = props;
  return (
    <div
        style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
        }}
    >
      <img
        className="scrollImage"
        style={{
          width: "23rem",
          height: "13rem",
          border: "1px solid #ccc",
        }}
        src={images[index]?.src?.original}
        alt={images[index]?.alt}
      />
      <div>
        <IconButton
          onClick={handlePrevClick}
          aria-label="prev"
          disabled={index == 0}
          color="primary"
        >
          <FaChevronLeft color="#ffff" />
        </IconButton>

        <IconButton
          onClick={handleNextClick}
          aria-label="prev"
          disabled={index == images?.length - 1}
          color="primary"
        >
          <FaChevronRight color="#ffff" />
        </IconButton>
      </div>
    </div>
  );
};

export default BottomRightContent;
