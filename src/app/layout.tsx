import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Decode This — Think. Decode. Dominate.",
  description: "Decode emoji puzzles, challenge your friends and climb the leaderboard. Free to play.",
  openGraph: { title: "Decode This", description: "Think. Decode. Dominate.", type: "website" },
  twitter: { card: "summary_large_image", title: "Decode This", description: "Can you decode them all?" }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
