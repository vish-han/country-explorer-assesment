'use client'
import Link from 'next/link';
import { SearchBar } from '@/components/ui/SeachBar';
import { Inter, Playfair_Display } from 'next/font/google';
import { useState, useEffect } from 'react';

// Load fonts with next/font for performance and no FOUT
const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
    display: 'swap',
});
const playfair = Playfair_Display({
    subsets: ['latin'],
    variable: '--font-playfair',
    display: 'swap',
});
export default function HomePage() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <div className={`${inter.variable} ${playfair.variable} min-h-screen relative overflow-hidden`}>
            {/* Animated Background Layers */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-20000 hover:scale-105"
                style={{ backgroundImage: "url('/img/background_v2.png')" }}
                aria-hidden="true"
            />

            {/* Glassmorphism Header */}
            <header className="relative z-20 flex items-center justify-between px-6 md:px-10 py-6">
                <Link href="/" className="inline-flex items-center gap-3 group">
                    <div className="h-11 w-11 rounded-xl bg-gradient-to-br from-white/90 to-white/70 backdrop-blur-sm text-gray-900 grid place-items-center font-bold text-lg shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                        CE
                    </div>
                    <span className="hidden sm:block text-black/90 font-semibold text-lg tracking-wide">Country Explorer</span>
                </Link>
                <nav className="hidden md:flex items-center gap-8">
                    {['Home', 'Countries', 'Explore', 'About'].map((item, index) => (
                        <Link
                            key={item}
                            href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                            className="relative px-4 py-2 text-black/80 hover:text-white transition-all duration-300 group"
                        >
                            <span className="relative z-10 font-medium tracking-wide">{item}</span>
                            <div className="absolute inset-0 bg-white/10 rounded-lg backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-95 group-hover:scale-100" />
                        </Link>
                    ))}
                </nav>
            </header>

            {/* Enhanced Hero Section - Positioned Above the Hut */}
            <main className="relative z-10 flex flex-col items-center justify-start pt-2 md:pt-4 px-6 md:px-8">
                <div className="text-center max-w-6xl">
                    {/* Main Title with Enhanced Animation and Highlighting */}
                    <div className="mb-4">
                        <h1 className={`
                            font-[var(--font-playfair)] font-bold leading-[1.1] tracking-tight
                            text-3xl md:text-4xl lg:text-5xl xl:text-6xl
                            ${mounted ? 'animate-fade-in-up' : 'opacity-0'}
                        `}>
                            <span className="inline-block text-gray-900 font-extrabold">
                                Inspiring{' '}
                                <span className="relative">
                                    <span className="relative z-10 bg-gradient-to-r from-orange-400 to-orange-500 bg-clip-text text-transparent">
                                        Explorations
                                    </span>
                                    <span className="absolute inset-0 bg-gradient-to-r from-orange-200 to-orange-300 blur-sm opacity-50"></span>
                                </span>
                                {' '}and
                            </span>
                            <br />
                            <span className="inline-block text-gray-900 font-extrabold">
                                Endless{' '}
                                <span className="relative">
                                    <span className="relative z-10 bg-gradient-to-r from-orange-400 to-orange-500 bg-clip-text text-transparent">
                                        Possibilities
                                    </span>
                                    <span className="absolute inset-0 bg-gradient-to-r from-orange-200 to-orange-300 blur-sm opacity-50"></span>
                                </span>
                            </span>
                        </h1>

                        {/* Decorative Elements */}
                        <div className="flex justify-center mt-3 mb-4">
                            <div className="h-1 w-24 bg-gradient-to-r from-transparent via-orange-400/60 to-transparent rounded-full" />
                        </div>
                    </div>

                    {/* Enhanced Subtitle */}
                    <p className={`
                        font-[var(--font-inter)] text-base md:text-lg lg:text-xl 
                        leading-relaxed tracking-wide text-gray-700 max-w-3xl mx-auto mb-6
                        ${mounted ? 'animate-fade-in-up' : 'opacity-0'}
                    `}
                       style={{ animationDelay: '0.2s' }}
                    >
                        Discover detailed information about every nation worldwide with
                        <span className="font-semibold text-gray-900"> Country Explorer</span>, where your wanderlust can be transformed into memorable journeys.
                    </p>

                    {/* Enhanced Search Section */}
                    <div className={`
                        max-w-2xl mx-auto mb-4
                        ${mounted ? 'animate-fade-in-up' : 'opacity-0'}
                    `}
                         style={{ animationDelay: '0.4s' }}
                    >
                        <div className="relative group">
                            {/* Search Container with Enhanced Styling */}
                            <div className="backdrop-blur-xl bg-white/90 rounded-2xl p-3 shadow-2xl ring-1 ring-gray-200 group-hover:ring-orange-300 transition-all duration-300 group-hover:shadow-3xl">
                                <SearchBar
                                    className="w-full"
                                    placeholder="Search countries, capitals, regions..."
                                />
                            </div>

                            {/* Enhanced Glowing Effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-orange-400/30 via-orange-500/30 to-orange-400/30 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500 -z-10" />
                        </div>
                    </div>
                </div>
            </main>

            {/* Enhanced Mobile Navigation */}
            <div className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 bg-black/20 backdrop-blur-xl rounded-2xl px-2 py-2 flex items-center gap-2 text-black z-30 border border-white/10 shadow-2xl">
                {[
                    { href: '/', icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6', label: 'Home' },
                    { href: '/countries', icon: 'M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z', label: 'Countries' },
                    { href: '/explore', icon: 'M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z', label: 'Explore' },
                    { href: '/about', icon: 'M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z', label: 'About' }
                ].map((item, index) => (
                    <Link
                        key={item.label}
                        href={item.href}
                        className="p-3 rounded-xl hover:bg-white/20 transition-all duration-300 group"
                        aria-label={item.label}
                    >
                        <svg className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                        </svg>
                    </Link>
                ))}
            </div>

            {/* Floating Elements */}
            <div className="absolute top-20 left-10 w-3 h-3 bg-orange-300/40 rounded-full animate-bounce" style={{ animationDelay: '1s' }} />
            <div className="absolute top-40 right-20 w-2 h-2 bg-orange-400/50 rounded-full animate-bounce" style={{ animationDelay: '1.5s' }} />
            <div className="absolute bottom-32 left-20 w-4 h-4 bg-orange-300/30 rounded-full animate-bounce" style={{ animationDelay: '2s' }} />
        </div>
    );
}

/* Enhanced Components */
function EnhancedStat({ label, value, icon }: { label: string; value: string; icon: string }) {
    return (
        <div className="text-center group cursor-pointer">
            <div className="mb-2 text-3xl group-hover:scale-110 transition-transform duration-300">
                {icon}
            </div>
            <div className="text-3xl md:text-4xl font-bold text-white mb-1 group-hover:text-cyan-200 transition-colors duration-300">
                {value}
            </div>
            <div className="text-sm uppercase tracking-widest text-white/70 font-medium group-hover:text-white/90 transition-colors duration-300">
                {label}
            </div>
        </div>
    );
}

function GradientDivider() {
    return (
        <div className="w-px h-16 bg-gradient-to-b from-transparent via-white/40 to-transparent" aria-hidden="true" />
    );
}
