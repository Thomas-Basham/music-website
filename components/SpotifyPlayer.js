
export default function SpotifyPlayer(url) {
  
  return (
    <iframe className='my-px' style={{borderRadius:"12px"}} src={url} width="100%" height="380" frameBorder="0" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>

  );
}
