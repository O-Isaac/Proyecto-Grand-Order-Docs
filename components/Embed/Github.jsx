import { useEffect, useState } from "react";

export default function EmbedGithub({ repo }) {
  const [hash, setHash] = useState(null);

  const CACHE_KEY = `github-og-cache-${repo}`;
  const CACHE_DURATION = 30 * 60 * 1000;

  const generateHash = async () => {
    const encoder = new TextEncoder();
    const data = encoder.encode(crypto.randomUUID());
    const hashBuffer = await crypto.subtle.digest("SHA-256", data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray
      .map((byte) => byte.toString(16).padStart(2, "0"))
      .join("");

    return hashHex;
  };

  const generateAndCache = async () => {
    const hash = await generateHash();
    setHash(hash);
    localStorage.setItem(
      CACHE_KEY,
      JSON.stringify({ hash, timestamp: Date.now() })
    );
  };

  useEffect(() => {
    const cachedData = localStorage.getItem(CACHE_KEY);

    if (cachedData) {
      const { hash: cachedHash, timestamp } = JSON.parse(cachedData);
      const now = Date.now();

      if (now - timestamp < CACHE_DURATION) {
        setHash(cachedHash);
      } else {
        generateAndCache();
      }
    } else {
      generateAndCache();
    }
  }, []);

  return (
    <section className="bg-neutral-900 border-none rounded-t-2xl aspect-[16/8] w-full block max-w-full mt-3">
      {hash && (
        <img
          width="1200px"
          height="600px"
          className="rounded-t-2xl"
          src={`https://opengraph.githubassets.com/${hash}/${repo}`}
          alt={`https://github.com/${repo}`}
        />
      )}
    </section>
  );
}
