import FullScreenContentModal from "../../../components/FullScreenContentModal";

import trashCan from "../../../assets/svg/trashCan.svg";
import { useEffect, useRef, useState } from "react";
import DeleteFileButton from "../../../components/DeleteFileButton";

function MessageInputImageFile({ image, index, dispatch }) {
    const [isFullScreenModalOpen, setIsFullScreenModalOpen] = useState(false);

    const imgRef = useRef(null);

    const { file, previewURL } = image;

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
            <img
                src={previewURL}
                className="h-full max-h-80 w-full rounded-lg object-cover"
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
