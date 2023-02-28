export default function Image (props) {
    const { src, alt, height } = props;
    const imageHeight = height ?? "468px";
    const imageStyles = { borderRadius: "1rem", height: imageHeight, objectFit: "cover", objectPosition: "center" }

    return <img width="832px" height={imageHeight} style={imageStyles} src={src} alt={alt} />
}