import type { Metadata } from "next";
import { Providers } from "./components/Providers";
import "./globals.css";

export const metadata: Metadata = {
  title: "PosePerfect AI - Professional Photo Guidance",
  description: "Real-time AI-driven guidance on photography posing, lighting, and composition",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
