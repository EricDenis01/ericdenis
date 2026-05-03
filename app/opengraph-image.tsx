import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Eric Denis — AI-augmented product manager at the intersection of music and technology";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#0a0a0a",
          color: "#f5f1e8",
          padding: "80px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          fontFamily: "serif",
        }}
      >
        {/* Top row — masthead */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 18,
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            color: "rgba(245,241,232,0.6)",
            fontFamily: "monospace",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <div style={{ width: 48, height: 1, background: "rgba(245,241,232,0.6)" }} />
            <span>Vol. 01 · Eric Denis</span>
          </div>
          <span>ericdenis.com</span>
        </div>

        {/* Big serif name */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 24,
          }}
        >
          <div
            style={{
              fontSize: 200,
              lineHeight: 0.92,
              letterSpacing: "-0.04em",
              fontWeight: 400,
              display: "flex",
            }}
          >
            Eric Denis<span style={{ color: "#e8765c" }}>.</span>
          </div>
          <div
            style={{
              fontSize: 36,
              fontStyle: "italic",
              lineHeight: 1.25,
              color: "rgba(245,241,232,0.7)",
              maxWidth: 980,
              display: "flex",
            }}
          >
            An AI-augmented product manager building at the intersection of music and technology.
          </div>
        </div>

        {/* Bottom row */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 16,
            letterSpacing: "0.25em",
            textTransform: "uppercase",
            color: "rgba(245,241,232,0.5)",
            fontFamily: "monospace",
            borderTop: "1px solid rgba(245,241,232,0.12)",
            paddingTop: 24,
          }}
        >
          <span>Barcelona — 41.38°N, 2.17°E</span>
          <span>10+ yrs in music tech · Open to work</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
