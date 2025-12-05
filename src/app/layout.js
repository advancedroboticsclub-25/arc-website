import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata = {
  title: "Technorian — Redemption of the Throne",
  description: "Flagship tech event experience.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="page-shell">
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
