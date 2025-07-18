import type { Metadata } from "next";
import "@/scss/style.scss";

export const metadata: Metadata = {
  title: "DarkRiff Station",
  description: "A web radio station for rock and metal music lovers!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
