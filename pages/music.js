import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Header from "../components/Header";
import SpotifyPlayer from "/components/SpotifyPlayer.js";

export default function Home() {
  return (
    <>

      <SpotifyPlayer />
    </>
  );
}
