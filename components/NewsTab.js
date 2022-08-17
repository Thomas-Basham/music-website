import SpotifyPlayer from "/components/SpotifyPlayer";
import SpotifyCoverArt from "/components/SpotifyCoverArt.js";
import SongStreamingLinks from "/components/SongStreamingLinks";
import Link from "next/link";

export default function NewsTab(props) {
  let spotifyUrl = `http://open.spotify.com/track/${props.spotifyTrackID}?si=db7b62083e8c4253`;
  return (
    <Link
      href="/news/lonely-me"
      className="p-6 m-2 text-left text-white border-2 border-white w-100 text-decoration-none"
    >
      <div className="p-6 w-100">
        <h3>{props.headLine}</h3>
        <p className="float-left">{props.date}</p>

        <SongStreamingLinks
          spotify={spotifyUrl}
          apple={props.apple}
          amazon={props.amazon}
          pandora={props.pandora}
          deezer={props.deezer}
        />

        <div className="justify-between clear-both d-flex article-content">
          <div className="container">
            <SpotifyCoverArt url={spotifyUrl} />
          </div>
          <div className="container player-holder">
            {SpotifyPlayer(
              `https://open.spotify.com/embed/track/${props.spotifyTrackID}?utm_source=generator&theme=0`
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}
