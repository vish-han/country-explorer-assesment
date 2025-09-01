

export interface SearchSuggestion {
    name: {
        common: string;
        official: string;
    };
    flags: {
        png: string;
        svg: string;
        alt: string;
    };
    capital: string[];
    region: string;
    currencies: {
        [currencyCode: string]: {
            name: string;
            symbol: string;
        };
    };
    population: number;
    cca3: string;
}
