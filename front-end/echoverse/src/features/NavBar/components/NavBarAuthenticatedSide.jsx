import { useState } from "react";

import NavBarProfileAuthenticatedDropdown from "./NavBarProfileAutheticatedDropdown";
import NavBarAuthenticatedProfileDropdownFull from "./NavBarAuthenticatedProfileDropdownFull";

import NavLink from "./NavLink";

import person from "../../../assets/img/person.jpg";
import bellOpened from "../../../assets/svg/bellOpened.svg";
import arrowRight from "../../../assets/svg/arrowRight.svg";
import bell from "../../../assets/svg/bell.svg";
import ChatBubbleSvg from "./ChatBubbleSvg";

function NavBarAuthenticatedSide() {
    const isAuthenticated = true;

    const [isNotificationOpen, setIsNotificationOpen] = useState(false);

    return (
        <>
            {isAuthenticated ? (
                <>
                    <div className="hidden md:flex md:gap-4 xl:gap-8">
                        <img
                            draggable="false"
                            className="h-5.5 w-5.5 cursor-pointer"
                            src={isNotificationOpen ? bellOpened : bell}
                            alt="arrowDown"
                            onClick={() =>
                                setIsNotificationOpen(!isNotificationOpen)
                            }
                        />
                        <NavLink link="/direct" enableGrayHover={false}>
                            <div className="flex items-center gap-2">
                                <span>Direct</span>
                                <ChatBubbleSvg width="22" height="22" />
                            </div>
                        </NavLink>
                    </div>
                    <div className="hidden md:flex">
                        <NavBarProfileAuthenticatedDropdown
                            image={person}
                            placement="bottom-end"
                            dropdownWidth="w-56"
                        />
                    </div>
                    <div className="z-50 flex md:hidden">
                        <NavBarAuthenticatedProfileDropdownFull
                            image={person}
                            placement="bottom-end"
                            dropdownWidth="w-56"
                        />
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

export default NavBarAuthenticatedSide;
