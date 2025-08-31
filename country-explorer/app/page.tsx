import { SearchBar } from '@/components/ui/SeachBar';
import Navbar from '@/components/ui/Navbar';
import Image from 'next/image';

export default function HomePage() {
    return (
        <div className="min-h-screen relative overflow-hidden">
            {/* Background Image with Next.js Image optimization */}
            <Image
                src="/img/background_v2.webp"
                alt=""
                width={1920}
                height={1080}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-20000 hover:scale-105"
                priority
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R+Rj+V1F9t7C3iFKHfzLDGDdF8qQPH6dqV//9k="
                sizes="100vw"
                fill={false}
            />

            <Navbar />
            <main className="relative z-10 flex flex-col items-center justify-start pt-2 md:pt-4 px-6 md:px-8">
                <div className="text-center max-w-6xl">
                    <div className="mb-4">
                        <h1
                            className={`
                font-comfortaa  font-bold leading-[1.1] tracking-tight
                text-3xl md:text-4xl lg:text-5xl xl:text-6xl
                animate-fade-in-up
              `}
                        >
              <span className="inline-block text-gray-900 font-extrabold">
                Inspiring{' '}
                  <span className="relative">
                  <span className="relative z-10 bg-gradient-to-r from-orange-400 to-orange-500 bg-clip-text text-transparent">
                    Explorations
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-orange-200 to-orange-300 blur-sm opacity-50"></span>
                </span>{' '}
                  and
              </span>
                            <br />
                            <span className="inline-block text-gray-900 font-extrabold">
                Endless{' '}
                                <span className="relative">
                  <span className="relative z-10 bg-gradient-to-r from-orange-400 to-orange-500 bg-clip-text text-transparent">
                    Possibilities
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-orange-200 to-orange-300 blur-sm opacity-50"></span>
                </span>
              </span>
                        </h1>
                    </div>

                    {/* Enhanced Subtitle */}
                    <p
                        className={`
              font-[var(--font-inter)] text-base md:text-lg lg:text-xl
              leading-relaxed tracking-wide text-gray-700 max-w-3xl mx-auto mb-6
              ${ 'animate-fade-in-up' }
            `}
                        style={{ animationDelay: '0.2s' }}
                    >
                        Discover detailed information about every nation worldwide with
                        <span className="font-semibold text-orange-500"> Country Explorer</span>, where your wanderlust can be transformed into memorable journeys.
                    </p>

                    {/* Enhanced Search Section */}
                    <div
                        className={`
              max-w-2xl mx-auto mb-4
              animate-fade-in-up
            `}
                        style={{ animationDelay: '0.4s' }}
                    >
                        <div className="relative group">
                            {/* Search Container with Enhanced Styling */}
                            <div className="backdrop-blur-xl bg-white/90 rounded-2xl p-3 shadow-2xl ring-1 ring-gray-200 group-hover:ring-orange-300 transition-all duration-300 group-hover:shadow-3xl">
                                <SearchBar className="w-full" placeholder="Search countries, capitals, regions..." />
                            </div>

                            {/* Enhanced Glowing Effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-orange-400/30 via-orange-500/30 to-orange-400/30 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500 -z-10" />
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
