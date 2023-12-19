import Dropdown from "../../../components/Dropdown";
import DropdownItem from "../../../components/DropdownItem";

import arrowRight from "../../../assets/svg/arrowRight.svg";
import bell from "../../../assets/svg/bell.svg";
import message from "../../../assets/svg/message.svg";
import profile from "../../../assets/img/profile.jpg";
import { Link } from "react-router-dom";

function NavBarAuthenticatedRightSide() {
    const isAuthenticated = false;

    return (
        <>
            {isAuthenticated ? (
                <>
                    <img
                        draggable="false"
                        className="cursor-pointer"
                        width="22"
                        height="22"
                        src={bell}
                        alt="arrowDown"
                    />
                    <div className="flex cursor-pointer gap-2">
                        <span>Direct</span>
                        <img
                            draggable="false"
                            width="22"
                            height="22"
                            src={message}
                            alt="arrowDown"
                        />
                    </div>
                    <Dropdown imageTitle={profile} width="w-48">
                        <DropdownItem
                            option="Profile"
                            link="/me"
                            key="Profile"
                        />
                        <DropdownItem
                            option="Account Settings"
                            link="/settings"
                            key="Account Settings"
                        />
                        <DropdownItem
                            option="Sign out"
                            link="/sign-out"
                            key="Sign out"
                        />
                    </Dropdown>
                </>
            ) : (
                <Link to="/login">
                    <div className="flex cursor-pointer gap-1">
                        <span>Log in</span>
                        <img
                            draggable="false"
                            width="14"
                            height="10"
                            src={arrowRight}
                            alt="arrowDown"
                        />
                    </div>
                </Link>
            )}
        </>
    );
}

export default NavBarAuthenticatedRightSide;
