import { useEffect, useId, useRef, useState } from "react";

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
    const firstRender = useRef(true);

    let fileType = threadFile;
    if (typeof fileType === "string") {
        const cleanFileName = threadFile.split("?")[0];
        fileType = cleanFileName.split(".").at(-1);
    } else if (typeof fileType === "object") {
        fileType = threadFile.fileType;
    }

    const displayFile = (
        <>
            {fileType === "mp4" ? (
                <VideoFile
                    threadFiles={threadFiles}
                    threadFile={threadFile?.threadFile || threadFile}
                    stretch={stretch}
                    setStretch={setStretch}
                    isFullScreenModalOpen={isFullScreenModalOpen}
                    setIsFullScreenModalOpen={setIsFullScreenModalOpen}
                    moveDomElementToStash={moveDomElementToStash}
                    isDOMElementInStash={isDOMElementInStash}
                    swapDomElementsWithDomElementsFromStash={
                        swapDomElementsWithDomElementsFromStash
                    }
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
                    isDOMElementInStash={isDOMElementInStash}
                    swapDomElementsWithDomElementsFromStash={
                        swapDomElementsWithDomElementsFromStash
                    }
                />
            )}
        </>
    );

    function handleRemoveFile(removeIndex) {
        dispatch({ type: "removeNewThreadFile", removeIndex: removeIndex });
    }

    function handleModalClose() {
        setIsFullScreenModalOpen(false);
        setStretch(stretchType);
    }

    function moveDomElementToStash(elementToStash, stashId = "stash") {
        let stashDiv = document.getElementById(stashId);
        if (!stashDiv) {
            stashDiv = document.createElement("div");
            stashDiv.id = stashId;
            document.body.prepend(stashDiv);
        }

        const elementsToDelete = stashDiv.querySelectorAll(
            `[stashkey="${uniqueId}"]`
        );
        elementsToDelete.forEach((element) =>
            element.parentNode.removeChild(element)
        );
        elementToStash.setAttribute("stashkey", uniqueId);
        stashDiv.appendChild(elementToStash);
    }

    function isDOMElementInStash(stashId = "stash") {
        let stashDiv = document.getElementById(stashId);
        if (!stashDiv) return false;
        const stashedElement = stashDiv.querySelector(
            `[stashkey="${uniqueId}"]`
        );
        return !!stashedElement;
    }

    function swapDomElementsWithDomElementsFromStash(
        swapElement,
        stashId = "stash"
    ) {
        let stashDiv = document.getElementById(stashId);
        const stashedElement = stashDiv.querySelector(
            `[stashkey="${uniqueId}"]`
        );

        stashedElement.removeAttribute("stashkey");
        if (stashedElement && swapElement)
            swapElement.replaceWith(stashedElement);

        const elementsToDelete = stashDiv.querySelectorAll(
            `[stashkey="${uniqueId}"]`
        );
        elementsToDelete.forEach((element) =>
            element.parentNode.removeChild(element)
        );
        return stashedElement;
    }

    useEffect(() => {
        return () => {
            const stashDiv = document.getElementById("stash");
            if (stashDiv) stashDiv.remove();
            firstRender.current = false;
        };
    }, []);

    return (
        <>
            {isFullScreenModalOpen && (
                <FullScreenContentModal
                    isOpen={isFullScreenModalOpen}
                    handleModalClose={handleModalClose}
                >
                    {isFullScreenModalOpen && displayFile}
                </FullScreenContentModal>
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

                {!isFullScreenModalOpen && displayFile}
            </div>
        </>
    );
}

export default ThreadFile;
