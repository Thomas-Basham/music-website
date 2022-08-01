import Head from "next/head";
import Image from "next/image";
import styles from "/styles/Home.module.css";
import Header from "../../components/Header";
import { Row } from "react-bootstrap";
import SpotifyPlayer from "../../components/SpotifyPlayer";
import SpotifyCoverArt from "../../components/SpotifyCoverArt.js";

import { SiPandora } from "react-icons/si";
import {
  FaApple,
  FaAmazon,
  FaDeezer,
  FaSpotify,
  FaItunes,
} from "react-icons/fa";

export default function LonelyMeCoverArt() {
  // Go to spotify track and copy song link
  const LonelyMeUrl =
    "http://open.spotify.com/track/0UJTi2a46HRnFD8wGFYjil?si=db7b62083e8c4253";

  return (
    <>
      <Row lg={4} sm={1} className="pt-6 ">
        <a
          href="/news/lonely-me"
          className="p-6 m-2 text-left text-white border-2 border-white w-100 text-decoration-none"
        >
          <h3>Lonely Me Out Now</h3>
          <p className="float-left">January 7, 2022</p>

          <div className="justify-around float-right ml-auto text-right w-25 d-flex text-decoration-none">
            <a
              href="https://found.ee/FEkeI"
              className="text-white text-decoration-none"
              title="Get it at Spotify"
            >
              <FaSpotify />
            </a>
            <a
              href="https://found.ee/wlhci"
              className="text-white text-decoration-none"
              title="Get it at Apple Music"
            >
              <FaApple />
            </a>
            <a
              href="https://found.ee/rI5Zt"
              className="text-white text-decoration-none"
              title="Get it at iTunes"
            >
              <FaItunes />
            </a>
            <a
              href="https://found.ee/Qst2p"
              className="text-white text-decoration-none"
              title="Get it at Amazon"
            >
              <FaAmazon />
            </a>
            <a
              href="https://found.ee/bI8ZBZ"
              className="text-white text-decoration-none"
              title="Get it at Pandora"
            >
              <SiPandora />
            </a>
            <a
              href="https://found.ee/tcvzL1"
              className="text-white text-decoration-none"
              title="Get it at Deezer"
            >
              <FaDeezer />
            </a>
          </div>

          <div className="justify-between clear-both d-flex" >
            <SpotifyCoverArt url={LonelyMeUrl} />
           <div className="" style={{width: "70%"}}>
            {SpotifyPlayer(
              "https://open.spotify.com/embed/track/0UJTi2a46HRnFD8wGFYjil?utm_source=generator&theme=0"
            )}
         </div>
         
          </div>
        </a>
      </Row>
    </>
  );
}

// https://open.spotify.com/track/0UJTi2a46HRnFD8wGFYjil?si=db7b62083e8c4253
