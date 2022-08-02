import axios from "axios";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function SpotifyCoverArt({ url }) {
  const [spotifyData, setSpotifyData] = useState("");

  // "https://open.spotify.com/oembed?url=" + url = Spotify JSON Data
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
