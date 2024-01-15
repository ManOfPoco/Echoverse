import GameThread from "./GameThread";

function GameThreadsList({ gameThreads, game, view }) {
    const viewClasses = `${
        (view === "list" && "flex flex-col") ||
        (view === "gallery" && "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3")
    }`;

    return (
        <div className={`${viewClasses} mt-4 gap-2 pb-10 lg:mx-0`}>
            {gameThreads.map((gameThread) => (
                <GameThread
                    gameThread={gameThread}
                    game={game}
                    view={view}
                    key={gameThread.id}
                />
            ))}
        </div>
    );
}

export default GameThreadsList;
