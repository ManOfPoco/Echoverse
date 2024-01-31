import { useRef, useState } from "react";

import DeleteFileButton from "../../../components/DeleteFileButton";
import FullScreenContentModal from "../../../components/FullScreenContentModal";

import MessageVideoPlayButton from "./MessageVideoPlayButton";

import trashCan from "../../../assets/svg/trashCan.svg";

function MessageVideoAttachment({ filesQuantity, video, senderId }) {
    const currentUserId = 1;

    const [isFullScreenModalOpen, setIsFullScreenModalOpen] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    const fullScreenVideoRef = useRef(null);

    function handleModalClose() {
        setIsFullScreenModalOpen(false);
    }

    function handleSetUpFullScreenVideo() {
        const videoRef = fullScreenVideoRef.current;
        if (videoRef) {
            videoRef.volume = 0.5;
            videoRef.play();
        }
    }

    return (
        <div
            className={`${
                filesQuantity === 1 ? "flex-initial" : "flex-channel-videos"
            } relative cursor-pointer`}
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
            <MessageVideoPlayButton
                onClick={() => setIsFullScreenModalOpen(true)}
            />
            <video
                className={`rounded-lg ${
                    filesQuantity === 1
                        ? "max-h-96"
                        : "h-full max-h-80 w-full object-cover"
                }`}
                preload="metadata"
            >
                <source src={video} type="video/mp4" />
            </video>

            {isFullScreenModalOpen && (
                <FullScreenContentModal
                    isOpen={isFullScreenModalOpen}
                    handleModalClose={handleModalClose}
                    bgColor="bg-black-dark/80"
                >
                    <video
                        className="max-h-[80dvh] max-w-[80dvw] rounded-lg"
                        controls
                        onCanPlay={handleSetUpFullScreenVideo}
                        ref={fullScreenVideoRef}
                    >
                        <source src={video} type="video/mp4" />
                    </video>
                </FullScreenContentModal>
            )}
        </div>
    );
}

export default MessageVideoAttachment;
