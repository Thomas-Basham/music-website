import Head from "next/head";
import Image from "next/image";
import styles from "/styles/Home.module.css";
import Header from "../../components/Header";
import { Row } from "react-bootstrap";
import SpotifyPlayer from "../../components/SpotifyPlayer";
import SpotifyCoverArt from "../../components/SpotifyCoverArt.js";
import SongStreamingLinks from "../../components/SongStreamingLinks";
import Link from "next/link";

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
        <Link
          href="/news/lonely-me"
          className="p-6 m-2 text-left text-white border-2 border-white w-100 text-decoration-none"
        >
          <div className="p-6 w-100">
          <h3>Lonely Me Out Now</h3>
          <p className="float-left">January 7, 2022</p>

          <SongStreamingLinks />

          <div className="justify-between clear-both d-flex">
            <SpotifyCoverArt url={LonelyMeUrl} />
            <div className="" style={{ width: "60%" }}>
              {SpotifyPlayer(
                "https://open.spotify.com/embed/track/0UJTi2a46HRnFD8wGFYjil?utm_source=generator&theme=0"
              )}
            </div>
          </div>
          </div>
        </Link>
      </Row>
    </>
  );
}

// https://open.spotify.com/track/0UJTi2a46HRnFD8wGFYjil?si=db7b62083e8c4253
