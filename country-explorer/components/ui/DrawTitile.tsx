'use client';
import { useEffect, useRef } from 'react';

export function DrawTitle() {
    const svgRef = useRef<SVGSVGElement>(null);

    useEffect(() => {
        const svg = svgRef.current;
        if (!svg) return;
        const paths = svg.querySelectorAll<SVGPathElement>('[data-draw]');
        paths.forEach((p, i) => {
            const len = p.getTotalLength();
            p.style.strokeDasharray = `${len}`;
            p.style.strokeDashoffset = `${len}`;
            p.style.setProperty('--path-length', String(len));
            // Stagger each letter slightly
            p.style.animationDelay = `${i * 0.08}s`;
        });
        // Optional: fill group after stroke finishes
        const fillGroup = svg.querySelector<SVGGElement>('[data-fill]');
        if (fillGroup) {
            const totalDelay = paths.length * 0.08 + 1.8;
            (fillGroup as SVGSVGElement).style.animationDelay = `${totalDelay}s`;
        }
    }, []);

    return (
        <div className="mx-auto w-full flex justify-center">
            <svg
                ref={svgRef}
                viewBox="0 0 1200 260"
                className="w-full max-w-5xl"
                aria-label="Inspiring Explorations and Endless Possibilities"
            >
                {/* Outline group (stroke) — replace paths with your exported headline paths */}
                <g
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="4"
                    className="text-gray-900"
                >
                    {/* Example demo paths — replace with real paths from an SVG export of your headline.
              You can export outlines from Figma/Illustrator (Convert to outlines), then paste here. */}
                    <path data-draw className="animate-draw" d="M50 150 L150 50 L250 150" />
                    <path data-draw className="animate-draw" d="M300 150 Q350 50 400 150" />
                    {/* ...all remaining letters as separate paths */}
                </g>

                {/* Fill group (optional) */}
                <g data-fill className="animate-fill-in text-gray-900">
                    {/* Duplicate the same text as a single filled <text> for crisp fill after stroke */}
                    <text x="50" y="160"
                          fontFamily="var(--font-playfair)"
                          fontWeight="800"
                          fontSize="80"
                    >
                        Inspiring Explorations
                    </text>
                    <text x="50" y="240"
                          fontFamily="var(--font-playfair)"
                          fontWeight="800"
                          fontSize="80"
                    >
                        and Endless Possibilities
                    </text>
                </g>
            </svg>
        </div>
    );
}
