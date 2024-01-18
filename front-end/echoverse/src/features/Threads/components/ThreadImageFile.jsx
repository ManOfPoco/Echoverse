import { useEffect, useRef } from "react";

function ThreadImageFile({
    threadFile,
    threadFiles,
    stretch,
    setStretch,
    isFullScreenModalOpen,
    setIsFullScreenModalOpen,
    moveDomElementToStash,
    swapDomeElementsWithDomElementsFromStash,
}) {
    const fileRef = useRef(null);

    function handleFullScreen() {
        setIsFullScreenModalOpen(true);
        setStretch("fullScreen");
        moveDomElementToStash(fileRef.current.firstChild);
    }

    useEffect(() => {
        if (!isFullScreenModalOpen && document.getElementById("stash")) {
            if (fileRef.current) {
                fileRef.current = swapDomeElementsWithDomElementsFromStash(
                    fileRef.current
                );
            }
        }
    }, [swapDomeElementsWithDomElementsFromStash, isFullScreenModalOpen]);

    return (
        <div ref={fileRef}>
            <img
                src={threadFile}
                className={`rounded-lg pb-0.5 ${
                    stretch === "fullScreen"
                        ? "max-h-[80dvh] max-w-[80dvw]"
                        : ""
                } ${
                    stretch !== "fullScreen"
                        ? threadFiles.length === 1
                            ? `${
                                  stretch === "stretch"
                                      ? "max-h-96 sm:max-h-[430px]"
                                      : "max-h-80 sm:max-h-96"
                              } min-w-[min(min-w-fit,_max-w-full)]`
                            : `${
                                  stretch === "stretch"
                                      ? "max-h-64 sm:max-h-80"
                                      : "max-h-60 sm:max-h-64"
                              } min-h-full min-w-full`
                        : ""
                }`}
                onClick={handleFullScreen}
            />
        </div>
    );
}

export default ThreadImageFile;
