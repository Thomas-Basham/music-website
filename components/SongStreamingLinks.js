import { SiPandora } from "react-icons/si";
import {
  FaApple,
  FaAmazon,
  FaDeezer,
  FaSpotify,
  FaItunes,
} from "react-icons/fa";
export default function SongStreamingLinks(props) {
  return (
    <div className="justify-around float-right w-1/4 ml-auto text-right d-flex text-decoration-none song-streaming-links">
    <a
      href= {props.spotify} // "https://open.spotify.com/album/4fTxg8tjCU1NUDYEywQLV1"
      className="text-white text-decoration-none"
      title="Get it at Spotify"
      target={"_blank"}
      rel="noreferrer"
    >
      <FaSpotify />
    </a>
    <a
      href= {props.apple} // "https://music.apple.com/us/album/lonely-me-single/1603526055?uo=4"
      className="text-white text-decoration-none"
      title="Get it at Apple Music"
      target={"_blank"}
      rel="noreferrer"
    >
      <FaApple />
    </a>
    <a
      href= {props.apple} // "https://music.apple.com/us/album/lonely-me-single/1603526055?uo=4"
      className="text-white text-decoration-none"
      title="Get it at iTunes"
      target={"_blank"}
      rel="noreferrer"
    >
      <FaItunes />
    </a>
    <a
      href= {props.amazon} // "https://music.amazon.com/albums/B09PTBL81N?tag=fndcmpgns-20"
      className="text-white text-decoration-none"
      title="Get it at Amazon"
      target={"_blank"}
      rel="noreferrer"
    >
      <FaAmazon />
    </a>
    <a
      href= {props.pandora} // "https://www.pandora.com/artist/tommy-basham/lonely-me-single/ALhzxdqqc5XXkJP?%24ios_deeplink_path=pandorav4%3A%2F%2Fbackstage%2Falbum%3Ftoken%3DAL%3A12089364&%24android_deeplink_path=pandorav4%3A%2F%2Fbackstage%2Falbum%3Ftoken%3DAL%3A12089364&%7Echannel=Partner+Catalog+Search+API&_branch_match_id=1082764993525331952&_branch_referrer=H4sIAAAAAAAAA62PzWrDMBCEn0a5GNuN7f4kYIppG2jJwdBLbmYtCUvoN5JSN336rqDtExT2sAwz8zEiJR%2F3de3BMhegAu8rLa2qH0nTMR5Vcn66BN2LbCTtQJoD3rqu1W%2BEOoMKhCRjwic5Y67lDFFA1rWzXF9Lw8so7aI5SsNRfH2y85nenk7qbdwgSbo4Mc59Rk8ekuh%2F2j%2B6P%2BYMVMUES64APV8MaRGmuCXt83BE27a5edi1d10uxHRwkv1n6f0LFWBxTT%2FiWMtD8QQJtFuKdw6BimIYX78BI8pDgk8BAAA%3D"
      className="text-white text-decoration-none"
      title="Get it at Pandora"
      target={"_blank"}
      rel="noreferrer"
    >
      <SiPandora />
    </a>
    <a
      href= {props.deezer} // "https://www.deezer.com/us/album/285645392"
      className="text-white text-decoration-none"
      title="Get it at Deezer"
      target={"_blank"}
      rel="noreferrer"
    >
      <FaDeezer />
    </a>
  </div>

  );
}
