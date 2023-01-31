import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import SpotifyPlayer from "/components/SpotifyPlayer";

export default function Music() {
  return (
    <>
      <SpotifyPlayer url="https://open.spotify.com/embed/artist/7fVW0REbd7DTaQCKgXBbHm?utm_source=generator&theme=0" />
    </>
  );
}
