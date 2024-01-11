import GameCardHover from "./GameCardHover";
import GameCardPlatforms from "./GameCardPlatforms";

import coverNotFound from "../../../assets/img/coverNotFound.png";

function GameCard({ game, showPlatforms = true, dispatch }) {
    const {
        title,
        img,
        selectedPlatforms,
        platforms,
        presentInProfile,
        steamLink,
    } = game;

    function handleImgNotFound(e) {
        e.currentTarget.src = coverNotFound;
    }

    function handleEditGamePlatforms() {
        dispatch({
            type: "openEditGamePlatformsModal",
            game: title,
            platforms,
            selectedPlatforms,
        });
    }

    return (
        <div className="flex flex-col items-center">
            {showPlatforms && (
                <GameCardPlatforms selectedPlatforms={selectedPlatforms} />
            )}
            <GameCardHover
                steamLink={steamLink}
                presentInProfile={presentInProfile}
                showPlatforms={showPlatforms}
                handleEditGamePlatforms={handleEditGamePlatforms}
            />

            <img
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