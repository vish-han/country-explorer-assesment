import React from 'react';
import { notFound } from 'next/navigation';
import Navbar from "@/components/ui/Navbar";
import CountryHeroSection from "../components/HeroSection";
import CountryStatsGrid from "../components/StatsSection";
import CountryDetailsSections from "../components/DetailSection";
import {CountriesAPI} from "@/lib/api";

export default async function CountryDetailPage({ params }:{params:{country:string}}) {
    const countryName = decodeURIComponent(params.country);
    let countryData;
    try {
        countryData = await CountriesAPI.getCountryByName(countryName);
    } catch (error) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-blue-50 to-purple-50">
                <Navbar />
                <div className="max-w-7xl mx-auto px-6 py-8">
                    <p className="p-8 text-red-600">Error loading country data. Please try again later.</p>
                </div>
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
        <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-blue-50 to-purple-50">
            <Navbar />
            <div className="max-w-7xl mx-auto px-6 py-8">
                <CountryHeroSection countryData={countryData} />
                <CountryStatsGrid countryData={countryData} />
                <CountryDetailsSections
                    countryData={countryData}
                    getBorders={getBorders}
                />
            </div>
        </div>
    );
}
