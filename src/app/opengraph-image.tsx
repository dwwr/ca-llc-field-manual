import { ImageResponse } from "next/og";
import { COPY } from "@/lib/copy";

export const alt = COPY.site.ogAlt;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#f4eee3",
          color: "#35291d",
          padding: "72px 80px",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 22,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "#c45c2a",
            fontWeight: 600,
          }}
        >
          California · 2026
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 20,
            maxWidth: 960,
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 72,
              lineHeight: 1.05,
              fontWeight: 600,
              letterSpacing: "-0.03em",
            }}
          >
            CA LLC Field Manual
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 32,
              lineHeight: 1.35,
              color: "#6b5a48",
            }}
          >
            for software engineers
          </div>
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 24,
            color: "#6b5a48",
          }}
        >
          Costs, taxes, and whether to bother
        </div>
      </div>
    ),
    { ...size }
  );
}
