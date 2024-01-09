function SimilarStatistics({ commonTime, similarGames }) {
    return (
        <div className="mt-2.5 flex flex-col items-center gap-2.5 text-xs font-semibold text-gray-light">
            <h5>Gaming time in common: {commonTime}%</h5>
            <h5>Similar games: {similarGames} games</h5>
        </div>
    );
}

export default SimilarStatistics;
