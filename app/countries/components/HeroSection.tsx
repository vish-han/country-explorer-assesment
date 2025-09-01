'use client'
import React, { useEffect, useRef } from 'react';
import { Country } from "@/types/CountryTypes";

const CountryHeroSection = ({ countryData }: { countryData: Country }) => {
    const mapRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!mapRef.current) return;

        // Create the OpenStreetMap iframe
        const mapUrl = `https://www.openstreetmap.org/export/embed.html?bbox=${countryData.latlng[1]-2},${countryData.latlng[0]-2},${countryData.latlng[1]+2},${countryData.latlng[0]+2}&layer=mapnik&marker=${countryData.latlng[0]},${countryData.latlng[1]}`;

        const iframe = document.createElement('iframe');
        iframe.src = mapUrl;
        iframe.width = '100%';
        iframe.height = '100%';
        iframe.style.border = '0';
        iframe.style.borderRadius = '8px';

        mapRef.current.appendChild(iframe);

        return () => {
            if (mapRef.current) {
                mapRef.current.innerHTML = '';
            }
        };
    }, [countryData.latlng]);

    return (
        <div className="mb-12">
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl overflow-hidden border border-white/20">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                    {/* Flag Section - Original flag appearance */}
                    <div className="relative h-64 sm:h-72 lg:h-80 overflow-hidden">
                        {/* Desktop view - Full flag display */}
                        <div className="hidden lg:block w-full h-full relative">
                            <img
                                src={countryData.flags.png}
                                alt={countryData.flags.alt || `Flag of ${countryData.name.common}`}
                                className="w-full h-full object-cover object-center"
                            />
                        </div>

                        {/* Mobile view - Centered flag with neutral background */}
                        <div className="block lg:hidden w-full h-full relative bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4">
                            <img
                                src={countryData.flags.png}
                                alt={countryData.flags.alt || `Flag of ${countryData.name.common}`}
                                className="max-w-full max-h-full object-contain shadow-lg rounded-lg border-2 border-white/30"
                                style={{
                                    minWidth: '240px',
                                    minHeight: '144px',
                                    maxWidth: '90%',
                                    maxHeight: '70%'
                                }}
                            />
                        </div>

                        {/* Subtle gradient overlay to ensure text readability */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                        {/* Text overlay with orange styling */}
                        <div className="absolute bottom-4 left-4 right-4 text-white drop-shadow-lg">
                            <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-1 sm:mb-2 leading-tight text-orange-100">
                                {countryData.name.common}
                            </h1>
                            <p className="text-sm sm:text-base lg:text-lg xl:text-xl opacity-90 mb-2 sm:mb-3 text-orange-200">
                                {countryData.name.official}
                            </p>
                            <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                                <span className="px-2 py-1 sm:px-3 bg-orange-500 backdrop-blur-sm rounded-full text-xs sm:text-sm text-white font-medium">
                                    {countryData.region}
                                </span>
                                {countryData.subregion && (
                                    <span className="px-2 py-1 sm:px-3 bg-orange-400 backdrop-blur-sm rounded-full text-xs sm:text-sm text-white font-medium">
                                        {countryData.subregion}
                                    </span>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* OpenStreetMap Section */}
                    <div className="relative h-64 sm:h-72 lg:h-80 bg-slate-100">
                        <div ref={mapRef} className="w-full h-full" />

                        {/* Coordinates display with orange text */}
                        <div className="absolute top-2 right-2 sm:top-4 sm:right-4 bg-white/95 backdrop-blur-sm rounded-lg px-2 py-1.5 sm:px-3 sm:py-2 shadow-lg z-10">
                            <div className="text-xs text-orange-600 mb-0.5 font-medium">Coordinates</div>
                            <div className="text-xs sm:text-sm font-bold text-slate-800">
                                {countryData.latlng[0].toFixed(2)}°, {countryData.latlng[1].toFixed(2)}°
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CountryHeroSection;
