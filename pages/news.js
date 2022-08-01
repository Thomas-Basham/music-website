import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from '../components/Header'
import { Row } from 'react-bootstrap'
import SpotifyCoverArt from '../components/SpotifyCoverArt.js'
export default function Home() {
  return (
    
      <>
      <Row lg={5} sm={1} className="p-6" style={{margin: "0 auto"}}>
        <SpotifyCoverArt url="http://open.spotify.com/track/6bc5scNUVa3h76T9nvpGIH"/>
      </Row>
      </>
  )
}
