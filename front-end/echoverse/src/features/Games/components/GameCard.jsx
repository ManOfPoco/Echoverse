import { useNavigate } from "react-router-dom";

import GameCardHover from "./GameCardHover";
import GameCardPlatforms from "../../UserGames/components/GameCardPlatforms";

import coverNotFound from "../../../assets/img/coverNotFound.png";

function GameCard({ game, showPlatforms = true, dispatch }) {
    const { title, img, selectedPlatforms } = game;
    const slug = title;
    const navigate = useNavigate();

    function handleImgNotFound(e) {
        e.currentTarget.src = coverNotFound;
    }

    return (
        <div className="flex flex-col items-center">
            {showPlatforms && (
                <GameCardPlatforms selectedPlatforms={selectedPlatforms} />
            )}
            <GameCardHover
                game={game}
                onClick={() => navigate(`/games/game-threads/${slug}`)}
                showPlatforms={showPlatforms}
                dispatch={dispatch}
            />

            <img
                draggable={false}
                src={img}
                alt={title}
                className="h-40 w-72 rounded-xl sm:h-44 sm:w-80"
                onError={handleImgNotFound}
            />
            <h4 className="pt-3 text-xl font-semibold">{title}</h4>
        </div>
    );
}

export default GameCard;
