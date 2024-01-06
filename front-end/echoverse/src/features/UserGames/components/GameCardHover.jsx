import GameCardHoverOption from "./GameCardHoverOption";

import steam from "../../../assets/svg/steam.svg";
import openSVG from "../../../assets/svg/openSVG.svg";
import group from "../../../assets/svg/group.svg";
import editSVG from "../../../assets/svg/editSVG.svg";
import deleteSVG from "../../../assets/svg/deleteSVG.svg";

function GameCardHover({
    steamLink,
    presentInProfile,
    showPlatforms,
    handleEditGamePlatforms,
}) {
    return (
        <div className="group absolute h-40 w-72 rounded-xl hover:block hover:bg-black-dark/70 hover:backdrop-blur-sm sm:h-44 sm:w-80">
            {steamLink && (
                <div className="absolute p-0.5">
                    <a
                        href={steamLink}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src={steam} />
                    </a>
                </div>
            )}
            <div
                className={`hidden h-full w-full justify-around px-3 group-hover:flex md:px-5 ${
                    presentInProfile ? "items-baseline py-8" : "items-center"
                }`}
            >
                {!presentInProfile && (
                    <GameCardHoverOption
                        presentInProfile={presentInProfile}
                        img={openSVG}
                        alt="open"
                        title="Add to your games"
                    />
                )}
                <GameCardHoverOption
                    presentInProfile={presentInProfile}
                    img={group}
                    alt="group"
                    title="Look for a group"
                />
                {showPlatforms && (
                    <GameCardHoverOption
                        presentInProfile={presentInProfile}
                        img={editSVG}
                        alt="edit"
                        title="Edit platforms"
                        onClick={handleEditGamePlatforms}
                    />
                )}
                {presentInProfile && (
                    <GameCardHoverOption
                        presentInProfile={presentInProfile}
                        img={deleteSVG}
                        alt="delete"
                        title="Remove game from the library"
                        isDeletion={true}
                    />
                )}
            </div>
        </div>
    );
}

export default GameCardHover;
