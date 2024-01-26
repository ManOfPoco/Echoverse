import { useState } from "react";
import { usePopper } from "react-popper";
import { Transition } from "@headlessui/react";

import MobileNavBarDropdownItem from "./MobileNavBarDropdownItem";

import useCloseDropdown from "../../../hooks/useCloseDropdown";

import profile from "../../../assets/svg/profile.svg";
import settings from "../../../assets/svg/settings.svg";
import logOut from "../../../assets/svg/logOut.svg";

function MobileSideNavBarProfileDropdown({
    referenceElement,
    isDropdownOpen,
    setIsDropdownOpen,
}) {
    const username = "ManOfPoco";

    const [popperElement, setPopperElement] = useState(null);
    const { styles, attributes } = usePopper(referenceElement, popperElement);

    useCloseDropdown(
        referenceElement,
        isDropdownOpen,
        popperElement,
        setIsDropdownOpen
    );

    return (
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
                className="mb-2 w-52 after:absolute after:left-[calc(50%-8px)] after:top-full after:border-l-8
                after:border-r-8 after:border-t-8 after:border-l-transparent after:border-r-transparent after:border-t-gray-dark after:content-[''] sm:w-64"
                ref={setPopperElement}
                style={styles.popper}
                {...attributes.popper}
            >
                <div className="flex flex-col gap-2 rounded-xl bg-gray-dark py-1 overflow-hidden">
                    <MobileNavBarDropdownItem
                        img={profile}
                        alt="profile"
                        to={`/${username}`}
                        title="Profile"
                    />
                    <MobileNavBarDropdownItem
                        img={settings}
                        alt="account-settings"
                        to="/account/edit"
                        title="Account settings"
                    />
                    <MobileNavBarDropdownItem
                        img={logOut}
                        alt="sign-out"
                        to="/sign-out"
                        title="Sign out"
                    />
                </div>
            </div>
        </Transition>
    );
}

export default MobileSideNavBarProfileDropdown;
