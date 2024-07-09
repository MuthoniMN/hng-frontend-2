import { Archivo } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/Navbar";
import Footer from "@/components/Footer";

const archivo = Archivo({ subsets: ["latin"] });

export const metadata = {
  title: "Furhom E-commerce website",
  description: "An online furniture store",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={archivo.className}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
