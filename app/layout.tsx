import { Space_Grotesk } from "next/font/google";
import type { Metadata, Viewport } from "next";
import "@/scss/style.scss";

export const metadata: Metadata = {
  title: "DarkRiff Station",
  description: "A web radio station for rock and metal music lovers!",
};

export const viewport: Viewport = {
  themeColor: "hsl(36, 70%, 85%)",
}

const space_grotesk = Space_Grotesk({
  subsets: ["latin"],
  fallback: ['system-ui', 'arial'],
  variable: '--font-space-grotesk',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={space_grotesk.variable}>
      <body>
        {children}
      </body>
    </html>
  );
}
