import "photoswipe/style.css";
import PhotoSwipeLightbox from "photoswipe/lightbox";
import PhotoSwipe from "photoswipe";
import { useEffect } from "react";

export default function Image({ src, alt, height, ref }) {
  const imageHeight = height ?? "468px";
  const imageStyles = {
    borderRadius: "1rem",
    height: imageHeight,
    objectFit: "cover",
    objectPosition: "center",
  };

  useEffect(() => {
    const lightbox = new PhotoSwipeLightbox({
      gallery: "#image a",
      pswpModule: PhotoSwipe,
    });

    lightbox.init();
  }, []);

  return (
    <picture id="image">
      <a
        href={src}
        data-pswp-width="832px"
        data-pswp-height={imageHeight}
        target="_blank"
      >
        <img
          ref={ref}
          width="832px"
          height={imageHeight}
          style={imageStyles}
          src={src}
          alt={alt}
        />
      </a>
    </picture>
  );
}
