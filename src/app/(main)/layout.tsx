import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import "@/app/globals.css";
import Footer from "@/components/Footer";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    
      <div className="min-h-screen flex flex-col">
        <header className="mb-5">
          <nav>
            <Navbar />
          </nav>
        </header>
        <main className="flex-grow">
          {children}
        </main>
        <Footer/>
      </div>
    
  );
}
