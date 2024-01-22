import { Link } from "react-router-dom";

import GameThreadCategories from "./GameThreadCategories";
import GameThreadBody from "./GameThreadBody";

function GameThread({ gameThread, game, view }) {
    const { username, id } = gameThread;

    return (
        <div className="rounded-lgx relative flex w-full cursor-pointer flex-col bg-gray-charcoal transition ease-in-out hover:z-30 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-gray-dark hover:outline hover:outline-1 hover:outline-gray-light/60 hover:duration-300">
            <Link
                to={`/games/game-threads/${game}/${id}`}
                className="absolute inset-0"
            />
            <GameThreadCategories gameThread={gameThread} view={view} />
            <GameThreadBody gameThread={gameThread} view={view} />
        </div>
    );
}

export default GameThread;
