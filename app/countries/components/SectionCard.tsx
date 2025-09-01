import React from 'react';

const SectionCard = ({ title, children }:{title:string,children:React.ReactNode}) => (
    <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/20">
        <h2 className="text-xl font-bold text-slate-800 mb-6 flex items-center">
            <span className="w-1 h-6 bg-gradient-to-b from-orange-500 to-orange-600 rounded-full mr-3"></span>
            {title}
        </h2>
        {children}
    </div>
);

export default SectionCard;
