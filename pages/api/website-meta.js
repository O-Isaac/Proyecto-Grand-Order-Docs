const META_REGEX = /<meta\s+[^>]*>/gi;

function getMetaTagValue(html, attrName, attrValue) {
  const matches = html.match(META_REGEX) || [];
  const needle = `${attrName}="${attrValue}"`;

  for (const tag of matches) {
    if (!tag.includes(needle)) continue;

    const contentMatch = tag.match(/content\s*=\s*"([^"]+)"/i);
    if (contentMatch?.[1]) return contentMatch[1].trim();

    const singleQuoteMatch = tag.match(/content\s*=\s*'([^']+)'/i);
    if (singleQuoteMatch?.[1]) return singleQuoteMatch[1].trim();
  }

  return null;
}

function getTitle(html) {
  const titleMatch = html.match(/<title[^>]*>([\s\S]*?)<\/title>/i);
  return titleMatch?.[1]?.trim() || null;
}

function toAbsoluteUrl(candidate, baseUrl) {
  if (!candidate) return null;
  try {
    return new URL(candidate, baseUrl).toString();
  } catch {
    return null;
  }
}

export default async function handler(req, res) {
  const rawUrl = Array.isArray(req.query.url) ? req.query.url[0] : req.query.url;

  if (!rawUrl) {
    return res.status(400).json({ error: "Missing query param: url" });
  }

  let targetUrl;
  try {
    targetUrl = new URL(rawUrl);
    if (!/^https?:$/.test(targetUrl.protocol)) {
      return res.status(400).json({ error: "Only http/https URLs are allowed" });
    }
  } catch {
    return res.status(400).json({ error: "Invalid URL" });
  }

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 9000);

  try {
    const response = await fetch(targetUrl.toString(), {
      signal: controller.signal,
      headers: {
        "user-agent": "Mozilla/5.0 (compatible; ProyectoGrandOrderDocs/1.0)",
        accept: "text/html,application/xhtml+xml",
      },
    });

    if (!response.ok) {
      return res.status(502).json({ error: `Could not fetch URL (${response.status})` });
    }

    const html = await response.text();
    const ogImage = getMetaTagValue(html, "property", "og:image");
    const twitterImage = getMetaTagValue(html, "name", "twitter:image");
    const title =
      getMetaTagValue(html, "property", "og:title") ||
      getMetaTagValue(html, "name", "twitter:title") ||
      getTitle(html);
    const description =
      getMetaTagValue(html, "property", "og:description") ||
      getMetaTagValue(html, "name", "description") ||
      getMetaTagValue(html, "name", "twitter:description");

    return res.status(200).json({
      image: toAbsoluteUrl(ogImage || twitterImage, targetUrl),
      title,
      description,
    });
  } catch {
    return res.status(500).json({ error: "Failed to fetch metadata" });
  } finally {
    clearTimeout(timeoutId);
  }
}