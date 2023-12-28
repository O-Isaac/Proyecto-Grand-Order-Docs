"use client"

import Image from "next/image"
import Link from "next/link"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export default function Hero () {
  const theme = useTheme()
  const [currentTheme, setCurrentTheme] = useState(null)


  useEffect(() => {
    setCurrentTheme(theme.theme === "system" ? "dark" : theme.theme === "light" ? 'light' : 'dark')
  }, [theme])

  return (
    <section className="relative w-full h-screen">
      <div className="flex items-center justify-center h-screen mb-4 bg-gray-200 rounded dark:bg-neutral-900">
        <svg
          className="w-20 h-20 text-white dark:text-neutral-300 animate-pulse"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 16 20"
        >
          <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
          <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
        </svg>
      </div>

      {currentTheme && (
        <Link className="absolute inset-0" href="/instalar">
          <Image src={`/themes/${currentTheme}/hero_background_up.jpg`} alt="Background Hero" fill className="z-0 object-cover transition-transform" priority/>
          <div className="dark:bg-black/10 animate-fade animate-once animate-ease-out duration-300 bg-white/10 backdrop-blur-sm absolute inset-0 transition-all"/>
          <Image src={`/themes/${currentTheme}/char.webp`} alt="Character Hero" fill className="lg:object-contain object-cover transition-transform pointer-events-none" priority />
        </Link>
      )}
    </section>
  )
}