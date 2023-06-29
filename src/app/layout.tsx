import "./globals.css";
import { Gamja_Flower } from "next/font/google";

const gamja = Gamja_Flower({ weight: "400", style: "normal", subsets: [] });

export const metadata = {
  title: "idea Tree",
  description: "Grow your ideas into trees",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={gamja.className}>{children}</body>
    </html>
  );
}
