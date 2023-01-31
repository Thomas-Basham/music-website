import Head from "next/head";
import Image from "next/image";
import Header from "../../components/Header";
import { Row } from "react-bootstrap";
import SpotifyCoverArt from "../../components/SpotifyCoverArt.js";
import SpotifyPlayer from "../../components/SpotifyPlayer";
import SongStreamingLinks from "../../components/SongStreamingLinks";

export default function lonelyMeNewsPost() {
  // Go to spotify track and copy song link
  const url =
    "http://open.spotify.com/track/0UJTi2a46HRnFD8wGFYjil?si=db7b62083e8c4253";

  return (
    <div className="flex-col p-6 text-white opacity-90 d-flex">
      <div className="justify-between d-flex">
        <h3 className="clear-both">Lonely Me Out Now</h3>
        <p className="ml-auto float-end ">January 7, 2022</p>
      </div>
      <SongStreamingLinks spotify="https://open.spotify.com/album/4fTxg8tjCU1NUDYEywQLV1" apple="https://music.apple.com/us/album/lonely-me-single/1603526055?uo=4" amazon="https://music.amazon.com/albums/B09PTBL81N?tag=fndcmpgns-20" pandora="https://www.pandora.com/artist/tommy-basham/lonely-me-single/ALhzxdqqc5XXkJP" deezer="https://www.deezer.com/us/album/285645392"   />
      <div className="mt-2">
      <SpotifyPlayer url="https://open.spotify.com/embed/track/0UJTi2a46HRnFD8wGFYjil?utm_source=generator&theme=0"/>
      </div>

      <p className="p-12 mt-6 border-2 border-white">
        Everyone goes through the feeling of loneliness at least once in
        their life and everyone feels it and expresses it different. The lyrics
        and vocals were written and performed by <a href="https://open.spotify.com/artist/0oALWWgW1Eg5lpxpfjBAW9" target={"_blank"} rel="noreferrer">Stephano Prunebelli</a>. I was
        captivated by his ability to express his emotions, and his story of
        loneliness. I hope you enjoy it! You can stream it on all major music
        platforms
        <br></br>
        <br></br>
        <p className="italic">
          Some Days,I think of you
          <br></br>
          Others, I&apos;ll let it slip through
          <br></br>
          And I only wish I knew how to say,
          <br></br>
          say me too
          <br></br>
          <br></br>
          Cause I don&apos;t how to be
          <br></br>
          The other half of somebody
          <br></br>
          What I do best is leave
          <br></br>
          that&apos;s why I&apos;ll always be
          <br></br>
          <br></br>a &quot;Lonely Me &quot;
          <br></br>a &quot;Lonely Me&quot;
          <br></br>a &quot;Lonely Me&quot;
          <br></br>a &quot;Lonely Me&quot;
          <br></br>
          <br></br>
          Sometimes, I dream of you
          <br></br>
          others, I stay up talking about you
          <br></br>
          And I only wish I knew how to say, say me too
          <br></br>I wish My heart was broken, So I could give this up
          <br></br>
          <br></br>
          Give up on love..
        </p>
      </p>
    </div>
  );
}
