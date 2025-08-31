//TODO
import { useState, useEffect } from 'react';
import { Country } from '@/types/CountryTypes';
import { CountriesAPI } from '@/lib/api';

export function useCountries() {
    const [countries, setCountries] = useState<Country[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const searchCountries = async () => {
            setLoading(true);
            setError(null);

            try {
                const results = await CountriesAPI.getAllCountries();
                setCountries(results);
            } catch (err) {
                setError('Failed to search countries');
                setCountries([]);
            } finally {
                setLoading(false);
            }
        };

        searchCountries();
    }, []);

    return { countries, loading, error };
}
