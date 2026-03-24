import { ImageResponse } from "next/og";
import { NextRequest } from "next/server";

export const runtime = "edge";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const title = searchParams.get("title")?.slice(0, 100) || "Four engines. One system.";

  return new ImageResponse(
    (
      <div style={{
        width: "100%", height: "100%", display: "flex", flexDirection: "column",
        alignItems: "center", justifyContent: "center", backgroundColor: "#0A0A0B",
        fontFamily: "sans-serif",
      }}>
        <div style={{ fontSize: 80, color: "#FFFFFF", marginBottom: 20 }}>ΔX</div>
        <div style={{ fontSize: 40, color: "#FFFFFF", textAlign: "center", maxWidth: 800, lineHeight: 1.2 }}>
          {title}
        </div>
        <div style={{ fontSize: 20, color: "#f0b429", marginTop: 30 }}>thesx.co</div>
      </div>
    ),
    { width: 1200, height: 630, headers: { "Cache-Control": "public, max-age=3600" } }
  );
}
