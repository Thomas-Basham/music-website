import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Header from "../components/Header";
import StairPortrait from "/public/images/portrait-stairs.jpg";
export default function Home() {
  return (
    <>
      <Image
        alt="stair-portrait"
        layout="responsive"
        src={StairPortrait}
        className="opacity-70"
      />
      <p className="p-3 my-4 text-white border border-white">
        Whats up! I&apos;m Tommy! I&apos;m bringing my own style to the bass
        music scene. With a gang of original and remixed music released, you can
        only expect more to come. You can stream/buy my music through all major
        music platforms.
        <br></br>
        <br></br>
        Based out of seattle, Washington, I started my journey as a musician
        when my mom bought me a guitar when I was 13. It became my method of
        escape through my troubled childhood. I never did get very good at
        playing guitar, probably because my attention span was short and I was
        distracted by an urge to create things. Anything I could think of, I
        wanted to find out how to make it. Speaking of, I made all of the
        graphics and images on this website, and I created the website myself
        too. Man, I love making things.
        <br></br>
        <br></br>
        My love for music never changed, even though I played guitar less as I
        aged. Nocturnal Wonderland, Texas 2012 was the first EDM festival I went
        to, and I was hooked, which led me to learn how to produce music on my
        own and then release music under different aliases, trying out different
        things.
        <br></br>
        <br></br>
        In 2020 I decided to add a formal education to my musical journey. I was
        accepted into Icon Collective, Los Angeles and completed their year long
        music production program. It was a transforming experience that has
        emboldened me as the musician and artist you see today.
        <br></br>
        <br></br>I hope to see you one day at a show or festival!
      </p>
    </>
  );
}
