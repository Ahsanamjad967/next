'use client'
import Navbar from "@/components/Navbar";
import "@/app/globals.css";
import Footer from "@/components/Footer";
import Sidebar from "@/components/Sidebar";


export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    
      <div className="min-h-screen flex flex-col">
        <header className="">
          <nav>
            <Navbar />
          </nav>
        </header>
        <main className="flex-grow">
        <Sidebar/>
          {children}
        </main>
        <Footer/>
      </div>
    
  );
}
