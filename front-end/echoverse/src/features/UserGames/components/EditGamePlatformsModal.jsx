import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import Button from "../../../components/Button";
import Modal from "../../../components/Modal";
import SelectField from "../../../components/SelectField";

import controller from "../../../assets/svg/controllerYellow.svg";

function EditGamePlatformsModal({ state, dispatch }) {
    const { selectedGame, openModal } = state;
    const { id, title, platforms, selectedPlatforms } = selectedGame;

    const [currentSelectedGamePlatforms, setCurrentSelectedGamePlatforms] =
        useState(selectedPlatforms);

    useEffect(() => {
        setCurrentSelectedGamePlatforms(selectedPlatforms);
    }, [selectedPlatforms]);

    function handleSaveEditedPlatforms() {
        toast.success(`Platforms for ${title} saved`, {
            style: {
                color: "white",
                backgroundColor: "#262A2F",
            },
        });
        dispatch({ type: "closeEditGamePlatformsModal" });
    }

    return (
        <Modal
            isOpen={openModal === "edit-game-platforms"}
            onClose={() => dispatch({ type: "closeEditGamePlatformsModal" })}
            img={controller}
            alt="platforms"
            title="Edit platforms"
            description={`Edit your platforms for ${title}`}
        >
            <form
                className="flex flex-col gap-5"
                onSubmit={(e) => e.preventDefault()}
            >
                <div className="flex max-w-[244px] items-center rounded-xls bg-gray-charcoal py-0.5 pe-1.5 ps-4">
                    <img
                        draggable={false}
                        className="h-5.5 w-5.5"
                        src={controller}
                        alt="platforms"
                    />

                    <SelectField
                        choices={platforms}
                        selectedField={currentSelectedGamePlatforms}
                        setSelectedField={setCurrentSelectedGamePlatforms}
                        size="w-full"
                        isMultiple={true}
                        defaultValue="Select platforms"
                        shadow=""
                    />
                </div>
                <Button
                    type="button"
                    btnClass="primary"
                    roundness="rounded-xls"
                    action={handleSaveEditedPlatforms}
                >
                    Save
                </Button>
            </form>
        </Modal>
    );
}

export default EditGamePlatformsModal;
