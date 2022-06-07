import React from "react";

const UnsplashImage = ({ key, url }) => {
  return (
    <>
      <img key={key} src={url} alt="" width="100%" height="100%" />
    </>
  );
};

export default UnsplashImage;
