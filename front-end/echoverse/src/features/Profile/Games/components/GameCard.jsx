import GameCardHover from "./GameCardHover";

import coverNotFound from "../../../../assets/img/coverNotFound.png";
import GameCardPlatforms from "./GameCardPlatforms";

function GameCard({ title, img, platforms, presentInProfile, steamLink }) {
    function handleImgNotFound(e) {
        e.currentTarget.src = coverNotFound;
    }

    return (
        <div className="mt-10 flex flex-col items-center">
            <GameCardPlatforms platforms={platforms} />
            <GameCardHover
                steamLink={steamLink}
                presentInProfile={presentInProfile}
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
