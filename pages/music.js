import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Header from "../components/Header";
import SpotifyPlayer from "/components/SpotifyPlayer";

export default function Home() {
  return (
    <>


      <SpotifyPlayer url="https://open.spotify.com/embed/artist/7fVW0REbd7DTaQCKgXBbHm?utm_source=generator&theme=0"/>
    </>
  );
}
