import {Country} from "@/types/CountryTypes";
import {ChevronRight, DollarSign, Globe, MapPin, Users} from "lucide-react";
import Image from 'next/image'

export  const CountryCard = ({ country }: { country: Country; }) => {

    const getCurrencyDisplay = () => {
        if (!country.currencies) return 'Data not available';
        const currency = Object.values(country.currencies)[0];
        if (!currency) return 'Data not available';
        return `${currency.name} (${currency.symbol})`;
    };

    const formatPopulation = (pop: number) => {
        if (pop >= 1000000) {
            return `${(pop / 1000000).toFixed(1)}M`;
        } else if (pop >= 1000) {
            return `${(pop / 1000).toFixed(0)}K`;
        }
        return pop.toString();
    };

    return (
        <div
            className="group bg-white/90 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer border border-white/20 hover:border-orange-200 hover:-translate-y-2 overflow-hidden"
        >
            {/* Flag Section - Visually Prioritized */}
            <div className="relative h-48 overflow-hidden">
                <img
                    src={country.flags.png}
                    alt={country.flags.alt || `Flag of ${country.name.common}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            {/* Content Section */}
            <div className="p-6">
                {/* Country Name - Primary Hierarchy */}
                <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-orange-600 transition-colors duration-200">
                    {country.name.common}
                </h3>

                {/* Key Information Grid */}
                <div className="space-y-3">
                    {/* Capital */}
                    <div className="flex items-center text-slate-600">
                        <MapPin className="w-4 h-4 mr-2 text-orange-500 flex-shrink-0" />
                        <span className="text-sm">
              <span className="font-medium">Capital:</span> {country.capital?.[0] || 'N/A'}
            </span>
                    </div>

                    {/* Region */}
                    <div className="flex items-center text-slate-600">
                        <Globe className="w-4 h-4 mr-2 text-cyan-500 flex-shrink-0" />
                        <span className="text-sm">
              <span className="font-medium">Region:</span> {country.region}
            </span>
                    </div>

                    {/* Currency */}
                    <div className="flex items-center text-slate-600">
                        <DollarSign className="w-4 h-4 mr-2 text-green-500 flex-shrink-0" />
                        <span className="text-sm">
              <span className="font-medium">Currency:</span> {getCurrencyDisplay()}
            </span>
                    </div>

                    {/* Population */}
                    <div className="flex items-center text-slate-600">
                        <Users className="w-4 h-4 mr-2 text-blue-500 flex-shrink-0" />
                        <span className="text-sm">
              <span className="font-medium">Population:</span> {formatPopulation(country.population)}
            </span>
                    </div>
                </div>

                {/* Action Indicator */}
                <div className="flex items-center justify-between mt-6 pt-4 border-t border-slate-200">
                    <span className="text-sm text-slate-500">Learn more</span>
                    <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-orange-500 group-hover:translate-x-1 transition-all duration-200" />
                </div>
            </div>
        </div>
    );
};
