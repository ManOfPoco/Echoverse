import { useEffect, useRef, useState } from "react";

import FullScreenContentModal from "../../../components/FullScreenContentModal";
import DeleteFileButton from "../../../components/DeleteFileButton";

import MessageVideoPlayButton from "../../Messages/components/MessageVideoPlayButton";

import trashCan from "../../../assets/svg/trashCan.svg";

function MessageInputVideoFile({ video, index, dispatch }) {
    const [isFullScreenModalOpen, setIsFullScreenModalOpen] = useState(false);

    const videoRef = useRef(null);
    const { file, previewURL } = video;

    function handleModalClose() {
        setIsFullScreenModalOpen(false);
    }

    function handleSetUpFullScreenVideo() {
        setIsFullScreenModalOpen(true);
    }

    function handleRemoveFile() {
        dispatch({ type: "removeMessageFile", removeIndex: index });
    }

    useEffect(() => {
        if (isFullScreenModalOpen) {
            const videoRf = videoRef.current;

            if (videoRf) {
                const reader = new FileReader();
                reader.readAsDataURL(file);

                reader.onload = function () {
                    const readImg = reader.result;

                    videoRf.src = readImg;
                    videoRf.volume = 0.5;
                    videoRf.play();
                };
            }
        }
    }, [file, isFullScreenModalOpen]);

    return (
        <div className="relative max-h-80 min-w-fit cursor-pointer sm:max-h-64">
            <DeleteFileButton
                deleteSvg={trashCan}
                roundness="rounded-md"
                onClick={handleRemoveFile}
            />

            <MessageVideoPlayButton onClick={handleSetUpFullScreenVideo} />
            <video
                className="h-full max-h-80 w-full rounded-lg object-cover"
                preload="metadata"
            >
                <source src={previewURL} type="video/mp4" />
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
                        ref={videoRef}
                    >
                        <source type="video/mp4" />
                    </video>
                </FullScreenContentModal>
            )}
        </div>
    );
}

export default MessageInputVideoFile;
