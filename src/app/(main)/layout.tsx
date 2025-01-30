'use client'
import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";
import Sidebar2 from "@/components/Sidebar2";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen">

      <aside className=" bg-gray-900 text-white">
        <Sidebar2 className="" >
          <div></div>
        </Sidebar2>
        {/* <Sidebar /> */}
      </aside>

  
      <div className="flex flex-col flex-1">
        <header className="h-16 bg-gray-800 text-white flex items-center px-4">
          {/* <Navbar /> */}
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto p-4">{children}</main>
      </div>
    </div>
  );
}
