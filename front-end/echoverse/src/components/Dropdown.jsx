import { Transition } from "@headlessui/react";
import { useEffect, useState } from "react";
import { usePopper } from "react-popper";
import useCloseDropdown from "../hooks/useCloseDropdown";

const placementMarginMapping = {
    left: "me-1",
    top: "mb-1",
    right: "ms-1",
    bottom: "mt-1",
};

function Dropdown({
    title = null,
    svgTitle = null,
    imageTitle = null,
    imageSize = "w-12 h-12",
    placement = "bottom-start",
    dropdownWidth = "w-36",
    children,
}) {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const [referenceElement, setReferenceElement] = useState(null);
    const [popperElement, setPopperElement] = useState(null);
    const { styles, attributes } = usePopper(referenceElement, popperElement, {
        placement: placement,
    });

    const placementMargin = placementMarginMapping[placement.split("-")[0]];

    useCloseDropdown(
        referenceElement,
        isDropdownOpen,
        popperElement,
        setIsDropdownOpen
    );

    function handleToggle() {
        setIsDropdownOpen(!isDropdownOpen);
    }

    return (
        <div
            className="z-50 cursor-pointer text-left"
            ref={setReferenceElement}
            onClick={handleToggle}
        >
            {title ? (
                <div className="flex gap-1 transition-colors duration-500 hover:text-cyan-200">
                    <span>{title}</span>
                    <img
                        draggable="false"
                        className="h-5 w-4"
                        src={svgTitle}
                        alt="arrowDown"
                    />
                </div>
            ) : (
                <img
                    draggable="false"
                    className={`aspect-square ${imageSize} rounded-full object-cover`}
                    src={imageTitle}
                    alt={imageTitle}
                />
            )}

            <Transition
                show={isDropdownOpen}
                enter="transition ease-out duration-300"
                enterFrom="transform opacity-0"
                enterTo="transform opacity-100"
                leave="transition ease-in duration-300"
                leaveFrom="transform opacity-100"
                leaveTo="transform opacity-0"
            >
                <div
                    className={`z-50 flex flex-col gap-1 bg-gray-dark py-1 rounded-xl shadow-xl ${dropdownWidth} ${placementMargin}`}
                    ref={setPopperElement}
                    style={styles.popper}
                    {...attributes.popper}
                >
                    {children}
                </div>
            </Transition>
        </div>
    );
}

export default Dropdown;
