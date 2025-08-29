//TODO
import { useState, useEffect } from 'react';
import { Country } from '@/lib/types';
import { CountriesAPI } from '@/lib/api';

export function useCountries(query: string) {
    const [countries, setCountries] = useState<Country[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (!query.trim()) {
            setCountries([]);
            return;
        }

        const searchCountries = async () => {
            setLoading(true);
            setError(null);

            try {
                const results = await CountriesAPI.searchCountries(query);
                setCountries(results);
            } catch (err) {
                setError('Failed to search countries');
                setCountries([]);
            } finally {
                setLoading(false);
            }
        };

        searchCountries();
    }, [query]);

    return { countries, loading, error };
}
