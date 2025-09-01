import { SearchBar } from '@/components/ui/SeachBar'
import Navbar from '@/components/ui/Navbar'
import Image from 'next/image'

export default function HomePage() {
    return (
        <div className="min-h-screen relative">
            {/* Background */}
            <Image
                src="/img/background_v3.webp"
                alt=""
                width={1920}
                height={1080}
                className="
          absolute inset-0 w-full h-full object-cover
          transition-transform ease-out duration-[3000ms] hover:scale-[1.02]
          motion-reduce:transition-none motion-reduce:hover:scale-100
          will-change-transform
        "
                priority
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDA..."
                sizes="100vw"
                fill={false}
            />

            <Navbar />

            <main className="relative z-10 flex flex-col items-center justify-start pt-2 md:pt-4 px-6 md:px-8">
                <div className="text-center max-w-6xl">
                    {/* Hero headline */}
                    <div className="motion-safe:animate-fade-up motion-reduce:animate-none mb-4">
                        <h1
                            className="
                font-comfortaa font-bold leading-[1.1] tracking-tight
                text-3xl md:text-4xl lg:text-5xl xl:text-6xl
              "
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

                    {/* Subtitle */}
                    <p
                        className="
              font-[var(--font-inter)] text-base md:text-lg lg:text-xl
              leading-relaxed tracking-wide text-gray-700 max-w-3xl mx-auto mb-6
              motion-safe:animate-fade-up-delay-1 motion-reduce:animate-none
            "
                    >
                        Discover detailed information about every nation worldwide with
                        <span className="font-semibold text-orange-500"> Country Explorer</span>, where your wanderlust can be transformed into memorable journeys.
                    </p>

                    {/* Search section with scrollable dropdown support */}
                    <div
                        className="
              motion-safe:animate-fade-up-delay-2 motion-reduce:animate-none
              mx-auto mb-4 w-full max-w-[860px]
            "
                    >
                        <div className="relative group">
                            {/* Shell around SearchBar */}
                            <div
                                className="
                  backdrop-blur-xl bg-white/90 rounded-2xl p-3 shadow-2xl ring-1 ring-gray-200
                  transition-all duration-300 ease-out
                  group-hover:ring-orange-300 group-hover:shadow-3xl
                  group-hover:-translate-y-0.5 group-hover:scale-[1.01]
                  focus-within:ring-orange-400
                  motion-reduce:transition-none motion-reduce:group-hover:transform-none
                "
                            >
                                <SearchBar
                                    className="w-full"
                                    placeholder="Search countries that you wanna explore..."
                                />
                            </div>

                            {/* Glow */}
                            <div
                                className="
                  absolute inset-0 bg-gradient-to-r from-orange-400/30 via-orange-500/30 to-orange-400/30 rounded-2xl
                  blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10
                  motion-reduce:transition-none motion-reduce:opacity-0
                "
                            />
                        </div>
                    </div>
                </div>
            </main>

        </div>
    )
}
