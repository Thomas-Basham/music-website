import Head from "next/head";
import Image from "next/image";
import Flickity from "react-flickity-component";
import "flickity/css/flickity.css";
import SpotifyPlayer from "/components/SpotifyPlayer.js";
import News from "/pages/news";
import Link from "next/link";
import portraitLayingDown from "/public/images/portrait-laying-down.jpg";
import portraitBlueShirt from "/public/images/portrait-blue-shirt.jpg";
import portraitYellowShirt from "/public/images/portrait-yellow-shirt.jpg";
import portraitStairs from "/public/images/portrait-stairs.jpg";

import Videos from "./videos";
export default function Home() {
  const flickityOptions = {
    freeScroll: false,
    wrapAround: true,
  };

  return (
    <>
      <Flickity
        className={"carousel margin-block-24 mt-6"} // default ''
        elementType={"div"} // default 'div'
        options={flickityOptions} // takes flickity options {}
        disableImagesLoaded={true} // default false
        reloadOnUpdate // default false
        static // default false
      >
        <div className="carousel-cell">
          <Image
            alt="img"
            src={portraitStairs}
            width={"950%"}
            height={"550%"}
          />
        </div>
        <div className="carousel-cell">
          <Image
            alt="img"
            src={portraitBlueShirt}
            width={"950%"}
            height={"550%"}
          />
        </div>

        <div className="carousel-cell">
          <Image
            alt="img"
            src={portraitYellowShirt}
            width={"900%"}
            height={"550%"}
          />
        </div>
      </Flickity>

      <div className="mt-12 mb-6 page-title">
        <h1>MUSIC</h1>
      </div>

      <SpotifyPlayer url="https://open.spotify.com/embed/artist/7fVW0REbd7DTaQCKgXBbHm?utm_source=generator&theme=0" />

      <div className="mt-12 mb-6 page-title">
        <h1>NEWS</h1>
      </div>

      <News />
    </>
  );
}
