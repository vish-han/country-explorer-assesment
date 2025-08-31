'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import {SearchBar} from '@/components/ui/SeachBar';

const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Explore', href: '/country' },
    { label: 'Wishlist', href: '/wishlist' },
];

export default function Navbar() {
    const pathname = usePathname();
    const [open, setOpen] = useState(false);

    const isActive = (href: string) => pathname === href;
    const isCountryPage = pathname === '/country';

    return (
        <>
            <header className="relative z-20 flex items-center justify-between px-6 md:px-10 py-6">
                <Link href="/" className="inline-flex items-center gap-3 group">
                    <div className="h-11 w-11 rounded-xl bg-gradient-to-br from-white/90 to-white/70 backdrop-blur-sm text-gray-900 grid place-items-center font-bold text-lg shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                        CE
                    </div>
                    <span className="hidden sm:block text-black/90 font-semibold text-lg tracking-wide">
                        Country Explorer
                    </span>
                </Link>

                {/* Conditionally render SearchBar on country page */}
                {isCountryPage && (
                    <div className="hidden md:block flex-1 max-w-md mx-8">
                        <SearchBar />
                    </div>
                )}

                <nav className="hidden md:flex items-center gap-8">
                    {navItems.map((item) => (
                        <Link
                            key={item.label}
                            href={item.href}
                            className={`relative px-4 py-2 transition-all duration-300 group ${
                                isActive(item.href) ? 'text-black' : 'text-black/80 hover:text-white'
                            }`}
                        >
                            <span className="relative z-10 font-medium tracking-wide">{item.label}</span>
                            <div className={`absolute inset-0 rounded-lg backdrop-blur-sm transition-all duration-300 transform scale-95 group-hover:scale-100 ${
                                isActive(item.href) ? 'bg-white/20 opacity-100' : 'bg-white/10 opacity-0 group-hover:opacity-100'
                            }`} />
                        </Link>
                    ))}
                </nav>

                <button
                    aria-label="Toggle menu"
                    className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-xl bg-white/70 backdrop-blur-sm text-gray-900 shadow-md active:scale-95 transition"
                    onClick={() => setOpen((v) => !v)}
                >
                    <span className={`block h-0.5 w-5 bg-current transition-all ${open ? 'translate-y-1.5 rotate-45' : '-translate-y-1.5'}`} />
                    <span className={`block h-0.5 w-5 bg-current transition-opacity ${open ? 'opacity-0' : 'opacity-100'}`} />
                    <span className={`block h-0.5 w-5 bg-current transition-all ${open ? '-translate-y-1.5 -rotate-45' : 'translate-y-1.5'}`} />
                </button>
            </header>

            {/* Mobile dropdown panel */}
            <div
                className={`md:hidden px-4 transition-[max-height,opacity] duration-300 overflow-hidden ${
                    open ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
                }`}
            >
                <div className="backdrop-blur-xl bg-white/80 rounded-2xl p-2 shadow-2xl ring-1 ring-gray-200">
                    {/* Show SearchBar in mobile menu when on country page */}
                    {isCountryPage && (
                        <div className="px-2 py-2 mb-2">
                            <SearchBar />
                        </div>
                    )}

                    {navItems.map((item) => (
                        <Link
                            key={item.label}
                            href={item.href}
                            className={`flex items-center justify-between px-4 py-3 rounded-xl transition ${
                                isActive(item.href) ? 'bg-white/50 text-gray-900' : 'hover:bg-white/40 text-gray-800'
                            }`}
                            onClick={() => setOpen(false)}
                        >
                            <span className="font-medium">{item.label}</span>
                            <svg className="w-4 h-4 opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </Link>
                    ))}
                </div>
            </div>

            {/* Mobile Bottom Navigation (floating) */}
            <div className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 bg-black/20 backdrop-blur-xl rounded-2xl px-2 py-2 flex items-center gap-2 text-black z-30 border border-white/10 shadow-2xl">
                {[
                    { href: '/', icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6', label: 'Home' },
                    { href: '/explore', icon: 'M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z', label: 'Explore' },
                ].map((item) => (
                    <Link
                        key={item.label}
                        href={item.href}
                        className={`p-3 rounded-xl hover:bg-white/20 transition-all duration-300 group ${
                            isActive(item.href) ? 'bg-white/25' : ''
                        }`}
                        aria-label={item.label}
                    >
                        <svg className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                        </svg>
                    </Link>
                ))}
            </div>
        </>
    );
}
