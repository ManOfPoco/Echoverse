import { Fragment } from "react";
import { Transition } from "@headlessui/react";

import useWindowDimensions from "../../../hooks/useWindowDimensions";
import SettingOption from "./SettingOption";
import SettingsSection from "./SettingsSection";

import privacy from "../../../assets/svg/privacy.svg";
import profile from "../../../assets/svg/profile.svg";
import profileSquare from "../../../assets/svg/profileSquare.svg";
import blocked from "../../../assets/svg/blocked.svg";

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
                <div className="divide-y divide-white">
                    <SettingsSection title="User Settings">
                        <SettingOption
                            to="/account/edit"
                            icon={profile}
                            title="Edit profile"
                        />
                        <SettingOption
                            to="/account/server_profile"
                            icon={profileSquare}
                            title="Edit server profile"
                        />
                    </SettingsSection>
                    <SettingsSection title="What you see">
                        <SettingOption
                            to="/account/privacy"
                            icon={privacy}
                            title="Privacy"
                        />
                    </SettingsSection>
                    <SettingsSection title="Who can you your content">
                        <SettingOption
                            to="/account/blocked_accounts"
                            icon={blocked}
                            title="Blocked accounts"
                        />
                    </SettingsSection>
                </div>
            </div>
        </Transition>
    );
}

export default SettingsMenu;
