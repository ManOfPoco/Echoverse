import FullScreenContentModal from "../../../components/FullScreenContentModal";

import trashCan from "../../../assets/svg/trashCan.svg";
import { useState } from "react";
import DeleteFileButton from "../../../components/DeleteFileButton";

function MessageInputImageFile({ image, index, dispatch }) {
    const [isFullScreenModalOpen, setIsFullScreenModalOpen] = useState(false);

    function handleRemoveFile() {
        dispatch({ type: "removeMessageFile", removeIndex: index });
    }

    return (
        <div className="relative max-h-80 min-w-fit cursor-pointer sm:max-h-64">
            <DeleteFileButton
                deleteSvg={trashCan}
                roundness="rounded-md"
                onClick={handleRemoveFile}
            />

            <div
                className="absolute z-20 flex h-full w-full"
                onClick={() => setIsFullScreenModalOpen(true)}
            />
            <img src={image} className="h-full max-h-80 object-cover w-full rounded-lg" />
            {isFullScreenModalOpen && (
                <FullScreenContentModal
                    isOpen={isFullScreenModalOpen}
                    handleModalClose={() => setIsFullScreenModalOpen(false)}
                    bgColor="bg-black-dark/80"
                >
                    <img
                        draggable={false}
                        src={image}
                        className={`max-h-[80dvh] max-w-[80dvw] rounded-lg`}
                    />
                </FullScreenContentModal>
            )}
        </div>
    );
}

export default MessageInputImageFile;
