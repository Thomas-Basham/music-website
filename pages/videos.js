import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Header from "../components/Header";
import dynamic from "next/dynamic";
import { useState } from "react";
import FsLightbox from "fslightbox-react";

export default function Videos() {
  const [toggler, setToggler] = useState(false);
  const [productIndex, setProductIndex] = useState(0);

  const productImages = [
    "https://i.imgur.com/fsyrScY.jpg",
    "https://www.youtube.com/watch?v=3nQNiWdeH2Q",
    "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
  ]
  return (
    <>
      <button onClick={() => setToggler(!toggler)}>Toggle Lightbox</button>

      <button onClick={() => setProductIndex(2)}>Load second product</button>

      <FsLightbox
        toggler={toggler}
        sources={[productImages[productIndex]]}
      />
    </>
  );
}
