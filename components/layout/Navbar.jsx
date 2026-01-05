"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from "next/image";

const Navbar = () => {
    const pathname = usePathname() || '/';
    const links = [
        { href: '/', label: 'Home' },
        { href: '/contact', label: 'Contact' },
        { href: '/about', label: 'About' },
    ];

    return (
       
               <nav className="bg-neutral-800">
      <div className="max-w-7xl mx-auto">
        <div className="flex h-16 items-center justify-between">
          
          
           <Link href="/" className="flex items-center">
            <Image
                src="/flipkart.png"
                alt="Logo"
                width={40}
                height={40}
            />
            </Link>

          
          <div className="flex space-x-6">
            {links.map((l) => {
              const isActive =
                l.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(l.href);

              return (
                <Link
                  key={l.href}
                  href={l.href}
                  className={`text-white hover:text-gray-200 ${
                    isActive ? "font-bold text-white" : ""
                  }`}
                >
                  {l.label}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </nav>                 
    );
};

export default Navbar;