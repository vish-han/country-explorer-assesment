import React from 'react';
import { notFound } from 'next/navigation';
import Navbar from "@/components/ui/Navbar";
import CountryHeroSection from "../components/HeroSection";
import CountryStatsGrid from "../components/StatsSection";
import CountryDetailsSections from "../components/DetailSection";
import {CountriesAPI} from "@/lib/api";

export default async function CountryDetailPage({ params }:{params:Promise<{country:string}>}) {
    const resolvedParams = await params;
    const countryName = decodeURIComponent(resolvedParams.country);
    let countryData;

    try {
        countryData = await CountriesAPI.getCountryByName(countryName);
    } catch (error) {
        return (
            <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-cyan-50 via-blue-50 to-purple-50">
                {/* Oceanic pattern background */}
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.06'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                    }}
                />

                <div
                    className="absolute inset-0 opacity-50"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'%3E%3Cpath fill='%2306b6d4' fill-opacity='0.2' d='M0,160L48,144C96,128,192,96,288,106.7C384,117,480,171,576,186.7C672,203,768,181,864,165.3C960,149,1056,139,1152,154.7C1248,171,1344,213,1392,234.7L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'%3E%3C/path%3E%3C/svg%3E")`,
                    }}
                />

                <Navbar />
                <div className="relative z-10 max-w-7xl mx-auto px-6 py-8">
                    <p className="p-8 text-red-600">Error loading country data. Please try again later.</p>
                </div>

                {/* Floating decorative elements */}
                <div className="absolute top-32 left-10 w-3 h-3 bg-cyan-400/30 rounded-full animate-pulse" />
                <div className="absolute top-48 right-16 w-2 h-2 bg-orange-400/40 rounded-full animate-bounce" />
                <div className="absolute bottom-32 left-1/4 w-4 h-4 bg-blue-400/20 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
                <div className="absolute bottom-48 right-1/3 w-3 h-3 bg-cyan-300/30 rounded-full animate-bounce" style={{ animationDelay: '2s' }} />
            </div>
        );
    }

    if (!countryData) {
        notFound();
    }

    const getBorders = () => {
        return countryData.borders ? countryData.borders.join(', ') : 'None';
    };

    return (
        <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-cyan-50 via-blue-50 to-purple-50">
            {/* Oceanic pattern background */}
            <div
                className="absolute inset-0"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.06'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }}
            />

            <div
                className="absolute inset-0 opacity-50"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'%3E%3Cpath fill='%2306b6d4' fill-opacity='0.2' d='M0,160L48,144C96,128,192,96,288,106.7C384,117,480,171,576,186.7C672,203,768,181,864,165.3C960,149,1056,139,1152,154.7C1248,171,1344,213,1392,234.7L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'%3E%3C/path%3E%3C/svg%3E")`,
                }}
            />

            <Navbar />
            <div className="relative z-10 max-w-7xl mx-auto px-6 py-8">
                <CountryHeroSection countryData={countryData} />
                <CountryStatsGrid countryData={countryData} />
                <CountryDetailsSections
                    countryData={countryData}
                    getBorders={getBorders}
                />
            </div>

            {/* Floating decorative elements */}
            <div className="absolute top-32 left-10 w-3 h-3 bg-cyan-400/30 rounded-full animate-pulse" />
            <div className="absolute top-48 right-16 w-2 h-2 bg-orange-400/40 rounded-full animate-bounce" />
            <div className="absolute bottom-32 left-1/4 w-4 h-4 bg-blue-400/20 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
            <div className="absolute bottom-48 right-1/3 w-3 h-3 bg-cyan-300/30 rounded-full animate-bounce" style={{ animationDelay: '2s' }} />
        </div>
    );
}
