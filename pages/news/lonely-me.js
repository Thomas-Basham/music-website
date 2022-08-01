import Head from "next/head";
import Image from "next/image";
import styles from "/styles/Home.module.css";
import Header from "../../components/Header";
import { Row } from "react-bootstrap";
import SpotifyCoverArt from "../../components/SpotifyCoverArt.js";
import SpotifyPlayer from "../../components/SpotifyPlayer";
export default function lonelyMeNewsPost() {
  // Go to spotify track and copy song link
  const url =
    "http://open.spotify.com/track/0UJTi2a46HRnFD8wGFYjil?si=db7b62083e8c4253";

  return (
    <>
      <p>Lonely Me By Thomas Basham</p>
    </>
  );
}

// https://open.spotify.com/track/0UJTi2a46HRnFD8wGFYjil?si=db7b62083e8c4253
