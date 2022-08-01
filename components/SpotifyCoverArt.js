import axios from "axios";
import { useState, useEffect } from "react";

export default  function SpotifyCoverArt({url}) {
  const [spotifyData, setSpotifyData] = useState("");

  const spotifyUrl = `https://open.spotify.com/oembed?url=${url}`;
  useEffect(() =>{

   axios
    .get(spotifyUrl)

    .then((response) => {
      //put the resulted data in the console for testing purposes
      console.log(response.data);
      setSpotifyData(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
  })
  return (
    <>
{     spotifyData && <img alt={spotifyData.title} src={spotifyData.thumbnail_url} />
}    
</>
  );
}
