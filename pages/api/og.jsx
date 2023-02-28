import { ImageResponse } from "@vercel/og";

export const config = {
  runtime: "edge",
};

/**
 * 
 * @param {import("next/server").NextRequest} req 
 * @returns 
 */
export default function (req) {
  const searchParams = new URLSearchParams(req.nextUrl.search);
  const text = searchParams.get("text")

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          backgroundColor: "#fff",
          fontSize: 40,
          letterSpacing: -2,
          fontWeight: 800,
          backgroundImage: "url(https://i.imgur.com/CijJGgX.png)",
        }}
      >
        <div
          style={{
            marginTop: -40,
            marginLeft: 60,
            backgroundImage: 'linear-gradient(90deg, rgb(0, 124, 240), rgb(0, 223, 216))',
            backgroundClip: 'text',
            '-webkit-background-clip': 'text',
            color: 'transparent',
          }}
        >
          {text ?? "Acerca del proyecto"}
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 600,
    }
  );
}
