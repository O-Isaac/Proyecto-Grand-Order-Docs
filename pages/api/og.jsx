import { ImageResponse } from "@vercel/og";

export const config = {
  runtime: "edge",
};

export default function handler(req) {
  try {
    const { searchParams } = new URL(req.url);
    const hasTitle = searchParams.has("title");
    const getRandom = (arr) => arr[Math.floor(Math.random() * arr.length)];
    const isLight = getRandom(["dark", "light"]) === "light";

    const options = {
      width: 1190,
      height: 340,
    };

    if (isLight) {
      return new ImageResponse(
        (
          <div
            style={{ backgroundColor: "transparent" }}
            tw="flex flex-col justify-center items-center w-full h-full"
          >
            <div tw="flex bg-slate-100 w-[1000px] h-[150px] rounded-[10px] border border-slate-300 items-center p-8 overflow-hidden">
              <div tw="flex flex-col justify-center">
                <span tw="text-2xl">Proyecto Grand Order</span>
                <span tw="text-xl text-gray-700">
                  {hasTitle ? searchParams.get("title") : "¡Juega Fate/Grand Order en español!"}
                </span>
              </div>
              <div tw="flex">
                <img
                  tw="mt-40"
                  src={`https://proyectograndorder.es/themes/light/char.png`}
                />
              </div>
            </div>
          </div>
        ),
        options
      );
    }
    
    return new ImageResponse(
      (
        <div
          style={{ backgroundColor: "transparent" }}
          tw="flex flex-col justify-center items-center w-full h-full"
        >
          <div
            style={{
              backgroundColor: "rgb(20,20,20)",
              border: "1px solid rgba(255,255,255,0.6)",
            }}
            tw="flex w-[1000px] h-[150px] rounded-[10px] items-center p-8 overflow-hidden"
          >
            <div tw="flex flex-col justify-center">
              <span tw="text-2xl text-white">Proyecto Grand Order</span>
              <span tw="text-xl text-gray-300">
                {hasTitle ? searchParams.get("title") : "¡Juega Fate/Grand Order en español!"}
              </span>
            </div>
            <div tw="flex">
              <img
                tw="mt-40"
                src={`https://proyectograndorder.es/themes/dark/char.png`}
              />
            </div>
          </div>
        </div>
      ),
      options
    );
  } catch (error) {
    return new Response(`Failed to generate the image`, {
      status: 500,
      error: error.message,
    });
  }
}
