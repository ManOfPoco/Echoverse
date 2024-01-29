import { Transition } from "@headlessui/react";
import { useState } from "react";
import { usePopper } from "react-popper";
import useCloseDropdown from "../hooks/useCloseDropdown";

function Dropdown({
    title,
    titleZIndex = "z-50",
    placement = "bottom-start",
    modifiers = [],
    wrapperClassName,
    dropdownColor = "bg-gray-dark",
    className,
    children,
}) {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const [referenceElement, setReferenceElement] = useState(null);
    const [popperElement, setPopperElement] = useState(null);

    const { styles, attributes } = usePopper(referenceElement, popperElement, {
        placement: placement,
        modifiers: [
            {
                name: "offset",
                options: {
                    offset: [0, 4],
                },
            },
            ...modifiers,
        ],
    });

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
        <div>
            <div onClick={handleToggle} ref={setReferenceElement}>
                {title}
            </div>

            <div className={`relative ${titleZIndex}`}>
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
                            className={`${className} ${dropdownColor} z-50 flex flex-col overflow-hidden`}
                        >
                            {children}
                        </div>
                    </div>
                </Transition>
            </div>
        </div>
    );
}

export default Dropdown;
