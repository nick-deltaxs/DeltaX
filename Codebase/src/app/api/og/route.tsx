import { ImageResponse } from "next/og";
import { NextRequest } from "next/server";

export const runtime = "edge";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const title = searchParams.get("title") || "DeltaX";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0A0C0B",
          backgroundImage:
            "radial-gradient(ellipse at center, rgba(26, 155, 191, 0.15) 0%, transparent 70%)",
        }}
      >
        <div
          style={{
            fontFamily: "Arial, sans-serif",
            fontSize: 80,
            color: "#FFFFFF",
            marginBottom: 16,
            fontWeight: "bold",
          }}
        >
          ΔX
        </div>
        <div
          style={{
            fontFamily: "Arial, sans-serif",
            fontSize: 40,
            color: "#E8E8E8",
            marginBottom: 40,
            fontWeight: "bold",
          }}
        >
          {title}
        </div>
        <div
          style={{
            fontSize: 20,
            color: "rgba(255,255,255,0.50)",
            fontFamily: "Arial, sans-serif",
          }}
        >
          thesx.co
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      headers: {
        "Cache-Control": "public, max-age=31536000, immutable",
      },
    }
  );
}
