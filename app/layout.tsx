import type { Metadata } from "next";

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
    <html lang="en">
      <head>
        <style>{`
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          
          :root {
            --background: #ffffff;
            --foreground: #1a1a1a;
            --primary: #1f2937;
            --primary-foreground: #f8fafc;
            --secondary: #f3f4f6;
            --secondary-foreground: #1f2937;
            --accent: #f3f4f6;
            --accent-foreground: #1f2937;
            --muted: #f3f4f6;
            --muted-foreground: #6b7280;
            --border: #e5e7eb;
            --radius: 0.5rem;
          }
          
          html {
            background-color: var(--background);
          }
          
          body {
            font-family: system-ui, -apple-system, sans-serif;
            background-color: var(--background);
            color: var(--foreground);
            line-height: 1.6;
            font-size: 16px;
          }
          
          button, input, textarea, select {
            font-family: inherit;
            font-size: inherit;
          }
        `}</style>
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
