import { useEffect } from "react";

function useCloseDropdown(
    referenceElement,
    isDropdownOpen,
    popperElement,
    setIsDropdownOpen,
    callback
) {
    useEffect(() => {
        function closeDropdown(e) {
            const isModalOpen =
                document.getElementById("headlessui-portal-root") !== null;

            if (
                referenceElement &&
                isDropdownOpen &&
                !referenceElement.contains(e.target) &&
                !popperElement.contains(e.target) &&
                !isModalOpen
            ) {
                setIsDropdownOpen(false);
                if (callback) {
                    callback();
                }
            }
        }
        document.addEventListener("mousedown", closeDropdown);

        return () => {
            document.removeEventListener("mousedown", closeDropdown);
        };
    }, [
        referenceElement,
        popperElement,
        isDropdownOpen,
        setIsDropdownOpen,
        callback,
    ]);
}

export default useCloseDropdown;
