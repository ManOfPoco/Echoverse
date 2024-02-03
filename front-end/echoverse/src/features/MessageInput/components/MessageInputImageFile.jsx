import FullScreenContentModal from "../../../components/FullScreenContentModal";

import trashCan from "../../../assets/svg/trashCan.svg";
import { useEffect, useRef, useState } from "react";
import DeleteFileButton from "../../../components/DeleteFileButton";
import useWindowDimensions from "../../../hooks/useWindowDimensions";

function MessageInputImageFile({ image, index, dispatch }) {
    const [isFullScreenModalOpen, setIsFullScreenModalOpen] = useState(false);
    const { height } = useWindowDimensions();

    const imgRef = useRef(null);
    const { file, previewURL } = image;

    const maxHeight = height <= 576 ? Math.min(208, (height / 100) * 30) : 256;

    function handleRemoveFile() {
        dispatch({ type: "removeMessageFile", removeIndex: index });
    }

    useEffect(() => {
        if (isFullScreenModalOpen) {
            const imgRf = imgRef.current;

            if (imgRf) {
                const reader = new FileReader();
                reader.readAsDataURL(file);

                reader.onload = function () {
                    const readImg = reader.result;

                    imgRf.src = readImg;
                };
            }
        }
    }, [file, isFullScreenModalOpen]);

    return (
        <div
            className="relative min-w-fit aspect-square cursor-pointer sm:max-h-64"
            style={{ maxHeight: maxHeight }}
        >
            <DeleteFileButton
                deleteSvg={trashCan}
                roundness="rounded-md"
                onClick={handleRemoveFile}
            />

            <div
                className="absolute z-20 flex h-full w-full"
                onClick={() => setIsFullScreenModalOpen(true)}
            />
            <img
                src={previewURL}
                className="h-full w-full rounded-lg object-cover"
            />
            {isFullScreenModalOpen && (
                <FullScreenContentModal
                    isOpen={isFullScreenModalOpen}
                    handleModalClose={() => setIsFullScreenModalOpen(false)}
                    bgColor="bg-black-dark/80"
                >
                    <img
                        draggable={false}
                        ref={imgRef}
                        className={`max-h-[80dvh] max-w-[80dvw] rounded-lg`}
                    />
                </FullScreenContentModal>
            )}
        </div>
    );
}

export default MessageInputImageFile;
