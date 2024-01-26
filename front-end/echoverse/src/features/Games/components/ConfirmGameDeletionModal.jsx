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
            title="Remove game from the library"
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
                    src={img}
                    alt={title}
                    className="h-40 w-72 self-center rounded-xl sm:h-44 sm:w-80"
                    onError={(e) => handleImgNotFound(e)}
                />
                <div className="flex justify-end gap-1 mt-2 py-1">
                    <Button
                        btnClass="secondary"
                        size="h-9 w-28"
                        roundness="rounded-lg"
                        action={handleCloseModal}
                    >
                        Cancel
                    </Button>
                    <Button
                        btnClass="danger"
                        size="h-9 w-28"
                        roundness="rounded-lg"
                        action={handleDeleteGame}
                    >
                        Delete
                    </Button>
                </div>
            </div>
        </ConfirmationModal>
    );
}

export default ConfirmGameDeletionModal;
