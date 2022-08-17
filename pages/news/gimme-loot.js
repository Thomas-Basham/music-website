import SpotifyPlayer from "../../components/SpotifyPlayer";
import SongStreamingLinks from "../../components/SongStreamingLinks";

export default function gimmeLootNewsPost() {
  // Go to spotify track and copy song link
  const url =
    "http://open.spotify.com/track/0UJTi2a46HRnFD8wGFYjil?si=db7b62083e8c4253";

  return (
    <div className="flex-col p-6 text-white opacity-90 d-flex">
      <div className="justify-between d-flex">
        <h3 className="clear-both">Gimme Loot Out Now</h3>
        <p className="ml-auto float-end ">August 11, 2022</p>
      </div>
      <SongStreamingLinks />
      <div className="mt-2">
      <SpotifyPlayer url="https://open.spotify.com/embed/track/2KeqRslwPKHlyfbtTXjsX1?utm_source=generator&theme=0"/>
      </div>

      <p className="p-12 mt-6 border-2 border-white">
          Dive the heck in with this one 
        <br></br>
        <br></br>
      </p>
    </div>
  );
}
