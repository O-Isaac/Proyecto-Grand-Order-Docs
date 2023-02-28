import { useEffect, useState } from "react";
import Link from "next/link";
import { useTheme } from "nextra-theme-docs";

export default function Hero() {
  const { resolvedTheme } = useTheme();
  const [theme, setTheme] = useState("dark");

  const stylesBackground = {
    backgroundImage: `url(/themes/${theme}/hero_background_up.jpg)`,
    backgroundSize: "cover",
  };

  useEffect(() => {
    if (resolvedTheme) setTheme(resolvedTheme);
  }, [resolvedTheme]);

  return (
    <div style={stylesBackground} className="grid place-items-center h-[800px]">
      <Link href="/instalar">
        <section className="h-auto w-auto grid place-items-center">
          <img
            src={`/themes/${theme}/char.png`}
            alt={theme === "dark" ? "Morgan" : "Altria"}
          />
        </section>
      </Link>
    </div>
  );
}
