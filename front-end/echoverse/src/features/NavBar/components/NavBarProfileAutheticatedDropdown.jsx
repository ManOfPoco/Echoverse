import Dropdown from "../../../components/Dropdown";
import DropdownItem from "../../../components/DropdownItem";
import DropdownTitle from "../../../components/DropdownTitle";

import profile from "../../../assets/svg/profile.svg";
import settings from "../../../assets/svg/settings.svg";
import logOut from "../../../assets/svg/logOut.svg";

function NavBarProfileAuthenticatedDropdown({
    image,
    imageSize = "w-12 h-12",
    placement = "right-start",
    dropdownWidth = "w-56",
    enableGrayHover = true,
    enableCyanHover = true,
}) {
    const username = "ManOfPoco";

    return (
        <Dropdown
            title={
                <DropdownTitle
                    imageTitle={image}
                    imageSize={imageSize}
                />
            }
            className={`${dropdownWidth} gap-1 py-1 rounded-xl`}
            placement={placement}
        >
            <DropdownItem
                link={`/${username}`}
                enableGrayHover={enableGrayHover}
                enableCyanHover={enableCyanHover}
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
                enableGrayHover={enableGrayHover}
                enableCyanHover={enableCyanHover}
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
                enableGrayHover={enableGrayHover}
                enableCyanHover={enableCyanHover}
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
    );
}

export default NavBarProfileAuthenticatedDropdown;
