import toast from "react-hot-toast";

import ConfirmationModal from "../../../components/ConfirmationModal";
import coverNotFound from "../../../assets/img/coverNotFound.png";

import Button from "../../../components/Button";

function ConfirmGameDeletionModal({ state, dispatch }) {
    const { selectedGame, openModal } = state;
    const { id, title, img } = selectedGame;

    function handleImgNotFound(e) {
        e.currentTarget.src = coverNotFound;
    }

    function handleCloseModal() {
        dispatch({ type: "closeConfirmDeleteGameFromLibraryModal" });
    }

    function handleDeleteGame() {
        handleCloseModal();
        toast.success(`${title} was removed from your games`, {
            style: {
                color: "white",
                backgroundColor: "#262A2F",
            },
        });
    }

    return (
        <ConfirmationModal
            isOpen={openModal === "confirm-delete-game-form-library"}
            onClose={() =>
                dispatch({ type: "closeConfirmDeleteGameFromLibraryModal" })
            }
            bgColor="bg-gray-dark"
            handleDelete={handleDeleteGame}
        >
            <div className="flex flex-col gap-2">
                <h5 className="text-lg font-medium">
                    Delete game from the library
                </h5>
                <p className="text-base text-gray-light">
                    Are you sure you want to delete{" "}
                    <span className="italic">{title}</span> from your library?
                </p>
                <img
                    draggable={false}
                    src={img}
                    alt={title}
                    className="h-40 w-72 self-center rounded-xl sm:h-44 sm:w-80"
                    onError={(e) => handleImgNotFound(e)}
                />
            </div>
        </ConfirmationModal>
    );
}

export default ConfirmGameDeletionModal;
