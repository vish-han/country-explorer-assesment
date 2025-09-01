'use client';

import { useState, useRef, useEffect } from 'react';
import { Search, Loader2, Globe, X, Compass } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useDebounced } from '@/hooks/useDebounced';
import { Country } from '@/types/CountryTypes';
import { useCountries } from "@/hooks/useCountries";
import Image from "next/image";

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
                              placeholder = "Search countries, capitals, regions..."
                          }: SearchBarProps) {
    const [query, setQuery] = useState(initialValue);
    const [suggestions, setSuggestions] = useState<Country[]>([]);
    const [isOpen, setIsOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const [focused, setFocused] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(-1);
    const [error, setError] = useState<string | null>(null);

    const debouncedQuery = useDebounced(query, 500);
    const router = useRouter();
    const searchRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);
    const suggestionsRef = useRef<HTMLDivElement>(null);
    const isCompact = variant === 'compact';

    const results = useCountries(debouncedQuery);
    console.log(results);

    // Enhanced default suggestions with better variety
    const defaultSuggestions: Country[] = (results.countries || [])
        .filter(c =>
            ["United States", "United Kingdom", "Canada", "Australia", "Germany", "France", "Japan", "Brazil"]
                .includes(c.name.common)
        );

    // Enhanced fuzzy search with better matching
    const fuzzyMatch = (str: string, query: string): boolean => {
        const normalizeStr = (s: string) => s.toLowerCase().replace(/[^\w\s]/g, '');
        const normalized = normalizeStr(str);
        const normalizedQuery = normalizeStr(query);

        // Exact match
        if (normalized.includes(normalizedQuery)) return true;

        // Handle common misspellings and partial matches
        const words = normalizedQuery.split(' ');
        return words.every(word => {
            if (word.length <= 2) return normalized.includes(word);

            // Allow 1 character difference for words > 2 chars
            for (let i = 0; i <= normalized.length - word.length; i++) {
                const substr = normalized.substr(i, word.length);
                let diff = 0;
                for (let j = 0; j < word.length; j++) {
                    if (substr[j] !== word[j]) diff++;
                }
                if (diff <= 1) return true;
            }
            return false;
        });
    };

    useEffect(() => {
        const fetchSuggestions = async () => {
            if (!debouncedQuery.trim()) {
                setSuggestions(defaultSuggestions);
                setError(null);
                return;
            }

            setLoading(true);
            setError(null);

            try {
                const filtered = results.countries.filter(country => {
                    const searchTerms = [
                        country.name.common,
                        country.name.official,
                        country.region,
                        ...(country.capital || []),
                    ].filter(Boolean);

                    return searchTerms.some(term =>
                        typeof term === 'string' && fuzzyMatch(term, debouncedQuery)
                    );
                }).slice(0, 8); // Limit to 8 results for better UX

                setSuggestions(filtered);
                setSelectedIndex(-1);

                if (filtered.length === 0 && debouncedQuery.length > 2) {
                    setError('No countries found. Try checking your spelling or use different keywords.');
                }

                setIsOpen(true);
            } catch (err) {
                console.error('Search error:', err);
                setError('Search temporarily unavailable. Please try again.');
                setSuggestions([]);
            } finally {
                setLoading(false);
            }
        };

        fetchSuggestions();
    }, [debouncedQuery, results.countries]);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
                setIsOpen(false);
                setFocused(false);
                setSelectedIndex(-1);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    // Enhanced keyboard navigation
    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (!isOpen) {
            if (e.key === 'Enter') {
                e.preventDefault();
                handleSearch();
            }
            return;
        }

        switch (e.key) {
            case 'ArrowDown':
                e.preventDefault();
                setSelectedIndex(prev =>
                    prev < suggestions.length - 1 ? prev + 1 : 0
                );
                break;
            case 'ArrowUp':
                e.preventDefault();
                setSelectedIndex(prev =>
                    prev > 0 ? prev - 1 : suggestions.length - 1
                );
                break;
            case 'Enter':
                e.preventDefault();
                if (selectedIndex >= 0 && suggestions[selectedIndex]) {
                    selectSuggestion(suggestions[selectedIndex]);
                } else {
                    handleSearch();
                }
                break;
            case 'Escape':
                setIsOpen(false);
                setFocused(false);
                setSelectedIndex(-1);
                inputRef.current?.blur();
                break;
            case 'Tab':
                if (selectedIndex >= 0 && suggestions[selectedIndex]) {
                    e.preventDefault();
                    setQuery(suggestions[selectedIndex].name.common);
                    setSelectedIndex(-1);
                }
                break;
        }
    };

    useEffect(() => {
        if (selectedIndex >= 0 && suggestionsRef.current) {
            const selectedElement = suggestionsRef.current.children[selectedIndex] as HTMLElement;
            selectedElement?.scrollIntoView({
                block: 'nearest',
                behavior: 'smooth'
            });
        }
    }, [selectedIndex]);

    const handleSearch = () => {
        if (query.trim()) {
            router.push(`/countries/${encodeURIComponent(query.trim())}`);
            setIsOpen(false);
            setFocused(false);
        }
    };

    const selectSuggestion = (country: Country) => {
        setQuery(country.name.common);
        setIsOpen(false);
        setSelectedIndex(-1);
        router.push(`/countries/${encodeURIComponent(country.name.common)}`);
    };

    const clearSearch = () => {
        setQuery('');
        setSuggestions(defaultSuggestions);
        setError(null);
        inputRef.current?.focus();
    };

    return (
        <div ref={searchRef} className={`relative w-full ${className}`} role="combobox" aria-expanded={isOpen}>
            {/* Main Search Input */}
            <div className={`
                relative flex items-center group transition-all duration-300 w-full
                ${isCompact
                ? 'bg-white/95 backdrop-blur-md rounded-xl shadow-lg h-12 sm:h-14 hover:shadow-xl'
                : `bg-white/95 backdrop-blur-xl rounded-xl sm:rounded-2xl shadow-xl sm:shadow-2xl 
                       h-14 sm:h-16 md:h-18 border border-white/20 hover:border-white/40 hover:shadow-2xl sm:hover:shadow-3xl
                       ${focused ? 'ring-2 sm:ring-4 ring-orange-400/30 border-orange-300/50 scale-[1.01] sm:scale-[1.02]' : ''}`
            }
            `}>
                {/* Navigation Logo */}
                <div className={`flex items-center justify-center text-orange-500 transition-colors duration-300 flex-shrink-0 ${isCompact ? 'pl-3 sm:pl-4' : 'pl-4 sm:pl-6'}`}>
                    <Compass className={`${isCompact ? 'w-5 h-5 sm:w-6 sm:h-6' : 'w-6 h-6 sm:w-7 sm:h-7'}`} />
                </div>

                {/* Input Field */}
                <input
                    ref={inputRef}
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    onKeyDown={handleKeyDown}
                    onFocus={() => {
                        setFocused(true);
                        if (!debouncedQuery.trim()) {
                            setSuggestions(defaultSuggestions);
                        }
                        setIsOpen(true);
                    }}
                    onBlur={() => setFocused(false)}
                    placeholder={placeholder}
                    className={`
                        flex-1 bg-transparent border-0 outline-none text-gray-700 placeholder-gray-400/70
                        font-medium transition-all duration-300 min-w-0
                        ${isCompact ? 'text-sm sm:text-base py-3 sm:py-4 px-3 sm:px-4' : 'text-base sm:text-lg py-4 sm:py-5 px-4 sm:px-6'}
                        ${focused ? 'placeholder-orange-400/50' : ''}
                    `}
                    aria-label="Search countries, capitals, or regions"
                    aria-autocomplete="list"
                    aria-controls="suggestions-list"
                    autoComplete="off"
                    spellCheck="false"
                />

                {/* Clear Button */}
                {query && (
                    <button
                        onClick={clearSearch}
                        className="mr-1 sm:mr-2 p-1.5 sm:p-2 text-gray-400 hover:text-gray-600 transition-colors duration-200 rounded-lg hover:bg-gray-100/50 flex-shrink-0"
                        aria-label="Clear search"
                        type="button"
                    >
                        <X className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    </button>
                )}

                {/* Loading Indicator */}
                {loading && (
                    <div className="mr-2 sm:mr-4 flex-shrink-0">
                        <Loader2 className="w-4 h-4 sm:w-5 sm:h-5 text-orange-500 animate-spin" />
                    </div>
                )}

                {/* Search Button */}
                <button
                    onClick={handleSearch}
                    disabled={loading}
                    className={`
                        flex items-center justify-center bg-gradient-to-r from-orange-400 to-orange-500
                        hover:from-orange-500 hover:to-orange-600 focus:from-orange-500 focus:to-orange-600
                        focus:ring-2 sm:focus:ring-4 focus:ring-orange-400/30 disabled:from-gray-300 disabled:to-gray-400
                        text-white rounded-lg sm:rounded-xl transition-all duration-300 mr-1.5 sm:mr-2 flex-shrink-0
                        hover:scale-105 shadow-md sm:shadow-lg hover:shadow-lg sm:hover:shadow-xl active:scale-95
                        ${isCompact ? 'w-8 h-8 sm:w-10 sm:h-10' : 'w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14'}
                        ${loading ? 'cursor-not-allowed' : 'cursor-pointer'}
                    `}
                    aria-label="Search"
                    type="button"
                >
                    <Search className={`${isCompact ? 'w-3.5 h-3.5 sm:w-4 sm:h-4' : 'w-4 h-4 sm:w-5 sm:h-5'}`} />
                </button>
            </div>

            {/* Enhanced Suggestions Dropdown */}
            {isOpen && (suggestions.length > 0 || loading || error) && (
                <div
                    className="absolute top-full left-0 right-0 mt-2 sm:mt-3 bg-white/95 backdrop-blur-xl rounded-xl sm:rounded-2xl shadow-xl sm:shadow-2xl border border-white/20 max-h-80 sm:max-h-96 overflow-hidden z-50 animate-in slide-in-from-top-2 duration-200"
                    role="listbox"
                    id="suggestions-list"
                >
                    {loading ? (
                        <div className="p-4 sm:p-6 text-center text-gray-500 flex items-center justify-center gap-2 sm:gap-3">
                            <Loader2 className="w-4 h-4 sm:w-5 sm:h-5 animate-spin text-orange-500" />
                            <span className="font-medium text-sm sm:text-base">Exploring the globe...</span>
                        </div>
                    ) : error ? (
                        <div className="p-4 sm:p-6 text-center">
                            <div className="text-amber-600 font-medium mb-2 text-sm sm:text-base">🌍 No matches found</div>
                            <div className="text-xs sm:text-sm text-gray-500">{error}</div>
                        </div>
                    ) : (
                        <div
                            ref={suggestionsRef}
                            className="max-h-80 sm:max-h-96 overflow-y-auto scrollbar-thin scrollbar-thumb-orange-200 scrollbar-track-transparent"
                        >
                            {/* Search hint */}
                            {!debouncedQuery.trim() && (
                                <div className="px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm text-gray-500 bg-orange-50/50 border-b border-gray-100/50">
                                    💡 Popular destinations • Try typing a country, capital, or region
                                </div>
                            )}

                            {suggestions.map((country, index) => (
                                <button
                                    key={index}
                                    onClick={() => selectSuggestion(country)}
                                    className={`
                                        w-full px-4 sm:px-6 py-3 sm:py-4 text-left flex items-center gap-3 sm:gap-4 
                                        border-b border-gray-100/50 last:border-b-0 
                                        transition-all duration-200 group
                                        ${selectedIndex === index
                                        ? 'bg-gradient-to-r from-orange-50 to-red-50 border-orange-200'
                                        : 'hover:bg-gradient-to-r hover:from-orange-50/50 hover:to-red-50/50'
                                    }
                                    `}
                                    role="option"
                                    aria-selected={selectedIndex === index}
                                    style={{ animationDelay: `${index * 0.05}s` }}
                                >
                                    {/* Enhanced Flag */}
                                    <div className="relative flex-shrink-0">
                                        <Image
                                            src={country.flags.png}
                                            alt={country.flags.alt || `${country.name.common} flag`}
                                            className={`
                                                w-8 h-6 sm:w-12 sm:h-8 object-cover rounded shadow-sm sm:shadow-md border border-gray-200/50
                                                transition-all duration-200
                                                ${selectedIndex === index ? 'shadow-md sm:shadow-lg scale-105' : 'group-hover:shadow-md sm:group-hover:shadow-lg group-hover:scale-105'}
                                            `}
                                            loading="lazy"
                                            width={32}
                                            height={24}
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/10 rounded" />
                                    </div>

                                    {/* Enhanced Country Info */}
                                    <div className="flex-1 min-w-0">
                                        <div className={`
                                            font-semibold text-gray-900 flex items-center gap-1 sm:gap-2 mb-0.5 sm:mb-1
                                            transition-colors duration-200 truncate text-sm sm:text-base
                                            ${selectedIndex === index ? 'text-orange-700' : 'group-hover:text-orange-700'}
                                        `}>
                                            <span className="truncate">{country.name.common}</span>
                                            <Globe className={`
                                                w-2.5 h-2.5 sm:w-3 sm:h-3 text-gray-400 transition-all duration-200 flex-shrink-0
                                                ${selectedIndex === index ? 'opacity-100 text-orange-500' : 'opacity-0 group-hover:opacity-100'}
                                            `} />
                                        </div>

                                        <div className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm">
                                            <span className="text-gray-500 font-medium truncate">{country.region}</span>
                                            {country.capital && (
                                                <>
                                                    <span className="text-gray-300 hidden sm:inline">•</span>
                                                    <span className="text-gray-400 truncate hidden sm:inline">
                                                        Capital: {country.capital[0]}
                                                    </span>
                                                </>
                                            )}
                                        </div>

                                        {/* Mobile-friendly capital display */}
                                        {country.capital && (
                                            <div className="text-xs text-gray-400 mt-0.5 truncate sm:hidden">
                                                Capital: {country.capital[0]}
                                            </div>
                                        )}

                                        {/* Additional info on hover/selection - hidden on mobile */}
                                        {(selectedIndex === index) && country.population && (
                                            <div className="text-xs text-orange-600 mt-1 hidden sm:block">
                                                Population: {country.population.toLocaleString()}
                                            </div>
                                        )}
                                    </div>

                                    {/* Enhanced Hover Arrow */}
                                    <div className={`
                                        transition-all duration-200 flex-shrink-0
                                        ${selectedIndex === index ? 'opacity-100 translate-x-0.5 sm:translate-x-1' : 'opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 sm:group-hover:translate-x-1'}
                                    `}>
                                        <svg className="w-4 h-4 sm:w-5 sm:h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
