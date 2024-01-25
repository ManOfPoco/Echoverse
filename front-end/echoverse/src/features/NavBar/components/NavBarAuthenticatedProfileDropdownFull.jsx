import Dropdown from "../../../components/Dropdown";
import DropdownItem from "../../../components/DropdownItem";

import ChatBubbleSvg from "./ChatBubbleSvg";
import profile from "../../../assets/svg/profile.svg";
import settings from "../../../assets/svg/settings.svg";
import logOut from "../../../assets/svg/logOut.svg";
import bell from "../../../assets/svg/bell.svg";

function NavBarAuthenticatedProfileDropdownFull({
    image,
    placement = "right-start",
    dropdownWidth = "w-52",
}) {
    const username = "ManOfPoco";

    return (
        <Dropdown
            imageTitle={image}
            imageSize="w-10 h-10"
            dropdownWidth={dropdownWidth}
            placement={placement}
        >
            <DropdownItem link={`/${username}`} key="Profile">
                <div className="flex w-fit items-center gap-3 rounded-lg px-4 py-2">
                    <img src={profile} className="h-7 w-7" alt="profile" />
                    <span>Profile</span>
                </div>
            </DropdownItem>
            <DropdownItem link="/direct" key="Direct">
                <div className="flex w-fit items-center gap-3 rounded-lg px-4 py-2">
                    <ChatBubbleSvg />
                    <span>Direct</span>
                </div>
            </DropdownItem>
            <DropdownItem link="/notification" key="Notification">
                <div className="flex w-fit items-center gap-3 rounded-lg px-4 py-2">
                    <img src={bell} className="h-7 w-7" alt="notifications" />
                    <span>Notifications</span>
                </div>
            </DropdownItem>
            <DropdownItem link="/account/edit" key="Account settings">
                <div className="flex w-fit items-center gap-3 rounded-lg px-4 py-2">
                    <img
                        src={settings}
                        className="h-7 w-7"
                        alt="account-settings"
                    />
                    <span>Account settings</span>
                </div>
            </DropdownItem>
            <DropdownItem link="/sign-out" key="Sign out">
                <div className="flex w-fit items-center gap-3 rounded-lg px-4 py-2">
                    <img src={logOut} className="h-7 w-7" alt="sign-out" />
                    <span>Sign out</span>
                </div>
            </DropdownItem>
        </Dropdown>
    );
}

export default NavBarAuthenticatedProfileDropdownFull;
