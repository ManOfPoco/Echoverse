import { Transition } from "@headlessui/react";
import { useEffect, useRef, useState } from "react";

function Dropdown({
    title = null,
    svgTitle = null,
    imageTitle = null,
    dropdownWidth = "w-36",
    children,
}) {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);

    useEffect(() => {
        function closeDropdown(e) {
            if (
                dropdownRef.current &&
                isDropdownOpen &&
                !dropdownRef.current.contains(e.target)
            )
                setIsDropdownOpen(false);
        }
        document.addEventListener("mousedown", closeDropdown);

        return () => {
            document.removeEventListener("mousedown", closeDropdown);
        };
    }, [isDropdownOpen]);

    return (
        <div
            className="relative inline-block cursor-pointer text-left"
            ref={dropdownRef}
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
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
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-300"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <div
                    className={`absolute right-0 z-50 mt-3 w-36 origin-top-right rounded-lg bg-gray-dark px-4 py-2.5 shadow-xl ${dropdownWidth}`}
                >
                    <div className="flex flex-col gap-5">{children}</div>
                </div>
            </Transition>
        </div>
    );
}

export default Dropdown;
