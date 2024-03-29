import toast from "react-hot-toast";

import GameCardHoverOption from "./GameCardHoverOption";

import steam from "../../../assets/svg/steam.svg";
import openSVG from "../../../assets/svg/openSVG.svg";
import group from "../../../assets/svg/group.svg";
import editSVG from "../../../assets/svg/editSVG.svg";
import trashCan from "../../../assets/svg/trashCan.svg";

function GameCardHover({ game, onClick, showEditPlatformsHover, dispatch }) {
    const {
        id,
        title,
        img,
        selectedPlatforms,
        platforms,
        steamLink,
        presentInProfile,
    } = game;

    function handleEditGamePlatforms() {
        dispatch({
            type: "openEditGamePlatformsModal",
            game: { id, title, platforms, selectedPlatforms },
        });
    }

    function handleDeleteGameFromLibrary() {
        dispatch({
            type: "openConfirmDeleteGameFromLibraryModal",
            game: { id, title, img },
        });
    }

    function handleAddGameToLibrary() {
        toast.success(`${title} was added to your games`, {
            style: {
                color: "white",
                backgroundColor: "#262A2F",
            },
        });
    }

    return (
        <>
            <div className="group absolute h-40 w-72 rounded-xl hover:block hover:bg-black-dark/70 hover:backdrop-blur-sm sm:h-44 sm:w-80">
                {steamLink && (
                    <div className="absolute p-0.5">
                        <a
                            href={steamLink}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img draggable={false} src={steam} />
                        </a>
                    </div>
                )}
                <div
                    className={`hidden h-full w-full justify-around px-3 group-hover:flex md:px-5 ${
                        presentInProfile
                            ? "items-baseline py-8"
                            : "items-center"
                    }`}
                >
                    {!presentInProfile && (
                        <GameCardHoverOption
                            presentInProfile={presentInProfile}
                            img={openSVG}
                            alt="open"
                            title="Add to your games"
                            onClick={handleAddGameToLibrary}
                        />
                    )}
                    <GameCardHoverOption
                        presentInProfile={presentInProfile}
                        img={group}
                        alt="group"
                        title="Look for a group"
                        onClick={onClick}
                    />
                    {showEditPlatformsHover && (
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
                            img={trashCan}
                            alt="delete"
                            title="Remove game from the library"
                            onClick={handleDeleteGameFromLibrary}
                            isDeletion={true}
                        />
                    )}
                </div>
            </div>
        </>
    );
}

export default GameCardHover;
