import {Country} from "@/types/CountryTypes";
import {BASE_URL} from "@/lib/const";

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

    static async getAllCountries(): Promise<Country[]> {
        try {
            const response = await fetch(`${BASE_URL}/all?fields=name,flags,capital,region,currencies,population`);
            if (!response.ok) throw new Error(`HTTP ${response.status}`);
            return await response.json();
        } catch (error) {
            console.error('Fetch all countries error:', error);
            throw error;
        }
    }

    static async getCountryByName(name: string): Promise<Country | null> {
        try {
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
            const response = await fetch(`${BASE_URL}/alpha?codes=${codes.join(',')}&fields=name,flags`);
            if (!response.ok) return [];
            return await response.json();
        } catch (error) {
            console.error('Fetch by codes error:', error);
            return [];
        }
    }

}
