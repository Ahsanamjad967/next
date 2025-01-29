'use client';
import { usePathname } from "next/navigation";

export default function Layout({children,}: {children: React.ReactNode}) {
    const pathname = usePathname();
    return (
        <section>
            <div className="flex min-h-screen  ">
                <div className="flex-1" >
                {children}
                </div>
                <div className="flex-1 bg-black max-md:hidden ">
                    <div className="flex flex-col items-center justify-center h-full text-white">
                        <h1 className="text-3xl font-bold">Welcome to the app</h1>
                        {pathname === '/login' && <p className="text-lg">Please login to get started</p>}
                        {pathname === '/register' && <p className="text-lg">Please Register to get started</p>}
                    </div>
                </div>
            </div>
        </section>
    );
}