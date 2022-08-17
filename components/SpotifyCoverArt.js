import axios from "axios";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function SpotifyCoverArt({ url }) {
  const [spotifyData, setSpotifyData] = useState("");

  // "https://open.spotify.com/oembed?url=" + "http://open.spotify.com/track/0UJTi2a46HRnFD8wGFYjil?si=db7b62083e8c4253" = Spotify JSON Data
  const spotifyUrl = `https://open.spotify.com/oembed?url=${url}`;
  
  useEffect(() => {
    axios
      .get(spotifyUrl)

      .then((response) => {
        //put the resulted data in the console for testing purposes
        setSpotifyData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  });
  return (
    <>
      {spotifyData && (
        <Image alt={spotifyData.title} src={spotifyData.thumbnail_url} width="400%" height="400%" layout="" />
      )}
    </>
  );
}
