import { useForm } from "react-hook-form";

import toast from "react-hot-toast";

import Button from "../../../components/Button";
import Modal from "../../../components/Modal";

import controller from "../../../assets/svg/controller.svg";
import deleteCross from "../../../assets/svg/deleteCross.svg";
import { useEffect, useState } from "react";

function EditGamePlatformsModal({
    game,
    platforms,
    selectedGamePlatforms,
    isEditGamePlatformsModalOpen,
    dispatch,
}) {
    const [currentSelectedGamePlatforms, setCurrentSelectedGamePlatforms] =
        useState([]);

    useEffect(() => {
        setCurrentSelectedGamePlatforms(selectedGamePlatforms);
    }, [selectedGamePlatforms]);

    function handleSaveEditedPlatforms() {
        toast.success(`Platforms for ${game} saved`);
        dispatch({ type: "closeEditGamePlatformsModal" });
    }

    function handleAddSelectedGamePlatform(platform) {
        if (!currentSelectedGamePlatforms.includes(platform))
            setCurrentSelectedGamePlatforms([
                ...currentSelectedGamePlatforms,
                platform,
            ]);
    }

    function handleDeleteSelectedGamePlatform(platform) {
        setCurrentSelectedGamePlatforms((selectedPlatforms) =>
            selectedPlatforms.filter(
                (selectedPlatform) => selectedPlatform !== platform
            )
        );
    }

    return (
        <Modal
            isOpen={isEditGamePlatformsModalOpen}
            onClose={() => dispatch({ type: "closeEditGamePlatformsModal" })}
            img={controller}
            alt="platforms"
            title="Edit platforms"
            description={`Edit your platforms for ${game}`}
        >
            <div className="flex gap-4 pb-5 font-semibold text-black-dark">
                {currentSelectedGamePlatforms.map((platform) => (
                    <div
                        className="flex items-center gap-1 rounded-xl bg-blue-light px-1 py-0.5"
                        key={platform}
                    >
                        <p>{platform}</p>
                        <img
                            draggable={false}
                            src={deleteCross}
                            alt="remove"
                            className="h-3.5 w-3.5 cursor-pointer"
                            onClick={() =>
                                handleDeleteSelectedGamePlatform(platform)
                            }
                        />
                    </div>
                ))}
            </div>
            <form
                className="flex flex-col gap-5"
                onSubmit={(e) => e.preventDefault()}
            >
                <div className="flex max-w-[244px] items-center rounded-xls bg-gray-charcoal px-4 py-2">
                    <img
                        draggable="false"
                        className="h-5.5 w-5.5"
                        src={controller}
                        alt="platforms"
                    />
                    <select
                        className={`max-w-[190px] border-0 bg-gray-charcoal px-2 font-roboto outline-none`}
                        onChange={(e) =>
                            handleAddSelectedGamePlatform(e.target.value)
                        }
                    >
                        <option value="">Select a platform</option>
                        {platforms.map((platform) => (
                            <option value={platform} key={platform}>
                                {platform}
                            </option>
                        ))}
                    </select>
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
