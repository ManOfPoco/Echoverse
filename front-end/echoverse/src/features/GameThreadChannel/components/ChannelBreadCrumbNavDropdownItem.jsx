import { usePopper } from "react-popper";
import { useState } from "react";

function ChannelBreadCrumbNavDropdownItem({
    img,
    alt,
    title,
    dropdownOpenItem,
    setDropdownOpenItem,
}) {
    const [isHovered, setIsHovered] = useState(false);
    const [referenceElement, setReferenceElement] = useState(null);
    const [popperElement, setPopperElement] = useState(null);
    const { styles: hintStyles, attributes: hintAttributes } = usePopper(
        referenceElement,
        popperElement
    );

    const [popperItemElement, setPopperItemElement] = useState(null);
    const { styles: dropdownItemStyles, attributes: dropdownItemAttributes } =
        usePopper(referenceElement, popperItemElement);

    function handleMouseEnter() {
        if (dropdownOpenItem !== title) {
            setIsHovered(true);
        }
    }

    function handleMouseLeave() {
        if (dropdownOpenItem !== title) {
            setIsHovered(false);
        }
    }

    function handleOpenDropdown() {
        if (dropdownOpenItem === title) {
            setDropdownOpenItem(true);
        } else setDropdownOpenItem(title);
        setIsHovered(false);
    }

    return (
        <>
            <div
                className="cursor-pointer"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                ref={setReferenceElement}
                onClick={handleOpenDropdown}
            >
                <img src={img} className="h-6 w-6" alt={alt} />
            </div>
            {isHovered && (
                <div
                    className="z-50 mt-2 rounded-lg bg-black-dark px-2 py-2 before:absolute before:bottom-full before:left-[calc(50%-6px)] before:border-b-6 before:border-l-6 before:border-r-6 before:border-b-black-dark before:border-l-transparent before:border-r-transparent before:content-['']"
                    ref={setPopperElement}
                    style={hintStyles.popper}
                    {...hintAttributes.popper}
                >
                    {title}
                </div>
            )}
            {dropdownOpenItem === title && (
                <div
                    ref={setPopperItemElement}
                    style={dropdownItemStyles.popper}
                    {...dropdownItemAttributes.popper}
                >
                    1
                </div>
            )}
        </>
    );
}

export default ChannelBreadCrumbNavDropdownItem;
