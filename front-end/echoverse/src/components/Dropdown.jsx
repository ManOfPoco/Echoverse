import { Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { usePopper } from "react-popper";
import useCloseDropdown from "../hooks/useCloseDropdown";

const placementMarginMapping = {
    left: "me-1",
    top: "mb-1",
    right: "ms-1",
    bottom: "mt-1",
};

function Dropdown({
    title,
    titleZIndex = "z-50",
    placement = "bottom-start",
    wrapperClassName,
    className,
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
            className={`cursor-pointer text-left ${titleZIndex}`}
            ref={setReferenceElement}
            onClick={handleToggle}
        >
            {title}

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
                    ref={setPopperElement}
                    style={styles.popper}
                    {...attributes.popper}
                    className={wrapperClassName}
                >
                    <div
                        className={`${className} ${placementMargin} z-50 flex flex-col overflow-hidden bg-gray-dark`}
                    >
                        {children}
                    </div>
                </div>
            </Transition>
        </div>
    );
}

export default Dropdown;
