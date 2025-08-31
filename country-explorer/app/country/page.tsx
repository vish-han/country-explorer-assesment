'use client'
import {Country} from "@/types/CountryTypes";
import React, {useState} from "react";
import Navbar from "@/components/ui/Navbar";
import {CountryCard} from "@/components/ui/CountryCard";
import {SkeletonCard} from "@/components/ui/SkeletonCard";
import {LoadMoreButton} from "@/components/ui/Loadmore";
import {Globe} from "lucide-react";
import {useCountries} from "@/hooks/useCountries";

export default function CountrySearchPage() {
    const [country, setCountry] = useState<Country[]>([]);
    const [loading, setLoading] = useState(false);
    const [hasMore, setHasMore] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const {countries}=useCountries()


    // Initialize with mock data
    React.useEffect(() => {
        setCountry(countries);
    }, []);

    const handleCountryClick = (country: Country) => {
        console.log('Navigate to country details:', country.name.common);
        // Here you would implement navigation to country details page
    };

    const handleLoadMore = () => {
        setLoading(true);
        // Simulate API call
        setTimeout(() => {
            // In real implementation, you'd fetch more countries
            setLoading(false);
            setCurrentPage(prev => prev + 1);
            // For demo purposes, we'll just show the same countries again
            setCountry(prev => [...prev, ...countries.slice(0, 3)]);
        }, 1000);
    };

    return (
        <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-blue-200 via-cyan-200 to-slate-300">
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

            {/* Navbar with integrated search */}
            <Navbar />

            {/* Main Content */}
            <div className="relative z-10 px-6 pb-12">
                {/* Results Header */}
                <div className="max-w-7xl mx-auto mb-8">
                    <div className="text-center mb-2">
                        <h1 className="text-4xl font-bold text-slate-700 mb-2">
                            Discover <span className="text-orange-500">Amazing</span> Countries
                        </h1>
                        <p className="text-lg text-slate-600">
                            Found {countries.length} countries ready to explore
                        </p>
                    </div>
                </div>

                {/* Countries Grid */}
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {countries.map((country, index) => (
                            <CountryCard
                                key={`${country.cca3}-${index}`}
                                country={country}
                                onClick={() => handleCountryClick(country)}
                            />
                        ))}

                        {/* Skeleton loaders for loading state */}
                        {loading && Array.from({ length: 4 }).map((_, index) => (
                            <SkeletonCard key={`skeleton-${index}`} />
                        ))}
                    </div>

                    {/* Load More Button */}
                    {hasMore && countries.length > 0 && (
                        <LoadMoreButton onClick={handleLoadMore} loading={loading} />
                    )}
                </div>

                {/* Empty State */}
                {countries.length === 0 && !loading && (
                    <div className="text-center py-16">
                        <Globe className="w-16 h-16 text-slate-400 mx-auto mb-4" />
                        <h3 className="text-2xl font-semibold text-slate-600 mb-2">No countries found</h3>
                        <p className="text-slate-500">Try adjusting your search terms</p>
                    </div>
                )}
            </div>

            {/* Floating decorative elements */}
            <div className="absolute top-32 left-10 w-3 h-3 bg-cyan-400/30 rounded-full animate-pulse" />
            <div className="absolute top-48 right-16 w-2 h-2 bg-orange-400/40 rounded-full animate-bounce" />
            <div className="absolute bottom-32 left-1/4 w-4 h-4 bg-blue-400/20 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
            <div className="absolute bottom-48 right-1/3 w-3 h-3 bg-cyan-300/30 rounded-full animate-bounce" style={{ animationDelay: '2s' }} />
        </div>
    );
}
