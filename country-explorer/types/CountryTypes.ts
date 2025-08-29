export interface Country {
    name: {
        common: string;
        official: string;
    };
    flags: {
        png: string;
        svg: string;
        alt?: string;
    };
    capital?: string[];
    region: string;
    currencies?: {
        [key: string]: {
            name: string;
            symbol: string;
        };
    };
    population: number;
    area: number;
    languages?: {
        [key: string]: string;
    };
    borders?: string[];
    timezones: string[];
    cca3: string;
}

export interface SearchSuggestion {
    name: string;
    flag: string;
}
