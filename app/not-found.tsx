'use client';

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Home, Search, Globe, MapPin, ArrowLeft, Compass } from 'lucide-react';

const NotFoundPage = () => {
    const router = useRouter();

    return (
        <div className="min-h-screen bg-gradient-to-br from-sky-300 via-blue-200 to-teal-200 relative overflow-hidden">
            {/* Decorative background elements */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/20" />

            {/* Floating clouds */}
            <div className="absolute top-20 left-10 w-20 h-12 bg-white/30 rounded-full blur-sm animate-float"></div>
            <div className="absolute top-32 right-20 w-16 h-10 bg-white/40 rounded-full blur-sm animate-float-delayed"></div>
            <div className="absolute top-16 right-1/3 w-12 h-8 bg-white/25 rounded-full blur-sm animate-float-slow"></div>

            {/* Header */}
            <header className="relative z-10 p-4 sm:p-6">
                <div className="max-w-7xl mx-auto flex items-center justify-between">
                    <Link
                        href="/"
                        className="flex items-center gap-2 sm:gap-3 text-slate-700 hover:text-orange-600 transition-colors duration-300"
                    >
                        <div className="w-8 h-8 sm:w-10 sm:h-10 bg-orange-500 rounded-xl flex items-center justify-center">
                            <Compass className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                        </div>
                        <span className="text-xl sm:text-2xl font-bold">Country Explorer</span>
                    </Link>

                    <nav className="hidden md:flex items-center gap-8">
                        <Link href="/" className="text-slate-600 hover:text-orange-600 transition-colors font-medium">
                            Home
                        </Link>
                        <Link href="/explore" className="text-slate-600 hover:text-orange-600 transition-colors font-medium">
                            Explore
                        </Link>
                    </nav>
                </div>
            </header>

            {/* Main Content */}
            <div className="relative z-10 flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12">
                <div className="max-w-4xl mx-auto text-center">
                    {/* Large 404 with decoration */}
                    <div className="relative mb-8">
                        <h1 className="text-8xl sm:text-9xl lg:text-[12rem] font-bold text-slate-800/10 select-none">
                            404
                        </h1>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="relative">
                                <Globe className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 text-orange-500 animate-spin-slow" />
                                <MapPin className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 text-orange-600" />
                            </div>
                        </div>
                    </div>

                    {/* Error message */}
                    <div className="mb-8 space-y-4">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 mb-4">
                            Oops! <span className="text-orange-500">Destination</span> Not Found
                        </h2>
                        <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
                            It looks like this country doesn&#39;t exist on our map, or you&#39;ve wandered off the beaten path.
                            Let&#39;s get you back to exploring amazing destinations!
                        </p>
                    </div>

                    {/* Action buttons */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-12">
                        <Link
                            href="/"
                            className="group flex items-center gap-3 bg-gradient-to-r from-orange-400 to-orange-500 hover:from-orange-500 hover:to-orange-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-semibold text-base sm:text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95 w-full sm:w-auto justify-center"
                        >
                            <Home className="w-5 h-5 sm:w-6 sm:h-6 group-hover:scale-110 transition-transform" />
                            Go Back Home
                        </Link>

                        <Link
                            href="/country"
                            className="group flex items-center gap-3 bg-white/90 backdrop-blur-md border border-slate-200 hover:border-orange-300 text-slate-700 hover:text-orange-600 px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-semibold text-base sm:text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95 w-full sm:w-auto justify-center"
                        >
                            <Search className="w-5 h-5 sm:w-6 sm:h-6 group-hover:scale-110 transition-transform" />
                            Explore Countries
                        </Link>
                    </div>

                    {/* Popular suggestions */}
                    <div className="bg-white/70 backdrop-blur-xl rounded-2xl sm:rounded-3xl border border-white/50 p-6 sm:p-8 max-w-2xl mx-auto">
                        <h3 className="text-xl sm:text-2xl font-bold text-slate-800 mb-4 flex items-center justify-center gap-2">
                            <Compass className="w-6 h-6 text-orange-500" />
                            Popular Destinations
                        </h3>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
                            {['United States', 'Japan', 'Germany', 'Brazil', 'India', 'Australia', 'France', 'Canada'].map((country) => (
                                <Link
                                    key={country}
                                    href={`/countries/${encodeURIComponent(country)}`}
                                    className="group bg-gradient-to-br from-orange-50 to-red-50 hover:from-orange-100 hover:to-red-100 border border-orange-200/50 hover:border-orange-300 rounded-lg sm:rounded-xl p-3 sm:p-4 text-center transition-all duration-300 hover:scale-105 hover:shadow-md"
                                >
                                    <span className="text-sm sm:text-base font-medium text-slate-700 group-hover:text-orange-700">
                                        {country}
                                    </span>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Decorative landscape elements */}
            <div className="absolute bottom-0 left-0 right-0 h-32 sm:h-40 bg-gradient-to-t from-green-400/30 via-green-300/20 to-transparent">
                {/* Hills/mountains silhouette */}
                <div className="absolute bottom-0 left-0 w-full h-full">
                    <svg viewBox="0 0 1200 200" className="w-full h-full">
                        <path
                            d="M0,200 L0,120 Q150,80 300,100 T600,90 T900,110 T1200,95 L1200,200 Z"
                            fill="rgba(34, 197, 94, 0.2)"
                        />
                        <path
                            d="M0,200 L0,150 Q200,120 400,130 T800,125 T1200,140 L1200,200 Z"
                            fill="rgba(34, 197, 94, 0.3)"
                        />
                    </svg>
                </div>

                {/* Trees */}
                <div className="absolute bottom-4 left-8 w-6 h-8 sm:w-8 sm:h-10 bg-green-600/40 rounded-full"></div>
                <div className="absolute bottom-2 left-16 w-4 h-6 sm:w-6 sm:h-8 bg-green-700/40 rounded-full"></div>
                <div className="absolute bottom-6 right-12 w-8 h-10 sm:w-10 sm:h-12 bg-green-600/40 rounded-full"></div>
                <div className="absolute bottom-3 right-24 w-5 h-7 sm:w-7 sm:h-9 bg-green-700/40 rounded-full"></div>
            </div>

        </div>
    );
};

export default NotFoundPage;
