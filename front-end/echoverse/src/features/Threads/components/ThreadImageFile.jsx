import { useEffect, useLayoutEffect, useRef } from "react";

function ThreadImageFile({
    threadFile,
    threadFiles,
    stretch,
    setStretch,
    setIsFullScreenModalOpen,
    isDOMElementInStash,
    moveDomElementToStash,
    swapDomElementsWithDomElementsFromStash,
}) {
    const fileRef = useRef(null);

    const imageDefaultClasses = `${
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
    }`;

    function handleFullScreen() {
        setIsFullScreenModalOpen(true);
        setStretch("fullScreen");
        moveDomElementToStash(fileRef.current);
    }

    useEffect(() => {
        if (isDOMElementInStash()) {
            if (fileRef.current) {
                fileRef.current = swapDomElementsWithDomElementsFromStash(
                    fileRef.current
                );
                fileRef.current.className =
                    "rounded-lg max-h-[80dvh] max-w-[80dvw]";
            }
        }
    }, [isDOMElementInStash, swapDomElementsWithDomElementsFromStash]);

    return (
        <span>
            <img
                src={threadFile}
                className={`rounded-lg pb-0.5 ${imageDefaultClasses}`}
                onClick={handleFullScreen}
                ref={fileRef}
            />
        </span>
    );
}

export default ThreadImageFile;
