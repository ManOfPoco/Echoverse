import { Transition } from "@headlessui/react";
import { useEffect, useRef, useState } from "react";
import { usePopper } from "react-popper";

function Dropdown({
    title = null,
    svgTitle = null,
    imageTitle = null,
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

    useEffect(() => {
        function closeDropdown(e) {
            if (
                referenceElement &&
                isDropdownOpen &&
                !referenceElement.contains(e.target)
            )
                setIsDropdownOpen(false);
        }
        document.addEventListener("mousedown", closeDropdown);

        return () => {
            document.removeEventListener("mousedown", closeDropdown);
        };
    }, [referenceElement, isDropdownOpen]);

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
                    className="aspect-square h-12 w-12 rounded-full object-cover"
                    src={imageTitle}
                    alt="arrowDown"
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
                    className={`z-50 mt-3 w-36 origin-top-right rounded-lg bg-gray-dark px-4 py-2.5 shadow-xl ${dropdownWidth}`}
                    ref={setPopperElement}
                    style={styles.popper}
                    {...attributes.popper}
                >
                    <div className="flex flex-col gap-5">{children}</div>
                </div>
            </Transition>
        </div>
    );
}

export default Dropdown;
