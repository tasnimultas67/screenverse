import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const inter = Inter({
  subsets: ["latin"],
  weights: [400, 500, 600, 700],
  display: "swap",
});

export const metadata = {
  title: "ScreenVerse by Tasnimul Haque",
  description:
    "ScreenVerse is the ultimate destination for movie enthusiasts. Dive into a universe of films, where you can upload, explore, and share your favorite movies.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <Header></Header>
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
