import { Fragment, useEffect, useRef } from "react";
import { Transition } from "@headlessui/react";

import MobileSideNavBarElement from "../features/SideNavBarMobile/components/MobileSideNavBarElement";
import MobileSideNavBarProfileElement from "../features/SideNavBarMobile/components/MobileSideNavBarProfileElement";

import Logo from "../components/Logo";

import searchWhite from "../assets/svg/searchWhite.svg";
import people from "../assets/svg/people.svg";
import threads from "../assets/svg/threads.svg";
import controllerWhite from "../assets/svg/controllerWhite.svg";
import about from "../assets/svg/about.svg";
import bellFilled from "../assets/svg/bellFilled.svg";
import chatBubble from "../assets/svg/chatBubble.svg";
import login from "../assets/svg/login.svg";

function SideNavBarMobile({ isSideNavBarActive, setIsSideNavBarActive }) {
    const isAuthenticated = true;

    const navBarRef = useRef(null);

    useEffect(() => {
        function closeDropdown(e) {
            const navBarRf = navBarRef.current;

            if (navBarRf && isSideNavBarActive && !navBarRf.contains(e.target))
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
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
            >
                <nav
                    className="absolute z-50 flex h-dvh min-w-fit flex-col justify-between gap-7 bg-black-night pb-5 pt-1 text-lg font-semibold"
                    ref={navBarRef}
                >
                    <div className="flex flex-col gap-2">
                        <div className="w-fit px-6">
                            <Logo />
                        </div>
                        <div className="flex flex-col gap-2 px-4">
                            <MobileSideNavBarElement
                                link="/search"
                                img={searchWhite}
                                alt="search"
                                title="Search"
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
                                link="/about"
                                img={about}
                                alt="about"
                                title="About"
                            />
                        </div>
                    </div>
                    <div className="flex flex-col items-center gap-10 px-6">
                        {isAuthenticated ? (
                            <div>
                                <div className="flex flex-col gap-2">
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
                                </div>
                                <div className="pt-2">
                                    <MobileSideNavBarProfileElement />
                                </div>
                            </div>
                        ) : (
                            <MobileSideNavBarElement
                                link="/login"
                                img={login}
                                alt="login"
                                title="Login"
                            />
                        )}
                    </div>
                </nav>
            </Transition>
        </>
    );
}

export default SideNavBarMobile;
