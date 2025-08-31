import React from 'react';

const InfoCard = ({ icon: Icon, title, value, subtitle = null }) => (
    <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300">
        <div className="flex items-start space-x-4">
            <div className="p-3 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg shadow-lg">
                <Icon className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1">
                <h3 className="font-semibold text-slate-800 mb-1">{title}</h3>
                <p className="text-slate-600 text-lg font-medium">{value}</p>
                {subtitle && <p className="text-slate-500 text-sm mt-1">{subtitle}</p>}
            </div>
        </div>
    </div>
);

export default InfoCard;
