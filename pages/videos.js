import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from '../components/Header'
import ReactPlayer from 'react-player'
export default function Home() {
  return (
    <>
    <ReactPlayer url='https://youtube.com/shorts/OUpKct2GstQ?feature=share'style={{margin: '0 auto'}}/>
    </>
  )
}
