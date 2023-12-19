import { useEffect, useRef, useState } from "react";

function Dropdown({
    title = null,
    svgTitle = null,
    imageTitle = null,
    dropdownWidth = "w-36",
    children,
}) {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    useEffect(() => {
        function closeDropdown(e) {
            if (
                dropdownRef.current &&
                isOpen &&
                !dropdownRef.current.contains(e.target)
            )
                setIsOpen(false);
        }
        document.addEventListener("mousedown", closeDropdown);

        return () => {
            document.removeEventListener("mousedown", closeDropdown);
        };
    }, [isOpen]);

    return (
        <div className="relative inline-block text-left" ref={dropdownRef}>
            <div
                className="flex cursor-pointer gap-1"
                onClick={() => setIsOpen(!isOpen)}
            >
                {title ? (
                    <>
                        <span>{title}</span>
                        <img
                            draggable='false'
                            className="w-4 h-5"
                            src={svgTitle}
                            alt="arrowDown"
                        />
                    </>
                ) : (
                    <img
                        draggable="false"
                        className="aspect-square rounded-full object-cover w-12 h-12"
                        src={imageTitle}
                        alt="arrowDown"
                    />
                )}
            </div>

            {isOpen && (
                <div
                    className={`absolute right-0 z-50 mt-3 w-36 origin-top-right rounded-lg bg-gray-dark px-4 py-2.5 shadow-xl ${dropdownWidth}`}
                >
                    <div className="flex flex-col gap-5">{children}</div>
                </div>
            )}
        </div>
    );
}

export default Dropdown;
