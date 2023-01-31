import Head from "next/head";
import Image from "next/image";
import Header from "../../components/Header";
import { Row } from "react-bootstrap";
import SpotifyCoverArt from "../../components/SpotifyCoverArt.js";
import SpotifyPlayer from "../../components/SpotifyPlayer";
import SongStreamingLinks from "../../components/SongStreamingLinks";

export default function fumesNewsPost() {
  // Go to spotify track and copy song link
  const url =
    "https://open.spotify.com/track/1jvs3FyXkbMya4jSJYJYge?si=3d66f0d16fd64eac";

  return (
    <div className="flex-col p-6 text-white opacity-90 d-flex">
      <div className="justify-between d-flex">
        <h3 className="clear-both">Fumes Out Now</h3>
        <p className="ml-auto float-end ">February 3, 2022</p>
      </div>
      <SongStreamingLinks
        deezer="https://www.deezer.com/us/album/290466652"
        amazon="https://music.amazon.com/albums/B09R2MMGDW"
        apple="https://music.apple.com/us/album/fumes-single/1606804360?uo=4"
        pandora="https://www.pandora.com/artist/tommy-basham/fumes-single/ALtz2J4PfnK9mf9"
        spotify="https://open.spotify.com/album/6uB0L73lIBOcVb55tmvkmK"
      />
      <div className="mt-2">
        <SpotifyPlayer url="https://open.spotify.com/embed/track/1jvs3FyXkbMya4jSJYJYge?si=3d66f0d16fd64eac?utm_source=generator&theme=0"/>
        
      </div>

      <p className="p-12 mt-6 border-2 border-white">
        Get into this song with some captivating wavy piano licks accompanied by
        a set of vibey drums.
        <br></br>
        <br></br>
        The song quickly picks up as the beat drops with heavy grinding bass and
        a fluttering melody. It all ends with an extremely vibey solo to lift
        your mood even higher.
        <br></br>
        <br></br>
        Stream it everywhere out now!
      </p>
    </div>
  );
}
