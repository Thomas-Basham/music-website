import { SiPandora } from "react-icons/si";
import {
  FaApple,
  FaAmazon,
  FaDeezer,
  FaSpotify,
  FaItunes,
} from "react-icons/fa";
export default function SongStreamingLinks() {
  return (
    <div className="justify-around float-right ml-auto text-right w-25 d-flex text-decoration-none">
    <a
      href="https://found.ee/FEkeI"
      className="text-white text-decoration-none"
      title="Get it at Spotify"
    >
      <FaSpotify />
    </a>
    <a
      href="https://found.ee/wlhci"
      className="text-white text-decoration-none"
      title="Get it at Apple Music"
    >
      <FaApple />
    </a>
    <a
      href="https://found.ee/rI5Zt"
      className="text-white text-decoration-none"
      title="Get it at iTunes"
    >
      <FaItunes />
    </a>
    <a
      href="https://found.ee/Qst2p"
      className="text-white text-decoration-none"
      title="Get it at Amazon"
    >
      <FaAmazon />
    </a>
    <a
      href="https://found.ee/bI8ZBZ"
      className="text-white text-decoration-none"
      title="Get it at Pandora"
    >
      <SiPandora />
    </a>
    <a
      href="https://found.ee/tcvzL1"
      className="text-white text-decoration-none"
      title="Get it at Deezer"
    >
      <FaDeezer />
    </a>
  </div>

  );
}
