import Giscus from "@giscus/react";

export default function Comments({ category, categoryId, position }) {
  return (
    <Giscus
      id="comments"
      repo="O-Isaac/Proyecto-Grand-Order-Docs"
      repoId="R_kgDOJDojyA"
      category={category}
      categoryId={categoryId}
      mapping="pathname"
      strict="0"
      reactionsEnabled="1"
      emitMetadata="0"
      inputPosition={position}
      theme={"preferred_color_scheme"}
      lang={"es"}
      loading="lazy"
    />
  );
}
