import { useEffect, useRef } from "react";
import ThreadFile from "./ThreadFile";

function ThreadFiles({ deleteBtn, stretchType, threadFiles, dispatch }) {
    const imgContainerRef = useRef(null);

    useEffect(() => {
        const imgContainer = imgContainerRef.current;

        if (imgContainer) {
            const onWheel = (e) => {
                if (e.deltaY == 0) return;
                e.preventDefault();
                imgContainer.scrollTo({
                    left: imgContainer.scrollLeft + e.deltaY,
                });
            };
            imgContainer.addEventListener("wheel", onWheel);
            return () => imgContainer.removeEventListener("wheel", onWheel);
        }
    }, []);

    return (
        <>
            {threadFiles.length > 0 && (
                <div className="relative z-20">
                    <div
                        className="pointer-events-auto flex w-full gap-2 overflow-x-auto pb-2"
                        ref={imgContainerRef}
                    >
                        {threadFiles.map((threadFile, index) => (
                            <ThreadFile
                                threadFile={threadFile}
                                stretchType={stretchType}
                                deleteBtn={deleteBtn}
                                index={index}
                                threadFiles={threadFiles}
                                dispatch={dispatch}
                                key={index}
                            />
                        ))}
                    </div>
                </div>
            )}
        </>
    );
}

export default ThreadFiles;
