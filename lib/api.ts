import {Country} from "@/types/CountryTypes";
import {BASE_URL} from "@/constants/consts";

export class CountriesAPI {
    static async searchCountries(query: string): Promise<Country[]> {
        if (!query.trim()) return [];
        try {
            const response = await fetch(`${BASE_URL}/name/${encodeURIComponent(query)}`);
            if (!response.ok) {
                if (response.status === 404) return [];
                throw new Error(`HTTP ${response.status}`);
            }
            return await response.json();
        }
        catch (error) {
            console.error('Search error:', error);
            return [];
        }
    }

    // Get all countries for explore page with basic fields
    static async getAllCountries(): Promise<Country[]> {
        try {
            const fields = "name,flags,capital,region,currencies,population";
            const response = await fetch(`${BASE_URL}/all?fields=${fields}`);
            if (!response.ok) throw new Error(`HTTP ${response.status}`);
            return await response.json();
        } catch (error) {
            console.error('Fetch all countries error:', error);
            throw error;
        }
    }

    // Get popular countries for default suggestions (no search query)
    static async getPopularCountries(): Promise<Country[]> {
        try {
            const popularCountries = ['United States', 'India', 'China', 'Brazil', 'United Kingdom', 'Germany', 'France', 'Canada', 'Japan', 'Australia'];
            const fields = "name,flags,capital,region,currencies,population";

            // Fetch each popular country individually and combine results
            const promises = popularCountries.map(country =>
                fetch(`${BASE_URL}/name/${encodeURIComponent(country)}?fullText=true&fields=${fields}`)
                    .then(res => res.ok ? res.json() : [])
                    .then(data => Array.isArray(data) ? data[0] : data)
                    .catch(() => null)
            );

            const results = await Promise.all(promises);
            return results.filter(Boolean);
        } catch (error) {
            console.error('Fetch popular countries error:', error);
            return [];
        }
    }

    static async getCountryByName(name: string): Promise<Country | null> {
        try {
            if (!name?.trim()) return null;
            const response = await fetch(`${BASE_URL}/name/${encodeURIComponent(name)}?fullText=true`);
            if (!response.ok) return null;
            const countries = await response.json();
            return countries[0] || null;
        } catch (error) {
            console.error('Fetch country error:', error);
            return null;
        }
    }

    static async getCountriesByCodes(codes: string[]): Promise<Country[]> {
        if (!codes.length) return [];
        try {
            const fields = "name,flags,capital,region,currencies,population";
            const response = await fetch(`${BASE_URL}/alpha?codes=${codes.join(',')}&fields=${fields}`);
            if (!response.ok) return [];
            return await response.json();
        } catch (error) {
            console.error('Fetch by codes error:', error);
            return [];
        }
    }
}
