import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Flickity from "react-flickity-component";
import "flickity/css/flickity.css";
import { useState } from "react";
import { Row, Col } from "react-bootstrap";
export default function Videos() {
  const [videoIndex, setVideoIndex] = useState(0);
  const [flickityOpen, setflickityOpen] = useState(true);

  const flickityHandler = (index) => {
    setVideoIndex(index);
    setflickityOpen(true);
  };

  const flickityOptions = {
    freeScroll: false,
    wrapAround: true,
    initialIndex: videoIndex,
  };

  const videos = [
    {
      id: "OFQ5OmEHt44",
      url: function () {
        return `https://www.youtube.com/embed/${this.id}`;
      },
      placeHolder: function () {
        return `https://img.youtube.com/vi/${this.id}/3.jpg`;
      },
      title: "Lonely Me - Tommy Basham Lyric Video",
    },

    {
      id: "OFQ5OmEHt44",
      url: function () {
        return `https://www.youtube.com/embed/${this.id}`;
      },
      placeHolder: function () {
        return `https://img.youtube.com/vi/${this.id}/3.jpg`;
      },
      title: "Lonely Me - Tommy Basham Lyric Video",
    },
    {
      id: "OFQ5OmEHt44",
      url: function () {
        return `https://www.youtube.com/embed/${this.id}`;
      },
      placeHolder: function () {
        return `https://img.youtube.com/vi/${this.id}/3.jpg`;
      },
      title: "Lonely Me - Tommy Basham Lyric Video",
    },
    {
      id: "OFQ5OmEHt44",
      url: function () {
        return `https://www.youtube.com/embed/${this.id}`;
      },
      placeHolder: function () {
        return `https://img.youtube.com/vi/${this.id}/3.jpg`;
      },
      title: "Lonely Me - Tommy Basham Lyric Video",
    },
    {
      id: "OFQ5OmEHt44",
      url: function () {
        return `https://www.youtube.com/embed/${this.id}`;
      },
      placeHolder: function () {
        return `https://img.youtube.com/vi/${this.id}/3.jpg`;
      },
      title: "Lonely Me - Tommy Basham Lyric Video",
    },
  ];

  const videoIframes = videos.map((video, i) => {
    return (
      <div key={i} className="carousel-cell">
        <iframe
          width="100%"
          height="100%"
          src={video.url()}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    );
  });

  const thumbnails = videos.map((video, i) => {
    return (
      <div key={i} className="m-2 border border-white thumbnail-div">
        <img
          onClick={() => flickityHandler(i)}
          className="mb-6"
          alt={video.altTag}
          src={video.placeHolder()}
          height="250px"
          width="250px"
        />

        <p className="text-center text-white">{video.title}</p>
      </div>
    );
  });

  return (
    <>
      {flickityOpen && (
        <Flickity
          className={"carousel mb-6 "} // default ''
          elementType={"div"} // default 'div'
          options={flickityOptions} // takes flickity options {}
          disableImagesLoaded={true} // default false
          reloadOnUpdate // default false
          static // default false
        >
          {videoIframes}
        </Flickity>
      )}
      <Row lg={5} sm={1} className="p-6" style={{margin: "0 auto"}}>
        {thumbnails}
      </Row>
    </>
  );
}
