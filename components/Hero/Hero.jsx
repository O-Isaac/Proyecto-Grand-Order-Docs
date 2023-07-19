import { useEffect, useId, useState } from "react";
import { useTheme } from "nextra-theme-docs";

import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  const { resolvedTheme } = useTheme();
  const [bgUrl, setBgUrl] = useState("/themes/light/hero_background_up.jpg");
  const [charUrl, setCharUrl] = useState("/themes/light/char.webp");
  const [isLoading, setLoading] = useState(true);

  const bgId = useId();
  const charId = useId();

  useEffect(() => {
    if (resolvedTheme === undefined || resolvedTheme === "system") return;
    setBgUrl(`/themes/${resolvedTheme}/hero_background_up.jpg`);
    setCharUrl(`/themes/${resolvedTheme}/char.webp`);
    setLoading(false);
  }, [resolvedTheme]);

  if (isLoading)
    return (
      <section className="h-[800px] w-screen relative overflow-hidden"></section>
    );

  return (
    <section className="h-[800px] w-screen relative overflow-hidden">
      <Image
        key={bgId}
        className="relative z-10 object-cover object-center"
        priority
        src={bgUrl}
        alt="Image"
        fill
      />

      <Link key={charId} href={"/instalar"}>
        <Image
          className="relative transition-all hover:opacity-90 active:scale-110 z-10 object-cover w-auto h-full mx-auto"
          priority
          width={907}
          height={764}
          alt="Instalar"
          src={charUrl}
        />
      </Link>
    </section>
  );
}
