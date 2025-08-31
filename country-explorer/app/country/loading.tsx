export default function Loading(){
    return (
        <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-blue-50 to-purple-50">

            {/* Navbar Skeleton */}
            <div className="bg-white/90 backdrop-blur-sm border-b border-white/20 px-6 py-4">
                <div className="max-w-7xl mx-auto flex items-center justify-between">
                    {/* Logo Skeleton */}
                    <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 rounded-xl shimmer-orange"></div>
                        <div className="h-6 w-32 rounded shimmer"></div>
                    </div>

                    {/* Navigation Links Skeleton */}
                    <div className="hidden md:flex items-center space-x-8">
                        <div className="h-5 w-12 rounded shimmer"></div>
                        <div className="h-5 w-16 rounded shimmer"></div>
                        <div className="h-5 w-16 rounded shimmer"></div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 py-12">
                {/* Header Section Skeleton */}
                <div className="text-center mb-12">
                    <div className="h-16 w-96 mx-auto rounded-lg shimmer mb-4"></div>
                    <div className="h-6 w-64 mx-auto rounded shimmer"></div>
                </div>

                {/* Search Bar Skeleton */}
                <div className="max-w-2xl mx-auto mb-16">
                    <div className="relative">
                        <div className="h-14 w-full rounded-2xl shimmer"></div>
                        <div className="absolute right-2 top-2 w-10 h-10 rounded-xl shimmer-orange"></div>
                    </div>
                </div>

                {/* Country Cards Grid Skeleton */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {[...Array(12)].map((_, index) => (
                        <div key={index} className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 overflow-hidden hover:shadow-xl transition-all duration-300">
                            {/* Flag Image Skeleton */}
                            <div className="relative h-48 overflow-hidden">
                                <div className="w-full h-full shimmer"></div>
                                {/* Optional overlay effect */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
                            </div>

                            {/* Card Content Skeleton */}
                            <div className="p-6">
                                {/* Country Name */}
                                <div className="h-7 w-3/4 rounded-lg shimmer mb-4"></div>

                                {/* Country Info Items */}
                                <div className="space-y-3">
                                    {/* Capital */}
                                    <div className="flex items-center space-x-3">
                                        <div className="w-4 h-4 rounded shimmer-orange"></div>
                                        <div className="h-4 w-24 rounded shimmer"></div>
                                    </div>

                                    {/* Region */}
                                    <div className="flex items-center space-x-3">
                                        <div className="w-4 h-4 rounded shimmer-orange"></div>
                                        <div className="h-4 w-20 rounded shimmer"></div>
                                    </div>

                                    {/* Currency */}
                                    <div className="flex items-center space-x-3">
                                        <div className="w-4 h-4 rounded shimmer-orange"></div>
                                        <div className="h-4 w-32 rounded shimmer"></div>
                                    </div>

                                    {/* Population */}
                                    <div className="flex items-center space-x-3">
                                        <div className="w-4 h-4 rounded shimmer-orange"></div>
                                        <div className="h-4 w-16 rounded shimmer"></div>
                                    </div>
                                </div>

                                {/* Learn More Button Skeleton */}
                                <div className="mt-6 flex items-center justify-between">
                                    <div className="h-5 w-20 rounded shimmer"></div>
                                    <div className="w-5 h-5 rounded shimmer-orange"></div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Load More Button Skeleton (if applicable) */}
                <div className="flex justify-center mt-12">
                    <div className="h-12 w-32 rounded-xl shimmer-orange"></div>
                </div>
            </div>

            {/* Floating Elements (Optional decorative skeletons) */}
            <div className="fixed top-1/4 left-10 w-4 h-4 rounded-full shimmer-orange opacity-30"></div>
            <div className="fixed top-1/3 right-16 w-6 h-6 rounded-full shimmer opacity-20"></div>
            <div className="fixed bottom-1/4 left-1/4 w-3 h-3 rounded-full shimmer-orange opacity-25"></div>
        </div>
    );
};
