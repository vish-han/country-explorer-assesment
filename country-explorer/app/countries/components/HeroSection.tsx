import React from 'react';
import {Country} from "@/types/CountryTypes";

const CountryHeroSection = ({ countryData }:{countryData:Country}) => {
    return (
        <div className="mb-12">
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl overflow-hidden border border-white/20">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                    {/* Flag Section */}
                    <div className="relative h-80 overflow-hidden">
                        <img
                            src={countryData.flags.png}
                            alt={countryData.flags.alt || `Flag of ${countryData.name.common}`}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                        <div className="absolute bottom-6 left-6 text-white">
                            <h1 className="text-4xl lg:text-5xl font-bold mb-2">{countryData.name.common}</h1>
                            <p className="text-lg lg:text-xl opacity-90">{countryData.name.official}</p>
                            <div className="flex items-center mt-3 space-x-4">
                <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm">
                  {countryData.region}
                </span>
                                <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm">
                  {countryData.subregion}
                </span>
                            </div>
                        </div>
                    </div>

                    {/* World Map Section */}
                    <div className="relative h-80 bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center">
                        <svg
                            viewBox="0 0 800 400"
                            className="w-full h-full p-6"
                            style={{ maxHeight: '320px' }}
                        >
                            {/* World Map Simplified Continents */}
                            {/* North America */}
                            <path
                                d="M120 80 L200 60 L250 100 L220 160 L150 180 L100 140 Z"
                                fill="#e2e8f0"
                                stroke="#cbd5e1"
                                strokeWidth="1"
                            />
                            {/* South America */}
                            <path
                                d="M180 180 L220 160 L240 200 L250 280 L220 320 L190 300 L170 240 Z"
                                fill="#e2e8f0"
                                stroke="#cbd5e1"
                                strokeWidth="1"
                            />
                            {/* Europe */}
                            <path
                                d="M380 60 L420 50 L450 80 L440 120 L400 130 L370 100 Z"
                                fill="#e2e8f0"
                                stroke="#cbd5e1"
                                strokeWidth="1"
                            />
                            {/* Africa */}
                            <path
                                d="M380 130 L440 120 L460 180 L450 260 L400 280 L370 240 L360 180 Z"
                                fill="#e2e8f0"
                                stroke="#cbd5e1"
                                strokeWidth="1"
                            />
                            {/* Asia */}
                            <path
                                d="M450 50 L600 40 L650 80 L680 120 L620 160 L580 140 L520 100 L450 80 Z"
                                fill={countryData.continents.includes('Asia') ? '#f97316' : '#e2e8f0'}
                                stroke={countryData.continents.includes('Asia') ? '#ea580c' : '#cbd5e1'}
                                strokeWidth="2"
                                className="transition-all duration-500"
                            />
                            {/* Australia/Oceania */}
                            <path
                                d="M620 220 L680 210 L700 240 L690 270 L650 280 L610 260 Z"
                                fill="#e2e8f0"
                                stroke="#cbd5e1"
                                strokeWidth="1"
                            />
                            {/* Antarctica */}
                            <path
                                d="M200 340 L600 340 L650 360 L150 360 Z"
                                fill="#e2e8f0"
                                stroke="#cbd5e1"
                                strokeWidth="1"
                            />

                            {/* Country Highlight Pin */}
                            {countryData.latlng && (
                                <g>
                                    {/* Convert lat/lng to approximate SVG coordinates */}
                                    <circle
                                        cx={400 + (countryData.latlng[1] * 2.5)} // Longitude adjustment
                                        cy={200 - (countryData.latlng[0] * 2)} // Latitude adjustment (inverted for SVG)
                                        r="8"
                                        fill="#f97316"
                                        stroke="#ffffff"
                                        strokeWidth="3"
                                        className="animate-pulse"
                                    />
                                    <circle
                                        cx={400 + (countryData.latlng[1] * 2.5)}
                                        cy={200 - (countryData.latlng[0] * 2)}
                                        r="15"
                                        fill="none"
                                        stroke="#f97316"
                                        strokeWidth="2"
                                        opacity="0.6"
                                        className="animate-ping"
                                    />
                                </g>
                            )}

                            {/* Legend */}
                            <g className="text-xs">
                                <rect x="20" y="350" width="200" height="40" fill="white" fillOpacity="0.9" rx="8" />
                                <circle cx="35" cy="365" r="4" fill="#f97316" />
                                <text x="45" y="369" fill="#374151" className="text-xs font-medium">
                                    {countryData.name.common} Location
                                </text>
                                <rect x="30" y="375" width="15" height="8" fill="#f97316" />
                                <text x="50" y="382" fill="#374151" className="text-xs font-medium">
                                    Highlighted Continent
                                </text>
                            </g>
                        </svg>

                        {/* Coordinates Display */}
                        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2 shadow-lg">
                            <div className="text-xs text-slate-600 mb-1">Coordinates</div>
                            <div className="text-sm font-bold text-slate-800">
                                {countryData.latlng[0]}°, {countryData.latlng[1]}°
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CountryHeroSection;
