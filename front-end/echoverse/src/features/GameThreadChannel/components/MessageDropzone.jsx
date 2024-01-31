import { useCallback, useEffect, useRef, useState } from "react";

function MessageDropzone({ handleFileOnDrop }) {
    const [isDragging, setIsDragging] = useState(false);
    const dragCounter = useRef(0);

    const handleDrag = useCallback((e) => {
        e.preventDefault();
        e.stopPropagation();
    }, []);

    const handleDragIn = useCallback((e) => {
        e.preventDefault();
        e.stopPropagation();
        dragCounter.current++;
        if (e.dataTransfer.items && e.dataTransfer.items.length > 0) {
            setIsDragging(true);
        }
    }, []);

    const handleDragOut = useCallback((e) => {
        e.preventDefault();
        e.stopPropagation();
        dragCounter.current--;
        if (dragCounter.current > 0) return;
        setIsDragging(false);
    }, []);

    const handleDrop = useCallback(
        (e) => {
            e.preventDefault();
            e.stopPropagation();
            setIsDragging(false);

            handleFileOnDrop(e);
        },
        [handleFileOnDrop]
    );

    useEffect(() => {
        window.addEventListener("dragenter", handleDragIn);
        window.addEventListener("dragleave", handleDragOut);
        window.addEventListener("dragover", handleDrag);
        window.addEventListener("drop", handleDrop);

        return function cleanUp() {
            window.removeEventListener("dragenter", handleDragIn);
            window.removeEventListener("dragleave", handleDragOut);
            window.removeEventListener("dragover", handleDrag);
            window.removeEventListener("drop", handleDrop);
        };
    });

    return (
        <div
            className={`fixed left-0 top-0 z-[60] flex h-full w-full items-center justify-center ${
                isDragging ? "bg-black-dark/75" : "hidden"
            }`}
        >
            <div className="rounded-lg bg-majorelle-blue p-3 text-center">
                <div className="rounded-lg border border-dashed p-8">
                    <p className="text-lg font-semibold text-platinum">
                        Drop your files here
                    </p>
                    <p className="text-sm">
                        You can add message before uploading
                    </p>
                </div>
            </div>
        </div>
    );
}

export default MessageDropzone;
