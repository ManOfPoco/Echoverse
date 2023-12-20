import Dropdown from "../../../components/Dropdown";
import DropdownItem from "../../../components/DropdownItem";

import arrowRight from "../../../assets/svg/arrowRight.svg";
import bell from "../../../assets/svg/bell.svg";

import bellOpened from "../../../assets/svg/bellOpened.svg";
import message from "../../../assets/svg/message.svg";
import profile from "../../../assets/img/profile.jpg";

import NavLink from "./NavLink";
import { useState } from "react";

function NavBarAuthenticatedRightSide() {
    const isAuthenticated = true;

    const [isNotificationOpen, setIsNotificationOpen] = useState(false);

    return (
        <>
            {isAuthenticated ? (
                <>
                    <div className="xl:gap-8 hidden md:flex md:gap-4">
                        <img
                            draggable="false"
                            className="h-5.5 w-5.5 cursor-pointer"
                            src={isNotificationOpen ? bellOpened : bell}
                            alt="arrowDown"
                            onClick={() => setIsNotificationOpen(!isNotificationOpen)}
                        />
                        <NavLink link="/direct">
                            <div className="flex gap-2">
                                <span>Direct</span>
                                <img
                                    draggable="false"
                                    className="h-5.5 w-5.5"
                                    src={message}
                                    alt="arrowDown"
                                />
                            </div>
                        </NavLink>
                    </div>
                    <div className="hidden md:flex">
                        <Dropdown imageTitle={profile} dropdownWidth="w-48">
                            <DropdownItem
                                isNavLink={true}
                                link="/me"
                                key="Profile"
                            >
                                Profile
                            </DropdownItem>
                            <DropdownItem
                                isNavLink={true}
                                link="/settings"
                                key="Account settings"
                            >
                                Account settings
                            </DropdownItem>
                            <DropdownItem
                                isNavLink={true}
                                link="/sign-out"
                                key="Sign out"
                            >
                                Sign out
                            </DropdownItem>
                        </Dropdown>
                    </div>
                    <div className="z-50 flex md:hidden">
                        <Dropdown imageTitle={profile} dropdownWidth="w-48">
                            <DropdownItem
                                isNavLink={true}
                                link="/me"
                                key="Profile"
                            >
                                Profile
                            </DropdownItem>
                            <DropdownItem
                                isNavLink={true}
                                link="/me"
                                key="Direct"
                            >
                                Direct
                            </DropdownItem>
                            <DropdownItem
                                isNavLink={true}
                                link="/me"
                                key="Notification"
                            >
                                Notification
                            </DropdownItem>
                            <DropdownItem
                                isNavLink={true}
                                link="/settings"
                                key="Account settings"
                            >
                                Account settings
                            </DropdownItem>
                            <DropdownItem
                                isNavLink={true}
                                link="/sign-out"
                                key="Sign out"
                            >
                                Sign out
                            </DropdownItem>
                        </Dropdown>
                    </div>
                </>
            ) : (
                <NavLink link="/login">
                    <div className="flex cursor-pointer gap-1">
                        <span>Log in</span>
                        <img
                            draggable="false"
                            className="h-5 w-4"
                            src={arrowRight}
                            alt="arrowDown"
                        />
                    </div>
                </NavLink>
            )}
        </>
    );
}

export default NavBarAuthenticatedRightSide;