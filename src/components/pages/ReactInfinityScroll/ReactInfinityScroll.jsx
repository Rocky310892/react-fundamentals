import React, { useState, useEffect } from "react";
import HeaderScroll from "./HeaderScroll";
import Loader from "./Loader";
import UnsplashImage from "./UnsplashImage";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";

//https://github.com/candraKriswinarto/React-infinite-scroll/blob/master/src/App.js

const ReactInfinityScroll = () => {
  const [images, setImage] = useState([]);

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async (count = 10) => {
    const apiRoot = "https://api.unsplash.com";
    const accessKey = process.env.REACT_APP_ACCESSKEY;

    try {
      await axios
        .get(`${apiRoot}/photos/random?client_id=${accessKey}&count=${count}`, {
          timeout: 2000,
        })
        .then((res) => {
          setImage([...images, ...res.data]);
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <HeaderScroll />
      <Loader />
      <InfiniteScroll
        dataLength={images.length}
        next={fetchImages}
        hasMore={true}
        loader={<Loader />}
      />
      <div className="image-wrapper">
        {images.map((image) => (
          <UnsplashImage key={image.id} url={image.urls.thumb} />
        ))}
      </div>
    </div>
  );
};

export default ReactInfinityScroll;
