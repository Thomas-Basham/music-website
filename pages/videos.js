import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Flickity from 'react-flickity-component'
import "flickity/css/flickity.css";
import { useState } from "react";
import { Row, Col } from "react-bootstrap";
export default function Videos() {
  const [videoIndex, setVideoIndex] = useState(0);
  const [flickityOpen, setflickityOpen] = useState(true);


  const flickityHandler = (index) => {
    setVideoIndex(index);
    setflickityOpen(true)
  }

  const flickityOptions = {

    freeScroll: false,
    wrapAround: true,
    initialIndex: videoIndex
  }

  const videos = [
    {
      url: "https://youtu.be/OFQ5OmEHt44",
      type: "video",
      title: "some video",
      placeHolder: "https://placekitten.com/550/500",
    },

    {
      url: "https://www.youtube.com/embed/ScMzIvxBSi4",
      type: "video",
      title: "some other video",
      placeHolder: "https://placekitten.com/550/500",

    },
    {
      url: "https://www.youtube.com/embed/ScMzIvxBSi4",
      type: "video",
      title: "some other video",
      placeHolder: "https://placekitten.com/550/500",

    },
  ];

  const videoIframes = videos.map((video, i) => {
    return(
      <div key={i} className="carousel-cell">
      <iframe width="100%" height="100%" src={video.url} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>    
        </div>
    )
  }) 

  const thumbnails = videos.map((video, i) => {
    return (
      <img onClick={() => flickityHandler(i)} key={i} alt={video.altTag} src={video.placeHolder} height="250px" width="250px"/>
    )
  })
  
  return (

    <>
    { flickityOpen && <Flickity
      className={'carousel mb-24'} // default ''
      elementType={'div'} // default 'div'
      options={flickityOptions} // takes flickity options {}
      disableImagesLoaded={true} // default false
      reloadOnUpdate // default false
      static // default false

    >
        <div className="carousel-cell">
        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/OFQ5OmEHt44" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>      </div>
      <div className="carousel-cell">

      <img alt='img' src="https://excision.ca/wp-content/uploads/2022/01/Excision_onyx_WebSlider_OUTNOW-1200x628.jpg" width={1000}/>
      </div>
      <div className="carousel-cell">

      <img alt='img' src="https://excision.ca/wp-content/uploads/2022/01/Excision_onyx_WebSlider_OUTNOW-1200x628.jpg" width={1000}/>
      </div>
    </Flickity>}
      <Row lg={4} sm={1} >
      {thumbnails}
      </Row>




    </>
  );
}
