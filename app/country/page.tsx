'use client'
import React, { useState, useEffect, useMemo } from "react";
import { useRouter } from "next/navigation"; // Import useRouter
import Navbar from "@/components/ui/Navbar";
import {CountryCard} from "@/components/ui/CountryCard";
import {Globe, Loader2} from "lucide-react";
import {CountriesAPI} from "@/lib/api";
import {Country} from "@/types/CountryTypes";
import Pagination from "@/components/ui/Pagination";

export default function CountrySearchPage() {
    const router = useRouter(); // Initialize router
    const [allCountries, setAllCountries] = useState<Country[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(12);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        const fetchCountries = async () => {
            try {
                setLoading(true);
                setError(null);
                const data = await CountriesAPI.getAllCountries();
                setAllCountries(data);
            } catch (err) {
                if (err instanceof Error) {
                    setError(err.message);
                } else if (typeof err === 'string') {
                    setError(err);
                } else {
                    setError('An unexpected error occurred while fetching countries');
                }
            } finally {
                setLoading(false);
            }
        };

        fetchCountries();
    }, []);

    const filteredCountries = useMemo(() => {
        if (!searchTerm.trim()) return allCountries;

        return allCountries.filter(country =>
            country.name.common.toLowerCase().includes(searchTerm.toLowerCase()) ||
            country.name.official?.toLowerCase().includes(searchTerm.toLowerCase()) ||
            country.capital?.[0]?.toLowerCase().includes(searchTerm.toLowerCase()) ||
            country.region?.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }, [allCountries, searchTerm]);

    const totalPages = Math.ceil(filteredCountries.length / itemsPerPage);
    const paginatedCountries = useMemo(() => {
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        return filteredCountries.slice(startIndex, endIndex);
    }, [filteredCountries, currentPage, itemsPerPage]);

    useEffect(() => {
        setCurrentPage(1);
    }, [searchTerm, itemsPerPage]);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleItemsPerPageChange = (newItemsPerPage: number) => {
        setItemsPerPage(newItemsPerPage);
    };

    const handleRetry = () => {
        window.location.reload();
    };

    const handleCountryClick = (country: Country) => {
        const countryName = encodeURIComponent(country.name.common);
        router.push(`/countries/${countryName}`);
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

            {/* Main Content */}
            <div className="relative z-10 px-6 pb-12">
                {/* Results Header */}
                <div className="max-w-7xl mx-auto mb-8">
                    <div className="text-center mb-6">
                        <h1 className="text-4xl font-bold text-slate-700 mb-2">
                            Discover <span className="text-orange-500">Amazing</span> Countries
                        </h1>
                        {loading ? (
                            <div className="flex items-center justify-center gap-2">
                                <Loader2 className="w-5 h-5 animate-spin text-slate-600" />
                                <p className="text-lg text-slate-600">Loading countries...</p>
                            </div>
                        ) : (
                            <p className="text-lg text-slate-600">
                                Found {filteredCountries.length} countries ready to explore
                            </p>
                        )}
                    </div>
                </div>

                {/* Countries Grid */}
                <div className="max-w-7xl mx-auto">
                    {loading ? (
                        // Skeleton loaders
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                            {Array.from({ length: 12 }).map((_, index) => (
                                <div key={index} className="bg-white rounded-xl shadow-lg p-6 animate-pulse">
                                    <div className="w-full h-32 bg-slate-200 rounded-lg mb-4"></div>
                                    <div className="h-6 bg-slate-200 rounded mb-2"></div>
                                    <div className="h-4 bg-slate-200 rounded w-3/4 mb-2"></div>
                                    <div className="h-4 bg-slate-200 rounded w-1/2"></div>
                                </div>
                            ))}
                        </div>
                    ) : error ? (
                        // Error State
                        <div className="text-center py-16">
                            <Globe className="w-16 h-16 text-red-400 mx-auto mb-4" />
                            <h3 className="text-2xl font-semibold text-slate-600 mb-2">Failed to load countries</h3>
                            <p className="text-slate-500">{error}</p>
                            <button
                                onClick={handleRetry}
                                className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                            >
                                Try Again
                            </button>
                        </div>
                    ) : filteredCountries.length === 0 ? (
                        // Empty State
                        <div className="text-center py-16">
                            <Globe className="w-16 h-16 text-slate-400 mx-auto mb-4" />
                            <h3 className="text-2xl font-semibold text-slate-600 mb-2">
                                {searchTerm ? 'No countries match your search' : 'No countries found'}
                            </h3>
                            <p className="text-slate-500">
                                {searchTerm ? 'Try different search terms' : 'Try adjusting your filters'}
                            </p>
                            {searchTerm && (
                                <button
                                    onClick={() => setSearchTerm('')}
                                    className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                                >
                                    Clear Search
                                </button>
                            )}
                        </div>
                    ) : (
                        <>
                            {/* Countries Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
                                {paginatedCountries.map((country, index) => (
                                    <div
                                        key={`${country.cca3}-${index}`}
                                        onClick={() => handleCountryClick(country)}
                                        className="cursor-pointer transform transition-transform hover:scale-105"
                                    >
                                        <CountryCard country={country} />
                                    </div>
                                ))}
                            </div>

                            {/* Pagination */}
                            {totalPages > 1 && (
                                <div className="mt-8">
                                    <Pagination
                                        currentPage={currentPage}
                                        totalPages={totalPages}
                                        onPageChange={handlePageChange}
                                        itemsPerPage={itemsPerPage}
                                        totalItems={filteredCountries.length}
                                        onItemsPerPageChange={handleItemsPerPageChange}
                                    />
                                </div>
                            )}
                        </>
                    )}
                </div>
            </div>

            {/* Floating decorative elements */}
            <div className="absolute top-32 left-10 w-3 h-3 bg-cyan-400/30 rounded-full animate-pulse" />
            <div className="absolute top-48 right-16 w-2 h-2 bg-orange-400/40 rounded-full animate-bounce" />
            <div className="absolute bottom-32 left-1/4 w-4 h-4 bg-blue-400/20 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
            <div className="absolute bottom-48 right-1/3 w-3 h-3 bg-cyan-300/30 rounded-full animate-bounce" style={{ animationDelay: '2s' }} />
        </div>
    );
}
