import React from 'react';
import { MapPin, Users, Mountain, DollarSign } from 'lucide-react';
import InfoCard from './Infocard';
import { formatArea, formatPopulation, getCurrencyDisplay } from '@/utils/utilites';
import {Country} from "@/types/CountryTypes";

const StatsSection = ({ countryData }:{countryData:Country}) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <InfoCard
                icon={MapPin}
                title="Capital"
                value={countryData.capital?.[0] || 'N/A'}
                subtitle={`${countryData.capitalInfo?.latlng?.[0]?.toFixed(1)}°, ${countryData.capitalInfo?.latlng?.[1]?.toFixed(1)}°`}
            />
            <InfoCard
                icon={Users}
                title="Population"
                value={formatPopulation(countryData.population)}
                subtitle="People"
            />
            <InfoCard
                icon={Mountain}
                title="Area"
                value={`${formatArea(countryData.area)} km²`}
                subtitle={countryData.landlocked ? 'Landlocked' : 'Coastal'}
            />
            <InfoCard
                icon={DollarSign}
                title="Currency"
                value={getCurrencyDisplay(countryData)}
            />
        </div>
    );
};

export default StatsSection;
