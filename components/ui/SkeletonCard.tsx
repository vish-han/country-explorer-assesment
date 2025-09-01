export const SkeletonCard = () => (
    <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg border border-white/20 overflow-hidden animate-pulse">
        <div className="h-48 bg-slate-200" />
        <div className="p-6">
            <div className="h-6 bg-slate-200 rounded mb-3" />
            <div className="space-y-3">
                <div className="flex items-center">
                    <div className="w-4 h-4 bg-slate-200 rounded mr-2" />
                    <div className="h-4 bg-slate-200 rounded flex-1" />
                </div>
                <div className="flex items-center">
                    <div className="w-4 h-4 bg-slate-200 rounded mr-2" />
                    <div className="h-4 bg-slate-200 rounded flex-1" />
                </div>
                <div className="flex items-center">
                    <div className="w-4 h-4 bg-slate-200 rounded mr-2" />
                    <div className="h-4 bg-slate-200 rounded flex-1" />
                </div>
                <div className="flex items-center">
                    <div className="w-4 h-4 bg-slate-200 rounded mr-2" />
                    <div className="h-4 bg-slate-200 rounded flex-1" />
                </div>
            </div>
        </div>
    </div>
);
