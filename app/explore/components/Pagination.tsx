import React, { useEffect, useMemo, useState } from 'react';
import {
    ChevronLeft,
    ChevronRight,
    MoreHorizontal,
    ChevronsLeft,
    ChevronsRight
} from 'lucide-react';

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
    itemsPerPage: number;
    totalItems: number;
    showItemsPerPage?: boolean;
    onItemsPerPageChange?: (itemsPerPage: number) => void;
}

/**
 * Responsive, accessible pagination that:
 * - Wraps and avoids horizontal overflow on small screens
 * - Trims visible page numbers on mobile
 * - Adds ARIA attributes for screen readers
 */
export default function Pagination({
                                       currentPage,
                                       totalPages,
                                       onPageChange,
                                       itemsPerPage,
                                       totalItems,
                                       showItemsPerPage = true,
                                       onItemsPerPageChange
                                   }: PaginationProps) {
    // Simple reactive media query to adjust visible neighbors on small screens
    const [isSmall, setIsSmall] = useState(true);
    useEffect(() => {
        if (typeof window === 'undefined') return;
        const mq = window.matchMedia('(max-width: 640px)');
        const update = () => setIsSmall(mq.matches);
        update();
        mq.addEventListener('change', update);
        return () => mq.removeEventListener('change', update);
    }, []);

    const { maxVisible, siblingCount, edgeCount } = useMemo(() => {
        return isSmall
            ? { maxVisible: 5, siblingCount: 0, edgeCount: 1 }
            : { maxVisible: 7, siblingCount: 1, edgeCount: 2 };
    }, [isSmall]);

    const getPageNumbers = () => {
        const pages: (number | 'ellipsis')[] = [];

        if (totalPages <= maxVisible) {
            for (let i = 1; i <= totalPages; i++) pages.push(i);
            return pages;
        }

        pages.push(1);

        const left = Math.max(2, currentPage - siblingCount);
        const right = Math.min(totalPages - 1, currentPage + siblingCount);

        // Left side
        if (left > 2 + (edgeCount - 1)) {
            pages.push('ellipsis');
        } else {
            for (let i = 2; i < left; i++) pages.push(i);
        }

        // Middle
        for (let i = left; i <= right; i++) pages.push(i);

        // Right side
        if (right < totalPages - 1 - (edgeCount - 1)) {
            pages.push('ellipsis');
        } else {
            for (let i = right + 1; i <= totalPages - 1; i++) pages.push(i);
        }

        if (!pages.includes(totalPages)) pages.push(totalPages);

        return Array.from(new Set(pages));
    };

    const startItem = (currentPage - 1) * itemsPerPage + 1;
    const endItem = Math.min(currentPage * itemsPerPage, totalItems);
    const pageNumbers = getPageNumbers();

    const goTo = (p: number) => {
        const page = Math.min(Math.max(1, p), totalPages);
        if (page !== currentPage) onPageChange(page);
    };

    return (
        <nav
            className="flex flex-col gap-3 sm:gap-4 sm:flex-row sm:items-center sm:justify-between px-4 sm:px-6 py-3 sm:py-4 bg-white rounded-xl shadow-lg border border-slate-200"
            aria-label="Pagination"
        >
            {/* Items info + per-page */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-4">
        <span className="text-sm text-slate-600">
          Showing <span className="font-medium">{startItem}</span> to{' '}
            <span className="font-medium">{endItem}</span> of{' '}
            <span className="font-medium">{totalItems}</span> results
        </span>
                {showItemsPerPage && onItemsPerPageChange && (
                    <div className="flex items-center gap-2">
                        <label className="text-sm text-slate-600">Show:</label>
                        <select
                            value={itemsPerPage}
                            onChange={(e) => onItemsPerPageChange(Number(e.target.value))}
                            className="px-2 py-1 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            aria-label="Items per page"
                        >
                            <option value={12}>12</option>
                            <option value={24}>24</option>
                            <option value={48}>48</option>
                            <option value={96}>96</option>
                        </select>
                    </div>
                )}
            </div>

            {/* Controls wrapper: allow wrap; contain any residual overflow on very narrow screens */}
            <div className="w-full sm:w-auto overflow-x-auto sm:overflow-visible">
                <div className="flex flex-wrap items-center gap-2 min-w-0">
                    {/* First */}
                    <button
                        onClick={() => goTo(1)}
                        disabled={currentPage === 1}
                        className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-slate-600 bg-white border border-slate-300 rounded-lg hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed"
                        aria-label="First page"
                    >
                        <ChevronsLeft className="w-4 h-4" />
                        <span className="hidden sm:inline">First</span>
                    </button>

                    {/* Previous */}
                    <button
                        onClick={() => goTo(currentPage - 1)}
                        disabled={currentPage === 1}
                        className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-slate-600 bg-white border border-slate-300 rounded-lg hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed"
                        aria-label="Previous page"
                    >
                        <ChevronLeft className="w-4 h-4" />
                        <span className="hidden sm:inline">Previous</span>
                    </button>

                    {/* Numbers */}
                    <ul className="flex flex-wrap items-center gap-1 min-w-0" role="list">
                        {pageNumbers.map((page, index) => (
                            <li key={`${page}-${index}`} role="listitem" className="min-w-0">
                                {page === 'ellipsis' ? (
                                    <span className="px-3 py-2 text-slate-400 select-none" aria-hidden="true">
                    <MoreHorizontal className="w-4 h-4" />
                  </span>
                                ) : (
                                    <button
                                        onClick={() => goTo(page as number)}
                                        aria-current={currentPage === page ? 'page' : undefined}
                                        aria-label={currentPage === page ? `Page ${page}, current` : `Go to page ${page}`}
                                        className={`min-w-9 px-3 py-2 text-sm font-medium rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500
                      ${currentPage === page
                                            ? 'bg-blue-500 text-white shadow-sm'
                                            : 'text-slate-700 bg-white border border-slate-300 hover:bg-slate-50'}`}
                                    >
                                        {page}
                                    </button>
                                )}
                            </li>
                        ))}
                    </ul>

                    {/* Next */}
                    <button
                        onClick={() => goTo(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-slate-600 bg-white border border-slate-300 rounded-lg hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed"
                        aria-label="Next page"
                    >
                        <span className="hidden sm:inline">Next</span>
                        <ChevronRight className="w-4 h-4" />
                    </button>

                    {/* Last */}
                    <button
                        onClick={() => goTo(totalPages)}
                        disabled={currentPage === totalPages}
                        className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-slate-600 bg-white border border-slate-300 rounded-lg hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed"
                        aria-label="Last page"
                    >
                        <span className="hidden sm:inline">Last</span>
                        <ChevronsRight className="w-4 h-4" />
                    </button>
                </div>
            </div>
        </nav>
    );
}
