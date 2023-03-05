import { useEffect, useState } from "react";
import { useTheme } from "nextra-theme-docs";

import Link from "next/link";
import Image from "next/image";
import style from "./Hero.module.css";

export default function Hero() {
  const { resolvedTheme } = useTheme();
  const [theme, setTheme] = useState("dark");
  const [key, setKey] = useState(0);

  useEffect(() => {
    if (resolvedTheme) {
      setTheme(resolvedTheme);
      setKey((prevKey) => ++prevKey);
    }
  }, [resolvedTheme]);

  return (
    <div key={key} className={"grid place-items-center h-[800px] relative " + style.heroWrapper}>
      <Link className="h-full" href="/instalar">
        <section className="h-full w-auto grid place-items-center">
          <Image
            className="object-cover"
            src={`/themes/${theme}/hero_background_up.jpg`}
            fill
            alt={theme === "dark" ? "Morgan Background" : "Altria Background"}
          />
          <Image
            className={"h-full object-cover " + style.chrImg}
            width={907}
            height={764}
            src={`/themes/${theme}/char.png`}
            alt={theme === "dark" ? "Morgan" : "Altria"}
          />
        </section>
      </Link>
    </div>
  );
}
