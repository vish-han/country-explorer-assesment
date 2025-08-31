export default function Loading(){
    // Skeleton animation class
    const skeletonClass = "animate-pulse bg-gradient-to-r from-slate-200 via-slate-300 to-slate-200 bg-[length:200%_100%]";

    return (
        <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-blue-50 to-purple-50">
            {/* Navbar Skeleton */}
            <div className="h-16 bg-white/90 backdrop-blur-sm border-b border-white/20">
                <div className="max-w-7xl mx-auto px-6 py-4">
                    <div className={`h-8 w-32 rounded-lg ${skeletonClass}`}></div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 py-8">
                {/* Hero Section Skeleton */}
                <div className="mb-12">
                    <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl overflow-hidden border border-white/20">
                        <div className="grid grid-cols-1 lg:grid-cols-2">
                            {/* Flag Section Skeleton */}
                            <div className="relative h-80 overflow-hidden">
                                <div className={`w-full h-full ${skeletonClass}`}></div>
                                <div className="absolute bottom-6 left-6 space-y-3">
                                    <div className={`h-12 w-64 rounded-lg ${skeletonClass}`}></div>
                                    <div className={`h-6 w-48 rounded-lg ${skeletonClass}`}></div>
                                    <div className="flex space-x-4">
                                        <div className={`h-8 w-20 rounded-full ${skeletonClass}`}></div>
                                        <div className={`h-8 w-24 rounded-full ${skeletonClass}`}></div>
                                    </div>
                                </div>
                            </div>

                            {/* Map Section Skeleton */}
                            <div className="relative h-80 bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center">
                                <div className={`w-full h-full m-6 rounded-lg ${skeletonClass}`}></div>
                                <div className="absolute top-4 right-4">
                                    <div className={`h-16 w-24 rounded-lg ${skeletonClass}`}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Quick Stats Grid Skeleton */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                    {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/20">
                            <div className="flex items-start space-x-4">
                                <div className={`w-12 h-12 rounded-lg ${skeletonClass}`}></div>
                                <div className="flex-1 space-y-2">
                                    <div className={`h-4 w-20 rounded ${skeletonClass}`}></div>
                                    <div className={`h-6 w-24 rounded ${skeletonClass}`}></div>
                                    <div className={`h-3 w-16 rounded ${skeletonClass}`}></div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Main Content Grid Skeleton */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Geography & Location Skeleton */}
                    <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/20">
                        <div className="flex items-center mb-6">
                            <div className={`w-1 h-6 rounded-full mr-3 ${skeletonClass}`}></div>
                            <div className={`h-6 w-48 rounded ${skeletonClass}`}></div>
                        </div>
                        <div className="space-y-4">
                            {[1, 2, 3, 4, 5].map((i) => (
                                <div key={i} className="flex justify-between items-center py-3 border-b border-slate-100">
                                    <div className={`h-4 w-20 rounded ${skeletonClass}`}></div>
                                    <div className={`h-4 w-32 rounded ${skeletonClass}`}></div>
                                </div>
                            ))}
                            <div className="flex items-center justify-center mt-6">
                                <div className={`h-12 w-48 rounded-xl ${skeletonClass}`}></div>
                            </div>
                        </div>
                    </div>

                    {/* Government & Administration Skeleton */}
                    <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/20">
                        <div className="flex items-center mb-6">
                            <div className={`w-1 h-6 rounded-full mr-3 ${skeletonClass}`}></div>
                            <div className={`h-6 w-56 rounded ${skeletonClass}`}></div>
                        </div>
                        <div className="space-y-4">
                            {[1, 2, 3, 4, 5].map((i) => (
                                <div key={i} className="flex justify-between items-center py-3 border-b border-slate-100">
                                    <div className={`h-4 w-24 rounded ${skeletonClass}`}></div>
                                    <div className={`h-4 w-20 rounded ${skeletonClass}`}></div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Communication & Codes Skeleton */}
                    <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/20">
                        <div className="flex items-center mb-6">
                            <div className={`w-1 h-6 rounded-full mr-3 ${skeletonClass}`}></div>
                            <div className={`h-6 w-52 rounded ${skeletonClass}`}></div>
                        </div>
                        <div className="space-y-4">
                            {[1, 2, 3, 4, 5, 6, 7].map((i) => (
                                <div key={i} className="flex justify-between items-center py-3 border-b border-slate-100">
                                    <div className={`h-4 w-28 rounded ${skeletonClass}`}></div>
                                    <div className={`h-4 w-16 rounded ${skeletonClass}`}></div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Culture & Society Skeleton */}
                    <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/20">
                        <div className="flex items-center mb-6">
                            <div className={`w-1 h-6 rounded-full mr-3 ${skeletonClass}`}></div>
                            <div className={`h-6 w-44 rounded ${skeletonClass}`}></div>
                        </div>
                        <div className="space-y-4">
                            {[1, 2, 3, 4, 5, 6].map((i) => (
                                <div key={i} className="py-3 border-b border-slate-100">
                                    <div className={`h-4 w-20 rounded mb-2 ${skeletonClass}`}></div>
                                    <div className={`h-4 w-40 rounded ${skeletonClass}`}></div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Alternative Names Section Skeleton */}
                <div className="mt-8">
                    <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/20">
                        <div className="flex items-center mb-6">
                            <div className={`w-1 h-6 rounded-full mr-3 ${skeletonClass}`}></div>
                            <div className={`h-6 w-60 rounded ${skeletonClass}`}></div>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {[1, 2, 3, 4, 5, 6].map((i) => (
                                <div key={i} className={`h-8 w-20 rounded-lg ${skeletonClass}`}></div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Native Names Section Skeleton */}
                <div className="mt-8">
                    <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/20">
                        <div className="flex items-center mb-6">
                            <div className={`w-1 h-6 rounded-full mr-3 ${skeletonClass}`}></div>
                            <div className={`h-6 w-32 rounded ${skeletonClass}`}></div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {[1, 2, 3, 4].map((i) => (
                                <div key={i} className="p-4 bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl border border-slate-200">
                                    <div className={`h-4 w-8 rounded mb-2 ${skeletonClass}`}></div>
                                    <div className="space-y-2">
                                        <div className={`h-4 w-full rounded ${skeletonClass}`}></div>
                                        <div className={`h-4 w-3/4 rounded ${skeletonClass}`}></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Flag Description Skeleton */}
                <div className="mt-8">
                    <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/20">
                        <div className="flex items-center mb-6">
                            <div className={`w-1 h-6 rounded-full mr-3 ${skeletonClass}`}></div>
                            <div className={`h-6 w-36 rounded ${skeletonClass}`}></div>
                        </div>
                        <div className="p-6 bg-gradient-to-br from-orange-50 to-yellow-50 rounded-xl border border-orange-200">
                            <div className="flex items-start space-x-4">
                                <div className={`w-6 h-6 rounded mt-1 flex-shrink-0 ${skeletonClass}`}></div>
                                <div className="space-y-2 flex-1">
                                    <div className={`h-4 w-full rounded ${skeletonClass}`}></div>
                                    <div className={`h-4 w-3/4 rounded ${skeletonClass}`}></div>
                                    <div className={`h-4 w-1/2 rounded ${skeletonClass}`}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* External Links Skeleton */}
                <div className="mt-8">
                    <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/20">
                        <div className="flex items-center mb-6">
                            <div className={`w-1 h-6 rounded-full mr-3 ${skeletonClass}`}></div>
                            <div className={`h-6 w-32 rounded ${skeletonClass}`}></div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {[1, 2].map((i) => (
                                <div key={i} className="p-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl border border-blue-200">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center space-x-3">
                                            <div className={`w-5 h-5 rounded ${skeletonClass}`}></div>
                                            <div className={`h-4 w-24 rounded ${skeletonClass}`}></div>
                                        </div>
                                        <div className={`w-4 h-4 rounded ${skeletonClass}`}></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Coat of Arms Skeleton */}
                <div className="mt-8">
                    <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/20">
                        <div className="flex items-center mb-6">
                            <div className={`w-1 h-6 rounded-full mr-3 ${skeletonClass}`}></div>
                            <div className={`h-6 w-32 rounded ${skeletonClass}`}></div>
                        </div>
                        <div className="flex justify-center">
                            <div className="p-8 bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl border border-slate-200">
                                <div className={`h-32 w-32 rounded ${skeletonClass}`}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

