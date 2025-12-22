"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NavBar = () => {
    const pathname = usePathname() || '/';
    const links = [
        { href: '/', label: 'Home' },
        { href: '/contact', label: 'Contact' },
        { href: '/about', label: 'About' },
    ];

    return (
        <nav className="bg-white shadow">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="flex h-16 items-center justify-between">                    
                    <div className="flex items-center">
                        <Link href="/" className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-sky-500 flex items-center justify-center text-white font-semibold">G</div>
                            <span className="sr-only">Go to home</span>
                        </Link>
                    </div>
                    
                    <div className="flex items-center space-x-6">
                        {links.map((l) => {
                            const isActive = l.href === '/' ? pathname === '/' : pathname.startsWith(l.href);
                            return (
                                <Link
                                    key={l.href}
                                    href={l.href}
                                    className={`text-gray-600 hover:text-gray-900 ${isActive ? 'font-bold text-gray-900' : ''}`}
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

export default NavBar;