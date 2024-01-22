import { useState } from "react";
import { usePopper } from "react-popper";

import GameThreadRemainingCategory from "./GameThreadRemainingCategory";

function GameThreadRemainingCategories({ remainingCategories }) {
    const [isHovered, setIsHovered] = useState(false);

    const [referenceElement, setReferenceElement] = useState(null);
    const [popperElement, setPopperElement] = useState(null);
    const { styles, attributes } = usePopper(referenceElement, popperElement, {
        placement: "top",
        modifiers: [
            {
                name: "flip",
                enabled: false,
            },
        ],
    });

    return (
        <>
            <div className="pointer-events-none relative">
                <div
                    className="pointer-events-auto"
                    ref={setReferenceElement}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    +{remainingCategories.length}
                </div>
            </div>
            {isHovered && (
                <div
                    className="after:border-l-6 after:border-r-6 after:border-t-6 relative mb-1.5 flex w-fit max-w-[320px] flex-wrap gap-2 rounded-lg bg-black-dark px-3 py-3 after:absolute after:left-[calc(50%-6px)] after:top-full after:border-l-transparent after:border-r-transparent after:border-t-black-dark after:content-['']"
                    ref={setPopperElement}
                    style={styles.popper}
                    {...attributes.popper}
                >
                    {remainingCategories.map((category) => (
                        <GameThreadRemainingCategory
                            category={category}
                            key={category}
                        />
                    ))}
                </div>
            )}
        </>
    );
}

export default GameThreadRemainingCategories;
