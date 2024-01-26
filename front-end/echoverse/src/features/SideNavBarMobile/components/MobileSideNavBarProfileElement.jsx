import Dropdown from "../../../components/Dropdown";
import DropdownItem from "../../../components/DropdownItem";
import MobileSideNavBarProfileMoreSvg from "./MobileSideNavBarProfileMoreSvg";

import profile from "../../../assets/svg/profile.svg";
import settings from "../../../assets/svg/settings.svg";
import logOut from "../../../assets/svg/logOut.svg";

function MobileSideNavBarProfileElement() {
    const username = "ManOfPoco";
    const displayName = "ManOfPoco";

    return (
        <>
            <Dropdown
                title={
                    <MobileSideNavBarProfileMoreSvg
                        username={username}
                        displayName={displayName}
                    />
                }
                wrapperClassName="after:absolute after:left-[calc(50%-8px)] after:top-full after:z-50 after:border-l-8 after:border-r-8 after:border-t-8 after:border-l-transparent after:border-r-transparent after:border-t-gray-dark after:content-[''] mb-2"
                className="w-64 gap-2 rounded-xl py-2"
            >
                <DropdownItem
                    link={`/${username}`}
                    enableGrayHover={true}
                    enableCyanHover={false}
                    key="Profile"
                >
                    <div className="flex w-fit items-center gap-3 rounded-lg px-4 py-2">
                        <img
                            draggable={false}
                            src={profile}
                            className="h-7 w-7"
                            alt="profile"
                        />
                        <span>Profile</span>
                    </div>
                </DropdownItem>
                <DropdownItem
                    link="/account/edit"
                    enableGrayHover={true}
                    enableCyanHover={false}
                    key="Account settings"
                >
                    <div className="flex w-fit items-center gap-3 rounded-lg px-4 py-2">
                        <img
                            draggable={false}
                            src={settings}
                            className="h-7 w-7"
                            alt="account-settings"
                        />
                        <span>Account settings</span>
                    </div>
                </DropdownItem>
                <DropdownItem
                    link="/sign-out"
                    enableGrayHover={true}
                    enableCyanHover={false}
                    key="Sign out"
                >
                    <div className="flex w-fit items-center gap-3 rounded-lg px-4 py-2">
                        <img
                            draggable={false}
                            src={logOut}
                            className="h-7 w-7"
                            alt="sign-out"
                        />
                        <span>Sign out</span>
                    </div>
                </DropdownItem>
            </Dropdown>
        </>
    );
}

export default MobileSideNavBarProfileElement;
