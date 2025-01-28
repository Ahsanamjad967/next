'use client';
import { usePathname } from "next/navigation";
import path from "path";
import { useEffect } from "react";


export default function Layout({children,}: {children: React.ReactNode}) {
    const pathname = usePathname();
    console.log(pathname);
    useEffect(() => {
        console.log('Pathname:', pathname); // Logs pathname when it changes
      }, [pathname]);
    return (
        <section>
            <div className="flex min-h-screen  ">
                <div className="flex-1" >
                {children}
                </div>
                <div className="flex-1 bg-black max-sm:hidden ">
                    <div className="flex flex-col items-center justify-center h-full text-white">
                        <h1 className="text-3xl font-bold">Welcome to the app</h1>
                        {pathname === path.resolve('/login') && <p className="text-lg">Please login to get started</p>}
                        <p className="text-lg">Please login or register to get started</p>
                    </div>
                </div>
            </div>
        </section>
    );
}