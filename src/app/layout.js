import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/navbar";
import Gotop from "@/components/Gotop";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "小洁的demo",
  description: "by NextJS",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <reduxProvider > */}
        <Navbar />
        {children}
        <Gotop />
        {/* </reduxProvider> */}
      </body>
    </html>
  );
}
