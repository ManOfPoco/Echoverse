import { useEffect } from "react";

function useCloseDropdown(
    referenceElement,
    isDropdownOpen,
    popperElement,
    setIsDropdownOpen
) {
    useEffect(() => {
        function closeDropdown(e) {
            if (
                referenceElement &&
                isDropdownOpen &&
                !referenceElement.contains(e.target) &&
                !popperElement.contains(e.target)
            )
                setIsDropdownOpen((isDropdownOpen) => !isDropdownOpen);
        }
        document.addEventListener("mousedown", closeDropdown);

        return () => {
            document.removeEventListener("mousedown", closeDropdown);
        };
    }, [referenceElement, popperElement, isDropdownOpen, setIsDropdownOpen]);
}

export default useCloseDropdown;
