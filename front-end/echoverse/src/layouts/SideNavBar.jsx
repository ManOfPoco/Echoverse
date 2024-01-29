import { Fragment, useEffect, useRef } from "react";
import { Transition } from "@headlessui/react";

import MobileSideNavBarElement from "../features/SideNavBar/components/MobileSideNavBarElement";

import Logo from "../components/Logo";

import searchWhite from "../assets/svg/searchWhite.svg";
import people from "../assets/svg/people.svg";
import threads from "../assets/svg/threads.svg";
import controllerWhite from "../assets/svg/controllerWhite.svg";
import about from "../assets/svg/about.svg";
import bellFilled from "../assets/svg/bellFilled.svg";
import chatBubble from "../assets/svg/chatBubble.svg";
import settingsFilled from "../assets/svg/settingsFilled.svg";
import profileFilled from "../assets/svg/profileFilled.svg";
import DropdownUserCard from "../features/ChannelUserCard/components/DropdownUserCard";
import MobileSideNavBarProfileMoreSvg from "../features/SideNavBar/components/MobileSideNavBarProfileMoreSvg";

function SideNavBar({ isSideNavBarActive, setIsSideNavBarActive }) {
    const navBarRef = useRef(null);
    const username = "ManOfPoco";
    const displayName = "ManOfPoco";

    useEffect(() => {
        function closeDropdown(e) {
            const navBarRf = navBarRef.current;
            const isModalOpen =
                document.getElementById("headlessui-portal-root") !== null;

            if (
                navBarRf &&
                isSideNavBarActive &&
                !navBarRf.contains(e.target) &&
                !isModalOpen
            )
                setIsSideNavBarActive(false);
        }
        document.addEventListener("mousedown", closeDropdown);

        return () => {
            document.removeEventListener("mousedown", closeDropdown);
        };
    }, [isSideNavBarActive, setIsSideNavBarActive]);

    return (
        <>
            <Transition
                as={Fragment}
                show={isSideNavBarActive}
                enter="transform transition ease-in-out duration-500"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
            >
                <nav
                    className="absolute z-50 flex h-dvh min-w-fit flex-col justify-between bg-black-raisin text-lg font-semibold"
                    ref={navBarRef}
                >
                    <div className="flex h-[100dvh-65px] flex-col gap-1 overflow-y-auto">
                        <div className="w-fit px-4 md:px-6">
                            <Logo />
                        </div>
                        <div className="flex flex-col gap-1 px-2 md:px-4">
                            <MobileSideNavBarElement
                                link="/search"
                                img={searchWhite}
                                alt="search"
                                title="Search"
                            />
                            <MobileSideNavBarElement
                                link="/notification"
                                img={bellFilled}
                                alt="notification"
                                title="Notifications"
                            />
                            <MobileSideNavBarElement
                                link="/direct"
                                img={chatBubble}
                                alt="people"
                                title="Direct"
                            />
                            <MobileSideNavBarElement
                                link="/explore/people"
                                img={people}
                                alt="people"
                                title="People"
                            />
                            <MobileSideNavBarElement
                                link="/explore/threads"
                                img={threads}
                                alt="threads"
                                title="Threads"
                            />
                            <MobileSideNavBarElement
                                link="/games"
                                img={controllerWhite}
                                alt="games"
                                title="Games"
                            />
                            <MobileSideNavBarElement
                                link={`/${username}`}
                                img={profileFilled}
                                alt="profile"
                                title="Profile"
                            />
                            <MobileSideNavBarElement
                                link="/account/edit"
                                img={settingsFilled}
                                alt="account-settings"
                                title="Account settings"
                            />
                            <MobileSideNavBarElement
                                link="/about"
                                img={about}
                                alt="about"
                                title="About"
                            />
                        </div>
                    </div>

                    <DropdownUserCard
                        referenceElement={
                            <MobileSideNavBarProfileMoreSvg
                                username={username}
                                displayName={displayName}
                            />
                        }
                        placement="top-start"
                        showAdditionalOptions={true}
                    />
                </nav>
            </Transition>
        </>
    );
}

export default SideNavBar;
