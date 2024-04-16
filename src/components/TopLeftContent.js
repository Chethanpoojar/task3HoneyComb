import React from "react";

const TopLeftContent = () => {
  return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          color: "white",
        }}
      >
        <h2>CALIBRE ENGINEERING</h2>
        <div style={{ overflowWrap: "break-word" }}>
          This extension allows you to generate Lorem Ipsum text directly within
          your editor. You can customize the number of paragraphs, sentences, or
          words you want. You can install it from the VSCode marketplace by
          searching for "Lorem Ipsum" and clicking on the install button.
        </div>
      </div>
  );
};

export default TopLeftContent;
