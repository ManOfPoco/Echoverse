import { usePopper } from "react-popper";
import { useState } from "react";

function ChannelBreadCrumbNavItem({ img, alt, title, onClick }) {
    const [isHovered, setIsHovered] = useState(false);
    const [referenceElement, setReferenceElement] = useState(null);
    const [popperElement, setPopperElement] = useState(null);
    const { styles, attributes } = usePopper(referenceElement, popperElement);

    return (
        <>
            <div
                className="cursor-pointer"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                ref={setReferenceElement}
                onClick={onClick}
            >
                <img src={img} className="h-6 w-6" alt={alt} />
            </div>
            {isHovered && (
                <div
                    className="z-50 mt-2 rounded-lg bg-black-dark px-2 py-2 before:absolute before:bottom-full before:left-[calc(50%-6px)] before:border-b-6 before:border-l-6 before:border-r-6 before:border-b-black-dark before:border-l-transparent before:border-r-transparent before:content-['']"
                    ref={setPopperElement}
                    style={styles.popper}
                    {...attributes.popper}
                >
                    {title}
                </div>
            )}
        </>
    );
}

export default ChannelBreadCrumbNavItem;
