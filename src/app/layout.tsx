import "@/styles/globals.css";
import Navigation from "@/components/Navbar";
import { GeistSans } from 'geist/font'



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
    <html lang="en" className={`${GeistSans.variable}`}>
      <body className= "pb-8 justify-center items-center overflow-auto">
        <Navigation />
        {children}
        </body>
    </html>
  );
}
