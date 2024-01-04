import { Fragment } from "react";
import { NavLink } from "react-router-dom";
import { Transition } from "@headlessui/react";

import useWindowDimensions from "../../../hooks/useWindowDimensions";
import SettingOption from "./SettingOption";

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
                className={`fixed z-30 min-h-[calc(100dvh-72px)]
                w-fit px-5 py-5 pt-10 sm:pe-10 md:static lg:min-h-[calc(100dvh-80px)] xl:min-h-[calc(100dvh-126px)] ${
                    width < 768 ? "bg-gray-dark shadow-xl" : "bg-black-night"
                }`}
            >
                <h4 className="px-4 text-xl font-semibold lg:font-bold">
                    Settings
                </h4>
                <div className="mt-5 flex flex-col gap-0.5">
                    <SettingOption to="/account" title="Edit profile" />
                    <SettingOption to="/account/security" title="Security" />
                    <SettingOption to="/account/privacy" title="Privacy" />
                </div>
            </div>
        </Transition>
    );
}

export default SettingsMenu;
