import { useRouter } from "next/router";
import { useConfig } from "nextra-theme-docs";

export default {
  docsRepositoryBase:
    "https://github.com/O-Isaac/Proyecto-Grand-Order-Docs/tree/master",
  logo: (
    <>
      <img className="logo" width="40px" src="/images/bg-logo.svg" alt="Logo" />
      <h1 style={{ marginLeft: "5px", fontWeight: 600 }}>
        Proyecto Grand Order{" "}
      </h1>
    </>
  ),
  project: {
    link: "https://github.com/O-Isaac/Proyecto-Grand-Order-Docs",
  },
  useNextSeoProps() {
    return {
      titleTemplate: "%s - Proyecto Grand Order",
    };
  },
  head: () => {
    const { asPath, defaultLocale, locale } = useRouter();
    const { frontMatter: fm } = useConfig();
    const hostname =
      process.env.VERCEL_ENV === "production"
        ? "proyectograndorder.es"
        : process.env.VERCEL_URL || "proyectograndorder.es";

    const path = defaultLocale === locale ? asPath : `/${locale}${asPath}`;
    const url = "https://" + hostname + path;
    const description = fm.description || "¡Juega Fate Grand Order en español!";
    const title = fm.title || "Proyecto Grand Order";
    const image = fm.title
      ? `${"https://" + hostname}/api/og?title=${fm.title}`
      : `${"https://" + hostname}/api/og`;

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

        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href="/favicon/apple-icon-57x57.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="60x60"
          href="/favicon/apple-icon-60x60.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="/favicon/apple-icon-72x72.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="/favicon/apple-icon-76x76.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="/favicon/apple-icon-114x114.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="/favicon/apple-icon-120x120.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="/favicon/apple-icon-144x144.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/favicon/apple-icon-152x152.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-icon-180x180.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/android-icon-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="/favicon/favicon-96x96.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicon/manifest.json" />
        <meta name="msapplication-TileColor" content="#202020" />
        <meta
          name="msapplication-TileImage"
          content="/favicon/ms-icon-144x144.png"
        />
        <meta name="theme-color" content="#202020" />
      </>
    );
  },
  banner: {
    key: "3.0-release",
    text: (
      <a href="/" target="_blank">
        🎉 Nueva pagina del proyecto →
      </a>
    ),
  },
};
