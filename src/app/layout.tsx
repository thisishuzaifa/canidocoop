import "@/styles/globals.css";
import Navigation from "@/components/Navbar";

import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Can I do Co-op?",
  description: "Web-app to determine your co-op eligibility",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`font-sans ${inter.variable} bg-white`}>
        <Navigation />
        {children}
        </body>
    </html>
  );
}
