import random from "utils/random";
import { getHostname } from "utils/domain";

export default function OGImage ({ searchParams }) {
    const hasTitle = searchParams.has("title");
    const characterTheme = random(["light", "dark"])

    return (
        <div style={{ backgroundColor: "transparent" }} tw="flex flex-col justify-center items-center w-full h-full" >
          <div tw="flex bg-slate-100 w-[1000px] h-[150px] rounded-[10px] border border-slate-300 items-center p-8 overflow-hidden">
            <div tw="flex flex-col justify-center">
              <span tw="text-2xl">Proyecto Grand Order</span>
              <span tw="text-xl text-gray-700">
                {hasTitle ? searchParams.get("title") : "¡Juega Fate/Grand Order en español!"}
              </span>
            </div>
            <div tw="flex">
              <img
                tw="mt-65"
                src={`https://${getHostname()}/themes/${characterTheme}/og.png`}
              />
            </div>
        </div>
      </div>
    )
}