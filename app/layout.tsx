import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nuclon Dashboard",
  description: "Modern SaaS Dashboard",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-background">
      <body className="bg-background text-foreground font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
