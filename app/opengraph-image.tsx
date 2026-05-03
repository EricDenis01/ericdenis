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
          background: "linear-gradient(135deg, #f6f1e2 0%, #f1e7d0 100%)",
          color: "#1a1410",
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
            color: "rgba(26,20,16,0.65)",
            fontFamily: "monospace",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <div style={{ width: 48, height: 1, background: "rgba(26,20,16,0.5)" }} />
            <span>AI-Augmented Senior PM</span>
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
            Eric Denis<span style={{ color: "#c8553d" }}>.</span>
          </div>
          <div
            style={{
              fontSize: 36,
              fontStyle: "italic",
              lineHeight: 1.25,
              color: "rgba(26,20,16,0.7)",
              maxWidth: 980,
              display: "flex",
            }}
          >
            An AI-augmented Senior PM. Ten years of SaaS, with a music-tech specialism and a 360° view from the deep tech to the stage.
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
            color: "rgba(26,20,16,0.55)",
            fontFamily: "monospace",
            borderTop: "1px solid rgba(26,20,16,0.18)",
            paddingTop: 24,
          }}
        >
          <span>Barcelona · Remote-first since 2016</span>
          <span>Open to work · ericdenis.com</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
