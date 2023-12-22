import { ImageResponse } from "@vercel/og";
import OGImage from "@/components/Api/Og/image";

export const config = {
  runtime: "edge",
};

export default function handler(req) {
  const { searchParams } = new URL(req.url);

  try {
    const image = new ImageResponse(<OGImage searchParams={searchParams} />, {
      width: 1020,
      height: 170
    })

    return image
  } catch (error) {
    return new Response(`Failed to generate the image`, {
      status: 500,
      error: error.message,
    });
  }
}
