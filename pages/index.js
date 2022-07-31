import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Flickity from 'react-flickity-component'
import "flickity/css/flickity.css";
import SpotifyPlayer from '/components/SpotifyPlayer.js'
export default function Home() {

const flickityOptions = {

  freeScroll: false,
  wrapAround: true
}

  return (
      <>
      
      
      <Flickity
      className={'carousel margin-block-24'} // default ''
      elementType={'div'} // default 'div'
      options={flickityOptions} // takes flickity options {}
      disableImagesLoaded={true} // default false
      reloadOnUpdate // default false
      static // default false

    >
        <div className="carousel-cell">
      <img alt='img' src="https://excision.ca/wp-content/uploads/2022/01/Excision_onyx_WebSlider_OUTNOW-1200x628.jpg" width={1000}/>
      </div>
      <div className="carousel-cell">

      <img alt='img' src="https://excision.ca/wp-content/uploads/2022/01/Excision_onyx_WebSlider_OUTNOW-1200x628.jpg" width={1000}/>
      </div>
      <div className="carousel-cell">

      <img alt='img' src="https://excision.ca/wp-content/uploads/2022/01/Excision_onyx_WebSlider_OUTNOW-1200x628.jpg" width={1000}/>
      </div>
    </Flickity>


      <SpotifyPlayer/>    
      
      </>
  )
}
