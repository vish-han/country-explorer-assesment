import {Country} from "@/types/CountryTypes";

export const formatPopulation = (pop: string | number) => {
    const numValue = typeof pop === 'string' ? parseInt(pop, 10) : pop;
    return new Intl.NumberFormat().format(numValue);
};

export const formatArea = (area: string | number | bigint) => {
    if (typeof area === 'string') {
        const numValue = parseFloat(area);
        return new Intl.NumberFormat().format(numValue);
    }
    return new Intl.NumberFormat().format(area);
};

export const getCurrencyDisplay = (countryData:Country) => {
    if (!countryData.currencies) return 'Data not available';
    const currency = Object.values(countryData.currencies)[0];
    if (!currency) return 'Data not available';
    return `${currency.name} (${currency.symbol})`;
};

export const getLanguages = (countryData:Country) => {
    if (!countryData.languages) return 'Data not available';
    return Object.values(countryData.languages).join(', ');
};

export const getBorders = (countryData:Country) => {
    if (!countryData.borders || countryData.borders.length === 0) {
        return countryData.landlocked ? 'Landlocked explore' : 'Island nation';
    }
    return countryData.borders.join(', ');
};

export const getPhoneCode = (countryData:Country) => {
    if (!countryData.idd) return 'N/A';
    return `${countryData.idd.root}${countryData.idd.suffixes?.[0] || ''}`;
};
