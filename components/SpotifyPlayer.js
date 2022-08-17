
export default function SpotifyPlayer(props) {
  let height = "130"
  if (props.size == "small") { height = "90"} else { height = "380px"}

  return (
    <iframe className='my-px' style={{borderRadius:"12px"}} src={props.url} width="100%" height={height} frameBorder="0" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>

  );
}
