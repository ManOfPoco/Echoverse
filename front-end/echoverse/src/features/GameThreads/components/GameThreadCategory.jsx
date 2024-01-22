function GameThreadCategory({ category, isNextCategory }) {
    return (
        <>
            <div>{category}</div>
            {isNextCategory && <span className="text-gray-clear/50">•</span>}
        </>
    );
}

export default GameThreadCategory;
