import { useState } from "react";

import DeleteFileButton from "../../../components/DeleteFileButton";
import FullScreenContentModal from "../../../components/FullScreenContentModal";

import trashCan from "../../../assets/svg/trashCan.svg";

function MessageImageAttachment({ filesQuantity, image, senderId }) {
    const currentUserId = 1;

    const [isFullScreenModalOpen, setIsFullScreenModalOpen] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className="relative flex-channel-images cursor-pointer"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {isHovered && currentUserId === senderId && (
                <DeleteFileButton
                    deleteSvg={trashCan}
                    roundness="rounded-md"
                    onClick={() => console.log("click")}
                />
            )}
            <div
                className="absolute z-20 flex h-full w-full"
                onClick={() => setIsFullScreenModalOpen(true)}
            />
            <img
                src={image}
                className={`h-full w-full rounded-lg ${
                    filesQuantity === 1 ? "max-h-96" : "max-h-80 object-cover"
                }`}
            />
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

export default MessageImageAttachment;
