import { useEffect, useRef } from "react";
import ThreadImage from "./ThreadImage";

function ThreadImages({ deleteBtn, threadImages, dispatch }) {
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
            {threadImages.length > 0 && (
                <div
                    className="flex w-full gap-2 overflow-x-auto pb-2 sm:max-w-[524px]"
                    ref={imgContainerRef}
                >
                    {threadImages.map((newThreadImg, index) => (
                        <ThreadImage
                            newThreadImg={newThreadImg}
                            deleteBtn={deleteBtn}
                            index={index}
                            threadImages={threadImages}
                            dispatch={dispatch}
                            key={index}
                        />
                    ))}
                </div>
            )}
        </>
    );
}

export default ThreadImages;
