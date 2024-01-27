import GameCard from "./GameCard";

function GameCards({ games, showPlatforms, showEditPlatformsHover, dispatch }) {
    return (
        <div className="grid grid-cols-1 gap-5 pb-10 md:grid-cols-2 md:px-0 lg:grid-cols-3">
            {games.map((game) => (
                <GameCard
                    game={game}
                    showPlatforms={showPlatforms}
                    showEditPlatformsHover={showEditPlatformsHover}
                    dispatch={dispatch}
                    key={game.id}
                />
            ))}
        </div>
    );
}

export default GameCards;
