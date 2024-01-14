import { Link } from "react-router-dom";

import GameThreadCategories from "./GameThreadCategories";
import GameThreadBody from "./GameThreadBody";

function GameThread({ gameThread, game, view }) {
    const { username, id } = gameThread;

    return (
        <div
            className={`relative flex w-full cursor-pointer flex-col rounded-xl bg-gray-charcoal`}
            onClick={() => console.log(`message by ${username}`)}
        >
            <Link
                to={`/games/game-threads/:${game}/:${id}`}
                className="absolute inset-0"
            />
            <GameThreadCategories gameThread={gameThread} />
            <GameThreadBody gameThread={gameThread} view={view} />
        </div>
    );
}

export default GameThread;
