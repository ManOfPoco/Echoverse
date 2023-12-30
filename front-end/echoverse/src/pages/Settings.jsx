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
        <div className="h-full min-h-[calc(100dvh-72px)] max-w-full bg-black-night lg:min-h-[calc(100dvh-80px)] xl:min-h-[calc(100dvh-126px)]">
            <div className="mx-auto h-full min-h-[calc(100dvh-72px)] w-full max-w-[1080px] lg:min-h-[calc(100dvh-80px)] xl:min-h-[calc(100dvh-126px)]">
                <div className="flex h-full min-h-[calc(100dvh-72px)] md:divide-x md:divide-white lg:min-h-[calc(100dvh-80px)] lg:px-0 xl:min-h-[calc(100dvh-126px)]">
                    <SettingsMenu isMenuActive={isMenuActive} />
                    <Outlet context={[isMenuActive, setIsMenuActive]} />
                </div>
            </div>
        </div>
    );
}

export default Settings;
