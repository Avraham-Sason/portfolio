import { ImageResponse } from "next/og";

export const alt = "Avraham Sason - Full Stack Developer";
export const size = {
    width: 1200,
    height: 630,
};
export const contentType = "image/png";

export default async function Image() {
    return new ImageResponse(
        (
            <div
                style={{
                    background: "linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)",
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: 48,
                }}
            >
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: 16,
                    }}
                >
                    <div
                        style={{
                            fontSize: 72,
                            fontWeight: 700,
                            color: "#22d3ee",
                        }}
                    >
                        Avraham Sason
                    </div>
                    <div
                        style={{
                            fontSize: 36,
                            color: "#94a3b8",
                            letterSpacing: 2,
                        }}
                    >
                        Full Stack Developer
                    </div>
                    <div
                        style={{
                            display: "flex",
                            gap: 24,
                            marginTop: 32,
                            fontSize: 24,
                            color: "#64748b",
                        }}
                    >
                        <span>React</span>
                        <span>TypeScript</span>
                        <span>Node.js</span>
                        <span>Next.js</span>
                        <span>GCP</span>
                    </div>
                </div>
            </div>
        ),
        { ...size }
    );
}
