export default function Frame(props) {
  const { title, src } = props;
  const styleFrame = { margin: "auto", borderRadius: "1rem", overflow: "hidden" }

  return (
    <iframe
      width="832px"
      height="468px"
      src={src}
      title={title}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
      style={styleFrame}
    ></iframe>
  );
}
