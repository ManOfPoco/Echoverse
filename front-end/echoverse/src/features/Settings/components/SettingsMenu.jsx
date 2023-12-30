import { Fragment } from "react";
import { NavLink } from "react-router-dom";
import { Transition } from "@headlessui/react";

import useWindowDimensions from "../../../hooks/useWindowDimensions";

function SettingsMenu({ isMenuActive }) {
    const { height, width } = useWindowDimensions();

    return (
        <Transition
            as={Fragment}
            show={width < 768 ? isMenuActive : true}
            enter="transform transition ease-in-out duration-500 sm:duration-700"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transform transition ease-in-out duration-500 sm:duration-700"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
        >
            <div
                className={`absolute z-30 h-full w-fit px-5 py-10 sm:pe-10 md:static ${
                    width < 768 ? "bg-gray-dark shadow-xl" : "bg-black-night"
                }`}
            >
                <h4 className="px-4 text-xl font-semibold lg:font-bold">
                    Settings
                </h4>
                <div className="mt-5 flex flex-col">
                    <NavLink
                        className={({ isActive }) =>
                            isActive ? "w-48 rounded-lg bg-gray-charcoal" : ""
                        }
                        to={`/account`}
                    >
                        <div className="flex h-14 items-center">
                            <h5 className="w-48 cursor-pointer px-4 text-xl">
                                Edit profile
                            </h5>
                        </div>
                    </NavLink>
                    <NavLink
                        className={({ isActive }) =>
                            isActive ? "w-48 rounded-lg bg-gray-charcoal" : ""
                        }
                        to={`/account/security`}
                    >
                        <div className="flex h-14 items-center">
                            <h5 className="cursor-pointer px-4 text-xl">
                                Security
                            </h5>
                        </div>
                    </NavLink>
                    <NavLink
                        className={({ isActive }) =>
                            isActive ? "rounded-lg bg-gray-charcoal" : ""
                        }
                        to={`/account/privacy`}
                    >
                        <div className="flex h-14 items-center">
                            <h5 className="cursor-pointer px-4 text-xl">
                                Privacy
                            </h5>
                        </div>
                    </NavLink>
                </div>
            </div>
        </Transition>
    );
}

export default SettingsMenu;
