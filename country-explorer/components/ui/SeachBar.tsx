'use client';

import { useState, useRef, useEffect } from 'react';
import { Search, Loader2, Globe } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useDebounced } from '@/hooks/useDebounced';
import { CountriesAPI } from '@/lib/api';
import { Country } from '@/types/CountryTypes';

interface SearchBarProps {
    variant?: 'default' | 'compact';
    initialValue?: string;
    className?: string;
    placeholder?: string;
}

export function SearchBar({
                              variant = 'default',
                              initialValue = '',
                              className = '',
                              placeholder = "Search for a country..."
                          }: SearchBarProps) {
    const [query, setQuery] = useState(initialValue);
    const [suggestions, setSuggestions] = useState<Country[]>([]);
    const [isOpen, setIsOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const [focused, setFocused] = useState(false);
    const debouncedQuery = useDebounced(query, 300);
    const router = useRouter();
    const searchRef = useRef<HTMLDivElement>(null);

    const isCompact = variant === 'compact';

    useEffect(() => {
        const fetchSuggestions = async () => {
            if (!debouncedQuery.trim()) {
                setSuggestions([]);
                return;
            }

            setLoading(true);
            try {
                const results = await CountriesAPI.searchCountries(debouncedQuery);
                setSuggestions(results.slice(0, 8));
                setIsOpen(true);
            } catch (error) {
                setSuggestions([]);
            } finally {
                setLoading(false);
            }
        };

        fetchSuggestions();
    }, [debouncedQuery]);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
                setIsOpen(false);
                setFocused(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleSearch = () => {
        if (query.trim()) {
            router.push(`/countries?search=${encodeURIComponent(query.trim())}`);
            setIsOpen(false);
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            handleSearch();
        } else if (e.key === 'Escape') {
            setIsOpen(false);
            setFocused(false);
        }
    };

    const selectSuggestion = (country: Country) => {
        setQuery(country.name.common);
        setIsOpen(false);
        router.push(`/country/${encodeURIComponent(country.name.common)}`);
    };

    return (
        <div ref={searchRef} className={`relative ${className}`}>
            {/* Main Search Input */}
            <div className={`
                relative flex items-center group transition-all duration-300
                ${isCompact
                ? 'bg-white/95 backdrop-blur-md rounded-xl shadow-lg h-14 hover:shadow-xl'
                : `bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl h-18 border border-white/20 hover:border-white/40 hover:shadow-3xl
                       ${focused ? 'ring-4 ring-blue-400/30 border-blue-300/50' : ''}`
            }
            `}>
                {/* Search Icon */}
                <div className={`flex items-center justify-center text-gray-400 group-hover:text-blue-500 transition-colors duration-300 ${isCompact ? 'pl-4' : 'pl-6'}`}>
                    <Search className={`${isCompact ? 'w-5 h-5' : 'w-6 h-6'}`} />
                </div>

                {/* Input Field */}
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    onKeyDown={handleKeyDown}
                    onFocus={() => {
                        setFocused(true);
                        suggestions.length > 0 && setIsOpen(true);
                    }}
                    onBlur={() => setFocused(false)}
                    placeholder={placeholder}
                    className={`
                        flex-1 bg-transparent border-0 outline-none text-gray-700 placeholder-gray-400/70
                        font-medium transition-all duration-300
                        ${isCompact ? 'text-base py-4 px-4' : 'text-lg py-5 px-6'}
                    `}
                    aria-label="Search countries"
                />

                {/* Loading Indicator */}
                {loading && (
                    <div className="mr-4">
                        <Loader2 className="w-5 h-5 text-blue-500 animate-spin" />
                    </div>
                )}

                {/* Search Button */}
                <button
                    onClick={handleSearch}
                    className={`
                        flex items-center justify-center bg-gradient-to-r from-blue-600 to-blue-700 
                        hover:from-blue-500 hover:to-blue-600 text-white rounded-xl 
                        transition-all duration-300 mr-2 group-hover:scale-105 shadow-lg hover:shadow-xl
                        ${isCompact ? 'w-10 h-10' : 'w-14 h-14'}
                    `}
                    aria-label="Search"
                >
                    <Search className={`${isCompact ? 'w-4 h-4' : 'w-5 h-5'}`} />
                </button>
            </div>

            {/* Enhanced Suggestions Dropdown */}
            {isOpen && (suggestions.length > 0 || loading) && (
                <div className="absolute top-full left-0 right-0 mt-3 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20 max-h-96 overflow-hidden z-50 animate-fade-in">
                    {loading ? (
                        <div className="p-6 text-center text-gray-500 flex items-center justify-center gap-3">
                            <Loader2 className="w-5 h-5 animate-spin text-blue-500" />
                            <span className="font-medium">Searching the world...</span>
                        </div>
                    ) : (
                        <div className="max-h-96 overflow-y-auto custom-scrollbar">
                            {suggestions.map((country, index) => (
                                <button
                                    key={country.cca3}
                                    onClick={() => selectSuggestion(country)}
                                    className="w-full px-6 py-4 text-left hover:bg-gradient-to-r hover:from-blue-50 hover:to-cyan-50 flex items-center gap-4 border-b border-gray-100/50 last:border-b-0 transition-all duration-200 group"
                                    style={{ animationDelay: `${index * 0.05}s` }}
                                >
                                    {/* Flag with enhanced styling */}
                                    <div className="relative">
                                        <img
                                            src={country.flags.png}
                                            alt={country.flags.alt || `${country.name.common} flag`}
                                            className="w-10 h-7 object-cover rounded-md shadow-md group-hover:shadow-lg transition-shadow duration-200 border border-gray-200/50"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/10 rounded-md" />
                                    </div>

                                    {/* Country Info */}
                                    <div className="flex-1">
                                        <div className="font-semibold text-gray-900 group-hover:text-blue-700 transition-colors duration-200 flex items-center gap-2">
                                            {country.name.common}
                                            <Globe className="w-3 h-3 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                                        </div>
                                        <div className="text-sm text-gray-500 font-medium">{country.region}</div>
                                        {country.capital && (
                                            <div className="text-xs text-gray-400 mt-1">Capital: {country.capital[0]}</div>
                                        )}
                                    </div>

                                    {/* Hover Arrow */}
                                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                                        <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </div>
                                </button>
                            ))}
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}

// Add these additional styles to your globals.css:
/*
@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fade-in 0.3s ease-out forwards;
}

.custom-scrollbar {
  scrollbar-width: thin;
  scrollbar-color: rgba(59, 130, 246, 0.5) transparent;
}

.custom-scrollbar::-webkit-scrollbar {
  width: 6px;
}

.custom-scrollbar::-webkit-scrollbar-track {
  background: transparent;
}

.custom-scrollbar::-webkit-scrollbar-thumb {
  background: rgba(59, 130, 246, 0.5);
  border-radius: 3px;
}

.custom-scrollbar::-webkit-scrollbar-thumb:hover {
  background: rgba(59, 130, 246, 0.7);
}
*/
