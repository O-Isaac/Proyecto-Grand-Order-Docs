import { source } from "@/lib/source";
import {
  DocsPage,
  DocsBody,
  DocsDescription,
  DocsTitle,
} from "fumadocs-ui/page";
import { notFound } from "next/navigation";
import { createRelativeLink } from "fumadocs-ui/mdx";
import { getMDXComponents } from "@/mdx-components";

export default async function Page(props: {
  params: Promise<{ slug?: string[] }>;
}) {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) notFound();

  const MDXContent = page.data.body;

  return (
    <DocsPage toc={page.data.toc} full={page.data.full}>
      <DocsTitle>{page.data.title}</DocsTitle>
      <DocsDescription>{page.data.description}</DocsDescription>
      <DocsBody>
        <MDXContent
          components={getMDXComponents({
            // this allows you to link to other pages with relative file paths
            a: createRelativeLink(source, page),
          })}
        />
      </DocsBody>
    </DocsPage>
  );
}

export async function generateStaticParams() {
  return source.generateParams();
}

export async function generateMetadata(props: {
  params: Promise<{ slug?: string[] }>;
}) {
  const params = await props.params;
  const page = source.getPage(params.slug);

  if (!page) notFound();

  return {
    title: "Proyecto Grand Order - " + page.data.title,
    description: page.data.description,
    image: `https://services.proyectograndorder.es/api/og/image?title=${page.data.title}`,
    keywords: ["Proyecto Grand Order", "Documentación", "Fate/Grand Order", "Traducción", "Rayshift", "Shizuku", "TranslateFGO"],
    openGraph: {
      title: "Proyecto Grand Order - " + page.data.title,
      description: page.data.description,
      images: [
        {
          url: `https://services.proyectograndorder.es/api/og/image?title=${page.data.title}`,
          width: 1200,
          height: 630,
          alt: page.data.title,
        },
      ],
    },
    twitter: {
      title: "Proyecto Grand Order - " + page.data.title,
      description: page.data.description,
      card: "summary_large_image",
      images: [
        {
          url: `https://services.proyectograndorder.es/api/og/image?title=${page.data.title}`,
          width: 1200,
          height: 630,
          alt: page.data.title,
        },
      ],
    },
  };
}
