import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Kipy — RENTRI Facile. Zero scartoffie.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#1E3A5F",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "sans-serif",
          padding: "80px",
        }}
      >
        {/* Logo badge */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            marginBottom: "48px",
          }}
        >
          <div
            style={{
              width: "64px",
              height: "64px",
              borderRadius: "16px",
              background: "#2E7D5E",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span style={{ color: "white", fontSize: "32px", fontWeight: 800 }}>K</span>
          </div>
          <span style={{ color: "white", fontSize: "48px", fontWeight: 700, letterSpacing: "-1px" }}>
            kipy
          </span>
        </div>

        {/* Headline */}
        <div
          style={{
            color: "white",
            fontSize: "64px",
            fontWeight: 800,
            textAlign: "center",
            lineHeight: 1.1,
            marginBottom: "24px",
            letterSpacing: "-2px",
          }}
        >
          Il RENTRI diventa
          <br />
          <span style={{ color: "#6ec4a0" }}>finalmente facile.</span>
        </div>

        {/* Subtext */}
        <div
          style={{
            color: "rgba(255,255,255,0.7)",
            fontSize: "28px",
            textAlign: "center",
            marginBottom: "48px",
          }}
        >
          FIR in 1 click · Firma con FaceID · 149€/anno
        </div>

        {/* Badge */}
        <div
          style={{
            background: "#2E7D5E",
            color: "white",
            fontSize: "20px",
            fontWeight: 600,
            padding: "12px 28px",
            borderRadius: "100px",
          }}
        >
          100% conforme D.Lgs. 116/2020
        </div>
      </div>
    ),
    { ...size }
  );
}
