import GameThread from "./GameThread";

function GameThreadsList({ view, gameThreads }) {
    return (
        <div
            className={`mt-4 gap-2 pb-10 lg:mx-0 ${
                view === "list"
                    ? "flex flex-col"
                    : view === "gallery"
                      ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
                      : ""
            }`}
        >
            {gameThreads.map((gameThread) => (
                <GameThread
                    gameThread={gameThread}
                    view={view}
                    key={gameThread.username}
                />
            ))}
        </div>
    );
}

export default GameThreadsList;
