import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from '../components/Header'
import StairPortrait from '/assets/portrait-stairs.jpg'
export default function Home() {
  return (
    <>
    <Image alt='stair-portrait' layout="responsive" src={StairPortrait} className='opacity-70'/>
    <p className='p-3 my-4 text-white border border-white'>
    What up! I'm Tommy! I’m bringing my own style to the bass music scene. With a gang of originals and remixes, I’m ready to show the world what they’re missing. 
    <br></br>
    <br></br>
I hope to see you one day at a show or festival! 
      </p>
    </>
  )
}
