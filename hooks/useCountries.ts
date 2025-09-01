import { useState, useEffect } from 'react';
import { Country } from '@/types/CountryTypes';
import { CountriesAPI } from '@/lib/api';

interface UseCountriesReturn {
    countries: Country[];
    loading: boolean;
    error: string | null;
}

interface UseCountriesOptions {
    mode?: 'search' | 'all' | 'popular' | 'searchByName';
}

export function useCountries(debouncedQuery?: string,countryName?:string, options: UseCountriesOptions = {}): UseCountriesReturn {
    const [countries, setCountries] = useState<Country[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const { mode = 'search' } = options;

    useEffect(() => {
        const fetchCountries = async () => {
            setLoading(true);
            setError(null);

            try {
                let results: Country[];

                switch (mode) {
                    case 'search':
                    default:
                        // For search functionality
                        if (!debouncedQuery?.trim()) {
                            results = []
                        } else {
                            results = await CountriesAPI.searchCountries(debouncedQuery);
                        }
                        break;
                }

                setCountries(results);
            } catch (err) {
                setError('Failed to fetch countries');
                setCountries([]);
            } finally {
                setLoading(false);
            }
        };

        fetchCountries();
    }, [debouncedQuery,countryName, mode]);

    return { countries, loading, error };
}
