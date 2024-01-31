import { useRef, useState } from "react";

import FullScreenContentModal from "../../../components/FullScreenContentModal";
import DeleteFileButton from "../../../components/DeleteFileButton";

import MessageVideoPlayButton from "../../Messages/components/MessageVideoPlayButton";

import trashCan from "../../../assets/svg/trashCan.svg";

function MessageInputVideoFile({ video, index, dispatch }) {
    const [isFullScreenModalOpen, setIsFullScreenModalOpen] = useState(false);

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

            <MessageVideoPlayButton
                setIsFullScreenModalOpen={setIsFullScreenModalOpen}
            />
            <video className="h-full max-h-80 w-full rounded-lg object-cover">
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

export default MessageInputVideoFile;
