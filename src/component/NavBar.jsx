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
       
                <div>                                     
                    <div>
                        {links.map((l) => {
                            const isActive = l.href === '/' ? pathname === '/' : pathname.startsWith(l.href);
                            return (
                                <Link
                                    key={l.href}
                                    href={l.href}
                                    className={`${isActive ? 'font-bold text-gray-900' : ''}`}
                                >
                                    {l.label}
                                </Link>
                            );
                        })}
                    </div>
                </div>
       
    );
};

export default NavBar;