import { useState } from "react";
import { Outlet } from "react-router-dom";

import SettingsMenu from "../features/Settings/components/SettingsMenu";

import useWindowDimensions from "../hooks/useWindowDimensions";

import arrowRight from "../assets/svg/arrowRight.svg";

function Settings() {
    const { height, width } = useWindowDimensions();
    const [isMenuActive, setIsMenuActive] = useState(function () {
        if (width < 768) {
            return false;
        } else return true;
    });

    function handleHideMenu() {
        if (width < 768 && isMenuActive === true) {
            setIsMenuActive(false);
        }
    }

    return (
        <div className="h-full max-w-full bg-black-night ">
            <div className="mx-auto h-full w-full max-w-[1080px]">
                <div className="flex h-full md:divide-x md:divide-white">
                    <SettingsMenu isMenuActive={isMenuActive} />
                    <div className="flex h-full min-h-[calc(100dvh-72px)] w-full flex-col pe-5 ps-5 sm:ps-10 lg:min-h-[calc(100dvh-80px)] xl:min-h-[calc(100dvh-126px)]">
                        <img
                            src={arrowRight}
                            className="h-8 w-8 md:hidden"
                            onClick={() => setIsMenuActive(true)}
                        />
                        <div className="py-5 md:py-10" onClick={handleHideMenu}>
                            <Outlet context={[isMenuActive, setIsMenuActive]} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Settings;
