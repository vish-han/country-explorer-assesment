
import React from 'react';
import { Globe, MapPin, ExternalLink, Flag } from 'lucide-react';
import SectionCard from './SectionCard';
import { getPhoneCode, getLanguages } from '@/utils/utilites';
import {Country} from "@/types/CountryTypes";
import Image from "next/image";

const CountryDetailsSections = ({ countryData, getBorders }:{countryData:Country,getBorders:()=>string}) => {
    return (
        <>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <SectionCard title="Geography & Location">
                    <div className="space-y-4">
                        <div className="flex justify-between items-center py-3 border-b border-slate-100">
                            <span className="text-slate-600">Region</span>
                            <span className="font-medium text-slate-800">{countryData.region}</span>
                        </div>
                        <div className="flex justify-between items-center py-3 border-b border-slate-100">
                            <span className="text-slate-600">Subregion</span>
                            <span className="font-medium text-slate-800">{countryData.subregion}</span>
                        </div>
                        <div className="flex justify-between items-center py-3 border-b border-slate-100">
                            <span className="text-slate-600">Coordinates</span>
                            <span className="font-medium text-slate-800">
                {countryData.latlng[0]}°, {countryData.latlng[1]}°
              </span>
                        </div>
                        <div className="flex justify-between items-center py-3 border-b border-slate-100">
                            <span className="text-slate-600">Continents</span>
                            <span className="font-medium text-slate-800">{countryData.continents?.join(', ')}</span>
                        </div>
                        <div className="flex justify-between items-center py-3 border-b border-slate-100">
                            <span className="text-slate-600">Borders</span>
                            <span className="font-medium text-slate-800">{getBorders()}</span>
                        </div>
                        <div className="flex items-center justify-center mt-6">
                            <a
                                href={countryData.maps?.googleMaps }
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center space-x-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-3 rounded-xl hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                            >
                                <Globe className="w-5 h-5" />
                                <span>View on Google Maps</span>
                                <ExternalLink className="w-4 h-4" />
                            </a>
                        </div>
                    </div>
                </SectionCard>

                <SectionCard title="Government & Administration">
                    <div className="space-y-4">
                        <div className="flex justify-between items-center py-3 border-b border-slate-100">
                            <span className="text-slate-600">Status</span>
                            <span className="font-medium text-slate-800 capitalize">{countryData.status.replace('-', ' ')}</span>
                        </div>
                        <div className="flex justify-between items-center py-3 border-b border-slate-100">
                            <span className="text-slate-600">Independent</span>
                            <span className={`font-medium ${countryData.independent ? 'text-green-600' : 'text-orange-600'}`}>
                {countryData.independent ? 'Yes' : 'No'}
              </span>
                        </div>
                        <div className="flex justify-between items-center py-3 border-b border-slate-100">
                            <span className="text-slate-600">UN Member</span>
                            <span className={`font-medium ${countryData.unMember ? 'text-green-600' : 'text-orange-600'}`}>
                {countryData.unMember ? 'Yes' : 'No'}
              </span>
                        </div>
                        <div className="flex justify-between items-center py-3 border-b border-slate-100">
                            <span className="text-slate-600">Week starts on</span>
                            <span className="font-medium text-slate-800 capitalize">{countryData.startOfWeek}</span>
                        </div>
                        {countryData.gini && (
                            <div className="flex justify-between items-center py-3 border-b border-slate-100">
                                <span className="text-slate-600">Gini Index</span>
                                <span className="font-medium text-slate-800">
                  {Object.values(countryData.gini)[0]} ({Object.keys(countryData.gini)[0]})
                </span>
                            </div>
                        )}
                    </div>
                </SectionCard>

                <SectionCard title="Communication & Codes">
                    <div className="space-y-4">
                        <div className="flex justify-between items-center py-3 border-b border-slate-100">
                            <span className="text-slate-600">Phone Code</span>
                            <span className="font-medium text-slate-800">{getPhoneCode(countryData)}</span>
                        </div>
                        <div className="flex justify-between items-center py-3 border-b border-slate-100">
                            <span className="text-slate-600">Top Level Domain</span>
                            <span className="font-medium text-slate-800">{countryData.tld?.join(', ')}</span>
                        </div>
                        <div className="flex justify-between items-center py-3 border-b border-slate-100">
                            <span className="text-slate-600">ISO Code (Alpha-2)</span>
                            <span className="font-medium text-slate-800">{countryData.cca2}</span>
                        </div>
                        <div className="flex justify-between items-center py-3 border-b border-slate-100">
                            <span className="text-slate-600">ISO Code (Alpha-3)</span>
                            <span className="font-medium text-slate-800">{countryData.cca3}</span>
                        </div>
                        <div className="flex justify-between items-center py-3 border-b border-slate-100">
                            <span className="text-slate-600">Numeric Code</span>
                            <span className="font-medium text-slate-800">{countryData.ccn3}</span>
                        </div>
                        {countryData.cioc && (
                            <div className="flex justify-between items-center py-3 border-b border-slate-100">
                                <span className="text-slate-600">Olympic Code</span>
                                <span className="font-medium text-slate-800">{countryData.cioc}</span>
                            </div>
                        )}
                        {countryData.fifa && (
                            <div className="flex justify-between items-center py-3 border-b border-slate-100">
                                <span className="text-slate-600">FIFA Code</span>
                                <span className="font-medium text-slate-800">{countryData.fifa}</span>
                            </div>
                        )}
                    </div>
                </SectionCard>

                <SectionCard title="Culture & Society">
                    <div className="space-y-4">
                        <div className="py-3 border-b border-slate-100">
                            <span className="text-slate-600 block mb-2">Languages</span>
                            <span className="font-medium text-slate-800">{getLanguages(countryData)}</span>
                        </div>
                        <div className="py-3 border-b border-slate-100">
                            <span className="text-slate-600 block mb-2">Demonyms</span>
                            <span className="font-medium text-slate-800">
                {countryData.demonyms?.eng?.m || 'N/A'} (male), {countryData.demonyms?.eng?.f || 'N/A'} (female)
              </span>
                        </div>
                        <div className="py-3 border-b border-slate-100">
                            <span className="text-slate-600 block mb-2">Driving Side</span>
                            <span className="font-medium text-slate-800 capitalize">{countryData.car?.side || 'N/A'}</span>
                        </div>
                        <div className="py-3 border-b border-slate-100">
                            <span className="text-slate-600 block mb-2">Car Signs</span>
                            <span className="font-medium text-slate-800">{countryData.car?.signs?.join(', ') || 'N/A'}</span>
                        </div>
                        <div className="py-3 border-b border-slate-100">
                            <span className="text-slate-600 block mb-2">Timezone</span>
                            <span className="font-medium text-slate-800">{countryData.timezones.join(', ')}</span>
                        </div>
                        {countryData.postalCode?.format && (
                            <div className="py-3 border-b border-slate-100">
                                <span className="text-slate-600 block mb-2">Postal Code Format</span>
                                <span className="font-medium text-slate-800">{countryData.postalCode.format}</span>
                            </div>
                        )}
                    </div>
                </SectionCard>
            </div>
            {countryData.altSpellings && countryData.altSpellings.length > 0 && (
                <div className="mt-8">
                    <SectionCard title="Alternative Names & Spellings">
                        <div className="flex flex-wrap gap-2">
                            {countryData.altSpellings.map((spelling, index) => (
                                <span
                                    key={index}
                                    className="px-3 py-2 bg-gradient-to-r from-cyan-100 to-blue-100 text-slate-700 rounded-lg text-sm font-medium border border-cyan-200"
                                >
                  {spelling}
                </span>
                            ))}
                        </div>
                    </SectionCard>
                </div>
            )}

            {/* Native Names Section */}
            {countryData.name.nativeName && (
                <div className="mt-8">
                    <SectionCard title="Native Names">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {Object.entries(countryData.name.nativeName).map(([langCode, names]) => (
                                <div key={langCode} className="p-4 bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl border border-slate-200">
                                    <h4 className="font-semibold text-slate-800 mb-2 uppercase text-sm tracking-wide">{langCode}</h4>
                                    <div className="space-y-1">
                                        <p className="text-slate-700"><span className="font-medium">Common:</span> {names.common}</p>
                                        <p className="text-slate-700"><span className="font-medium">Official:</span> {names.official}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </SectionCard>
                </div>
            )}

            {countryData.flags.alt && (
                <div className="mt-8">
                    <SectionCard title="Flag Description">
                        <div className="p-6 bg-gradient-to-br from-orange-50 to-yellow-50 rounded-xl border border-orange-200">
                            <div className="flex items-start space-x-4">
                                <Flag className="w-6 h-6 text-orange-600 mt-1 flex-shrink-0" />
                                <p className="text-slate-700 leading-relaxed">{countryData.flags.alt}</p>
                            </div>
                        </div>
                    </SectionCard>
                </div>
            )}

            <div className="mt-8">
                <SectionCard title="Explore Further">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <a
                            href={countryData.maps?.googleMaps}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-between p-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl border border-blue-200 hover:border-blue-300 transition-all duration-300 group"
                        >
                            <div className="flex items-center space-x-3">
                                <Globe className="w-5 h-5 text-blue-600" />
                                <span className="font-medium text-slate-800">Google Maps</span>
                            </div>
                            <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-blue-600 transition-colors" />
                        </a>
                        <a
                            href={countryData.maps?.openStreetMaps}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-between p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-200 hover:border-green-300 transition-all duration-300 group"
                        >
                            <div className="flex items-center space-x-3">
                                <MapPin className="w-5 h-5 text-green-600" />
                                <span className="font-medium text-slate-800">OpenStreetMap</span>
                            </div>
                            <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-green-600 transition-colors" />
                        </a>
                    </div>
                </SectionCard>
            </div>

            {/* Coat of Arms */}
            {countryData.coatOfArms?.png && (
                <div className="mt-8">
                    <SectionCard title="Coat of Arms">
                        <div className="flex justify-center">
                            <div className="p-8 bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl border border-slate-200">
                                <Image
                                    src={countryData.coatOfArms.png}
                                    alt={`Coat of Arms of ${countryData.name.common}`}
                                    className="max-h-32 mx-auto"
                                    loading="lazy"
                                    width={32}
                                    height={32}
                                />
                            </div>
                        </div>
                    </SectionCard>
                </div>
            )}
        </>
    );
};

export default CountryDetailsSections;
