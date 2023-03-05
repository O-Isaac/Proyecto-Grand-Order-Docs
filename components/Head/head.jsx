import Favicon from "./favicons";
import { useRouter } from "next/router";
import { useConfig } from "nextra-theme-docs";
import { domain } from "../../utils";

export default function Head() {
  const { asPath, defaultLocale, locale } = useRouter();
  const { frontMatter: fm } = useConfig();

  const hostname = domain.getHostname();
  const path = defaultLocale === locale ? asPath : `/${locale}${asPath}`;
  const url = "https://" + hostname + path;
  const description = fm.description || "¡Juega Fate Grand Order en español!";
  const title = fm.title || "Proyecto Grand Order";
  const image = domain.getOgImagePath(hostname, title);

  return (
    <>
      <meta name="description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:domain" content={hostname} />
      <meta property="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta property="og:image:width" content="1020" />
      <meta property="og:image:height" content="170" />

      <Favicon />

      <link rel="manifest" href="/favicon/manifest.json" />
      <meta name="msapplication-TileColor" content="#202020" />
      <meta name="theme-color" content="#202020" />
    </>
  );
}
