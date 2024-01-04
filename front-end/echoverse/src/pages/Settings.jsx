import { useState } from "react";
import { Outlet } from "react-router-dom";

import SettingsMenu from "../features/Settings/components/SettingsMenu";

import useWindowDimensions from "../hooks/useWindowDimensions";

function Settings() {
    const { height, width } = useWindowDimensions();
    const [isMenuActive, setIsMenuActive] = useState(function () {
        if (width < 768) {
            return false;
        } else return true;
    });

    return (
        <div className="h-full max-w-full bg-black-night ">
            <div className="mx-auto h-full w-full max-w-[1080px]">
                <div className="flex h-full items-stretch md:divide-x md:divide-white">
                    <SettingsMenu isMenuActive={isMenuActive} />
                    <Outlet context={[isMenuActive, setIsMenuActive]} />
                </div>
            </div>
        </div>
    );
}

export default Settings;
