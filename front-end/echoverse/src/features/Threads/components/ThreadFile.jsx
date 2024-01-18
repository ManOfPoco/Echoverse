import { useId, useState } from "react";

import FullScreenContentModal from "../../../components/FullScreenContentModal";
import DeleteFileButton from "./DeleteFileButton";
import VideoFile from "./VideoFile";
import ThreadImageFile from "./ThreadImageFile";

function ThreadFile({
    threadFile,
    deleteBtn = false,
    index,
    threadFiles,
    dispatch,
    stretchType = "reduced", // reduced, stretch, fullScreen
}) {
    const [isFullScreenModalOpen, setIsFullScreenModalOpen] = useState(false);
    const [stretch, setStretch] = useState(stretchType);
    const uniqueId = useId();

    let fileType = threadFile;
    if (typeof fileType === "string") {
        const cleanFileName = threadFile.split("?")[0];
        fileType = cleanFileName.split(".").at(-1);
    } else if (typeof fileType === "object") {
        fileType = threadFile.fileType;
    }

    function handleRemoveFile(removeIndex) {
        dispatch({ type: "removeNewThreadFile", removeIndex: removeIndex });
    }

    function handleModalClose(elementToStash) {
        setIsFullScreenModalOpen(false);
        setStretch(stretchType);

        const elementToStashWrapper = document.createElement("div");
        elementToStashWrapper.appendChild(elementToStash);
        moveDomElementToStash(elementToStashWrapper);
    }

    function moveDomElementToStash(elementToMove) {
        let stashDiv = document.getElementById("stash");
        if (!stashDiv) {
            stashDiv = document.createElement("div");
            stashDiv.id = "stash";
            document.body.prepend(stashDiv);
        }

        stashDiv.appendChild(elementToMove);
    }

    function swapDomeElementsWithDomElementsFromStash(elementToSwap) {
        const stashedElement = document.getElementById("stash").firstChild;

        if (stashedElement && elementToSwap) {
            elementToSwap.replaceWith(stashedElement);
            return stashedElement;
        }
    }

    return (
        <>
            {isFullScreenModalOpen && (
                <FullScreenContentModal
                    isOpen={isFullScreenModalOpen}
                    handleModalClose={handleModalClose}
                    swapDomeElementsWithDomElementsFromStash={
                        swapDomeElementsWithDomElementsFromStash
                    }
                />
            )}
            <div
                className={`relative rounded-lg border border-gray-light/50 ${
                    stretchType === "fullScreen"
                        ? "max-h-[80dvh] max-w-[80dvw]"
                        : ""
                } ${
                    stretchType !== "fullScreen"
                        ? threadFiles.length === 1
                            ? `${
                                  stretchType === "stretch"
                                      ? "max-h-96 sm:max-h-[430px]"
                                      : "max-h-80 sm:max-h-96"
                              } min-w-[min(min-w-fit,_max-w-full)]`
                            : `${
                                  stretchType === "stretch"
                                      ? "max-h-64 sm:max-h-80"
                                      : "max-h-60 sm:max-h-64"
                              } min-w-fit`
                        : ""
                }`}
            >
                <DeleteFileButton
                    deleteBtn={deleteBtn}
                    dispatch={dispatch}
                    onClick={() => handleRemoveFile(index)}
                />

                {fileType === "mp4" ? (
                    <VideoFile
                        threadFiles={threadFiles}
                        threadFile={threadFile?.threadFile || threadFile}
                        stretch={stretch}
                        setStretch={setStretch}
                        isFullScreenModalOpen={isFullScreenModalOpen}
                        setIsFullScreenModalOpen={setIsFullScreenModalOpen}
                        moveDomElementToStash={moveDomElementToStash}
                        swapDomeElementsWithDomElementsFromStash={
                            swapDomeElementsWithDomElementsFromStash
                        }
                        uniqueId={uniqueId}
                    />
                ) : (
                    <ThreadImageFile
                        threadFiles={threadFiles}
                        threadFile={threadFile?.threadFile || threadFile}
                        stretch={stretch}
                        setStretch={setStretch}
                        isFullScreenModalOpen={isFullScreenModalOpen}
                        setIsFullScreenModalOpen={setIsFullScreenModalOpen}
                        moveDomElementToStash={moveDomElementToStash}
                        swapDomeElementsWithDomElementsFromStash={
                            swapDomeElementsWithDomElementsFromStash
                        }
                    />
                )}
            </div>
        </>
    );
}

export default ThreadFile;
