import Giscus from "@giscus/react";
import { useTheme } from "nextra-theme-docs";

export default function Comments({ category, categoryId, position }) {
  const { resolvedTheme } = useTheme();

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
      theme={resolvedTheme === "light" ? "light" : "noborder_dark"}
      lang={"es"}
      loading="lazy"
    />
  );
}
