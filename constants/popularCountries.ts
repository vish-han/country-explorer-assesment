// constants/popularCountries.ts

import { Country } from '@/types/CountryTypes';

export const POPULAR_COUNTRIES: Country[] = [
    {
        name: {
            common: "United States",
            official: "United States of America"
        },
        cca2: "US",
        cca3: "USA",
        status: "officially-assigned",
        unMember: true,
        flags: {
            png: "https://flagcdn.com/w320/us.png",
            svg: "https://flagcdn.com/us.svg",
            alt: "The flag of the United States of America is composed of thirteen equal horizontal bands of red alternating with white. A blue rectangle, bearing fifty small five-pointed white stars arranged in nine rows where rows of six stars alternate with rows of five stars, is superimposed on the hoist side of the flag."
        },
        capital: ["Washington, D.C."],
        region: "Americas",
        currencies: {
            USD: {
                name: "United States dollar",
                symbol: "$"
            }
        },
        population: 329484123,
        latlng: [38.0, -97.0],
        landlocked: false,
        area: 9372610,
        timezones: ["UTC-12:00", "UTC-11:00", "UTC-10:00", "UTC-09:00", "UTC-08:00", "UTC-07:00", "UTC-06:00", "UTC-05:00", "UTC-04:00", "UTC+10:00", "UTC+12:00"],
        subregion: "North America",
        continents: ["North America"]
    },
    {
        name: {
            common: "India",
            official: "Republic of India"
        },
        cca2: "IN",
        cca3: "IND",
        status: "officially-assigned",
        unMember: true,
        flags: {
            png: "https://flagcdn.com/w320/in.png",
            svg: "https://flagcdn.com/in.svg",
            alt: "The flag of India is composed of three equal horizontal bands of saffron, white and green. A navy blue wheel with twenty-four spokes is centered in the white band."
        },
        capital: ["New Delhi"],
        region: "Asia",
        currencies: {
            INR: {
                name: "Indian rupee",
                symbol: "₹"
            }
        },
        population: 1380004385,
        latlng: [20.0, 77.0],
        landlocked: false,
        area: 3287263,
        timezones: ["UTC+05:30"],
        subregion: "Southern Asia",
        continents: ["Asia"]
    },
    {
        name: {
            common: "China",
            official: "People's Republic of China"
        },
        cca2: "CN",
        cca3: "CHN",
        status: "officially-assigned",
        unMember: true,
        flags: {
            png: "https://flagcdn.com/w320/cn.png",
            svg: "https://flagcdn.com/cn.svg",
            alt: "The flag of China has a red field. In the canton are five yellow five-pointed stars — a large star and four smaller stars to the right of the large star in a vertical arc."
        },
        capital: ["Beijing"],
        region: "Asia",
        currencies: {
            CNY: {
                name: "Chinese yuan",
                symbol: "¥"
            }
        },
        population: 1439323776,
        latlng: [35.0, 105.0],
        landlocked: false,
        area: 9596961,
        timezones: ["UTC+08:00"],
        subregion: "Eastern Asia",
        continents: ["Asia"]
    },
    {
        name: {
            common: "Brazil",
            official: "Federative Republic of Brazil"
        },
        cca2: "BR",
        cca3: "BRA",
        status: "officially-assigned",
        unMember: true,
        flags: {
            png: "https://flagcdn.com/w320/br.png",
            svg: "https://flagcdn.com/br.svg",
            alt: "The flag of Brazil has a green field with a large yellow rhombus in the center. Within the rhombus is a dark blue celestial globe with twenty-seven small five-pointed white stars and a white banner inscribed with 'Ordem e Progresso' across its center."
        },
        capital: ["Brasília"],
        region: "Americas",
        currencies: {
            BRL: {
                name: "Brazilian real",
                symbol: "R$"
            }
        },
        population: 212559409,
        latlng: [-10.0, -55.0],
        landlocked: false,
        area: 8515767,
        timezones: ["UTC-05:00", "UTC-04:00", "UTC-03:00", "UTC-02:00"],
        subregion: "South America",
        continents: ["South America"]
    },
    {
        name: {
            common: "United Kingdom",
            official: "United Kingdom of Great Britain and Northern Ireland"
        },
        cca2: "GB",
        cca3: "GBR",
        status: "officially-assigned",
        unMember: true,
        flags: {
            png: "https://flagcdn.com/w320/gb.png",
            svg: "https://flagcdn.com/gb.svg",
            alt: "The flag of the United Kingdom — the Union Jack — has a blue field. It features the white-edged red cross of Saint George superimposed on the diagonal white-edged red cross of Saint Patrick which is superimposed on the diagonal white cross of Saint Andrew."
        },
        capital: ["London"],
        region: "Europe",
        currencies: {
            GBP: {
                name: "British pound",
                symbol: "£"
            }
        },
        population: 67886004,
        latlng: [54.0, -2.0],
        landlocked: false,
        area: 242495,
        timezones: ["UTC-08:00", "UTC-05:00", "UTC-04:00", "UTC-03:00", "UTC-02:00", "UTC+00:00", "UTC+01:00", "UTC+06:00"],
        subregion: "Northern Europe",
        continents: ["Europe"]
    },
    {
        name: {
            common: "Germany",
            official: "Federal Republic of Germany"
        },
        cca2: "DE",
        cca3: "DEU",
        status: "officially-assigned",
        unMember: true,
        flags: {
            png: "https://flagcdn.com/w320/de.png",
            svg: "https://flagcdn.com/de.svg",
            alt: "The flag of Germany is composed of three equal horizontal bands of black, red and gold."
        },
        capital: ["Berlin"],
        region: "Europe",
        currencies: {
            EUR: {
                name: "Euro",
                symbol: "€"
            }
        },
        population: 83240525,
        latlng: [51.0, 9.0],
        landlocked: false,
        area: 357114,
        timezones: ["UTC+01:00"],
        subregion: "Western Europe",
        continents: ["Europe"]
    },
    {
        name: {
            common: "France",
            official: "French Republic"
        },
        cca2: "FR",
        cca3: "FRA",
        status: "officially-assigned",
        unMember: true,
        flags: {
            png: "https://flagcdn.com/w320/fr.png",
            svg: "https://flagcdn.com/fr.svg",
            alt: "The flag of France is composed of three equal vertical bands of blue, white and red."
        },
        capital: ["Paris"],
        region: "Europe",
        currencies: {
            EUR: {
                name: "Euro",
                symbol: "€"
            }
        },
        population: 67391582,
        latlng: [46.0, 2.0],
        landlocked: false,
        area: 551695,
        timezones: ["UTC-10:00", "UTC-09:30", "UTC-09:00", "UTC-08:00", "UTC-04:00", "UTC-03:00", "UTC+01:00", "UTC+03:00", "UTC+04:00", "UTC+05:00", "UTC+11:00", "UTC+12:00"],
        subregion: "Western Europe",
        continents: ["Europe"]
    },
    {
        name: {
            common: "Japan",
            official: "Japan"
        },
        cca2: "JP",
        cca3: "JPN",
        status: "officially-assigned",
        unMember: true,
        flags: {
            png: "https://flagcdn.com/w320/jp.png",
            svg: "https://flagcdn.com/jp.svg",
            alt: "The flag of Japan features a crimson-red circle at the center of a white field."
        },
        capital: ["Tokyo"],
        region: "Asia",
        currencies: {
            JPY: {
                name: "Japanese yen",
                symbol: "¥"
            }
        },
        population: 125836021,
        latlng: [36.0, 138.0],
        landlocked: false,
        area: 377930,
        timezones: ["UTC+09:00"],
        subregion: "Eastern Asia",
        continents: ["Asia"]
    }
];
