import Head from "next/head";
import Image from "next/image";
import styles from "/styles/Home.module.css";
import Header from "../../components/Header";
import { Row } from "react-bootstrap";
import NewsTab from "../../components/NewsTab";
import { SiPandora } from "react-icons/si";
import {
  FaApple,
  FaAmazon,
  FaDeezer,
  FaSpotify,
  FaItunes,
} from "react-icons/fa";

export default function LonelyMeCoverArt() {
  return (
    <>
      <Row lg={4} sm={1} className="pt-6 ">
        {/* <Link
          href="/news/lonely-me"
          className="p-6 m-2 text-left text-white border-2 border-white w-100 text-decoration-none"
        >
          <div className="p-6 w-100">
          <h3>Lonely Me Out Now</h3>
          <p className="float-left">January 7, 2022</p>

          <SongStreamingLinks spotify="https://open.spotify.com/album/4fTxg8tjCU1NUDYEywQLV1" apple="https://music.apple.com/us/album/lonely-me-single/1603526055?uo=4" amazon="https://music.amazon.com/albums/B09PTBL81N?tag=fndcmpgns-20" pandora="https://www.pandora.com/artist/tommy-basham/lonely-me-single/ALhzxdqqc5XXkJP" deezer="https://www.deezer.com/us/album/285645392"   />

          <div className="justify-between clear-both d-flex article-content">
            <div className="container">
            <SpotifyCoverArt url={LonelyMeUrl} />
            </div>
            <div className="container player-holder" >
              {SpotifyPlayer(
                "https://open.spotify.com/embed/track/0UJTi2a46HRnFD8wGFYjil?utm_source=generator&theme=0"
              )}
            </div>
          </div>
          </div>
        </Link> */}

        <NewsTab
          headLine="Lonely Me Out Now"
          date="January 7, 2022"
          spotifyTrackID="0UJTi2a46HRnFD8wGFYjil"
          apple="https://music.apple.com/us/album/lonely-me-single/1603526055?uo=4"
          amazon="https://music.amazon.com/albums/B09PTBL81N?tag=fndcmpgns-20"
          pandora="https://www.pandora.com/artist/tommy-basham/lonely-me-single/ALhzxdqqc5XXkJP"
          deezer="https://www.deezer.com/us/album/285645392"
        />
      </Row>
    </>
  );
}

// https://open.spotify.com/track/0UJTi2a46HRnFD8wGFYjil?si=db7b62083e8c4253
