export const LoadMoreButton = ({ onClick, loading }: { onClick: () => void; loading: boolean }) => (
    <div className="flex justify-center mt-12">
        <button
            onClick={onClick}
            disabled={loading}
            className="bg-orange-500 hover:bg-orange-600 disabled:bg-orange-300 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl disabled:cursor-not-allowed"
        >
            {loading ? 'Loading...' : 'Load More Countries'}
        </button>
    </div>
);
