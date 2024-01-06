import GameCard from "./GameCard";

function GameCards({ games, showPlatforms, dispatch }) {
    return (
        <div className="mt-10 grid grid-cols-1 gap-5 pb-10 md:grid-cols-2 md:px-0 lg:grid-cols-3">
            {games.map((game) => (
                <GameCard
                    game={game}
                    showPlatforms={showPlatforms}
                    dispatch={dispatch}
                    key={game.title}
                />
            ))}
        </div>
    );
}

export default GameCards;
