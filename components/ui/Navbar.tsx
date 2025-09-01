'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Search, Globe2, Menu, X, Home, MapPin } from 'lucide-react';
import {SearchBar} from '@/components/ui/SeachBar';

const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Explore', href: '/country' },
];

export default function Navbar() {
    const pathname = usePathname();
    const [open, setOpen] = useState(false);
    const [searchModalOpen, setSearchModalOpen] = useState(false);

    const isActive = (href: string) => pathname === href;
    // Fixed: Check if pathname starts with '/countries/' to catch dynamic routes
    const isCountryPage = pathname === '/country' || pathname.startsWith('/countries/');

    return (
        <>
            <header className="relative z-20 flex items-center justify-between px-6 md:px-10 py-6">
                <Link href="/" className="inline-flex items-center gap-3 group">
                    <div className="h-11 w-11 rounded-xl bg-gradient-to-br from-white/90 to-white/70 backdrop-blur-sm text-gray-900 grid place-items-center font-bold text-lg shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                        <Globe2 className="w-6 h-6 text-orange-500 group-hover:text-orange-600 transition-colors duration-300" />
                    </div>
                    <span className="text-black/90 font-bold text-lg tracking-wide group-hover:text-orange-500 transition-colors duration-300">
                        Country Explorer
                    </span>
                </Link>

                {/* Conditionally render SearchBar on country page - centered and wider */}
                {isCountryPage && (
                    <div className="hidden md:block flex-1 max-w-2xl mx-auto px-8">
                        <SearchBar />
                    </div>
                )}

                <nav className="hidden md:flex items-center gap-4">
                    {navItems.map((item) => (
                        <Link
                            key={item.label}
                            href={item.href}
                            className={`relative px-4 py-2 transition-all duration-300 group ${
                                isActive(item.href) ? 'text-black' : 'text-black/80 hover:text-orange-500'
                            }`}
                        >
                            <span className="relative z-10 font-medium tracking-wide">{item.label}</span>
                            <div className={`absolute inset-0 rounded-lg backdrop-blur-sm transition-all duration-300 transform scale-95 group-hover:scale-100 ${
                                isActive(item.href) ? 'bg-white/20 opacity-100' : 'bg-white/10 opacity-0 group-hover:opacity-100'
                            }`} />
                        </Link>
                    ))}

                    {/* Search Modal Trigger */}
                    <button
                        onClick={() => setSearchModalOpen(true)}
                        className="relative px-4 py-2 transition-all duration-300 group text-black/80 hover:text-orange-500"
                        aria-label="Open search"
                    >
                        <Search className="w-5 h-5" />
                    </button>
                </nav>

                {/* Fixed Hamburger Menu Button */}
                <button
                    aria-label="Toggle menu"
                    className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-xl bg-white/70 backdrop-blur-sm text-gray-900 shadow-md active:scale-95 transition-all duration-200"
                    onClick={() => setOpen((v) => !v)}
                >
                    {open ? (
                        <X className="w-5 h-5 transition-transform duration-200" />
                    ) : (
                        <Menu className="w-5 h-5 transition-transform duration-200" />
                    )}
                </button>
            </header>

            {/* Mobile dropdown panel */}
            <div
                className={`md:hidden px-4 transition-[max-height,opacity] duration-300 overflow-hidden ${
                    open ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
                }`}
            >
                <div className="backdrop-blur-xl bg-white/80 rounded-2xl p-2 shadow-2xl ring-1 ring-gray-200">
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

            {/* Enhanced Mobile Bottom Navigation with Lucide Icons */}
            <div className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 bg-black/20 backdrop-blur-xl rounded-2xl px-4 py-2 flex items-center gap-2 text-black z-30 border border-white/10 shadow-2xl">
                {/* Navigation Items */}
                <div className="flex items-center gap-1">
                    <Link
                        href="/"
                        className={`p-3 rounded-xl hover:bg-white/20 transition-all duration-300 group ${
                            isActive('/') ? 'bg-white/25' : ''
                        }`}
                        aria-label="Home"
                    >
                        <Home className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                    </Link>

                    <Link
                        href="/country"
                        className={`p-3 rounded-xl hover:bg-white/20 transition-all duration-300 group ${
                            isActive('/country') ? 'bg-white/25' : ''
                        }`}
                        aria-label="Explore"
                    >
                        <Globe2 className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                    </Link>

                    {/* Search Modal Trigger for Mobile */}
                    <button
                        onClick={() => setSearchModalOpen(true)}
                        className="p-3 rounded-xl hover:bg-white/20 transition-all duration-300 group"
                        aria-label="Open search"
                    >
                        <Search className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                    </button>
                </div>
            </div>

            {/* Search Modal */}
            {searchModalOpen && (
                <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-start justify-center pt-20 p-4">
                    <div className="w-full max-w-2xl mx-auto">
                        <div className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20 p-6">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="text-lg font-semibold text-gray-900">Search Countries</h3>
                                <button
                                    onClick={() => setSearchModalOpen(false)}
                                    className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                                    aria-label="Close search"
                                >
                                    <X className="w-5 h-5" />
                                </button>
                            </div>
                            <SearchBar />
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
