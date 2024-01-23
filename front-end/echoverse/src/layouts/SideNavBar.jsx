import LogoIconOnly from "../features/SideNavBar/components/LogoIconOnly";
import SideNavBarElement from "../features/SideNavBar/components/SideNavBarElement";
import SideNavBarProfileDropdown from "../features/SideNavBar/components/SideNavBarProfileDropdown";

import searchWhite from "../assets/svg/searchWhite.svg";
import people from "../assets/svg/people.svg";
import threads from "../assets/svg/threads.svg";
import controllerWhite from "../assets/svg/controllerWhite.svg";
import about from "../assets/svg/about.svg";
import bell from "../assets/svg/bell.svg";
import chatBubble from "../assets/svg/chatBubble.svg";
import login from "../assets/svg/login.svg";

function SideNavBar() {
    const isAuthenticated = true;

    return (
        <nav className="z-50 flex h-dvh min-w-fit flex-col justify-between gap-7 bg-black-night px-1 pb-5 pt-1 font-archivo-black text-sm">
            <div className="flex flex-col items-center gap-7">
                <LogoIconOnly />
                <div className="flex flex-col gap-6">
                    <SideNavBarElement
                        link="/search"
                        img={searchWhite}
                        alt="search"
                    />
                    <SideNavBarElement
                        link="/explore/people"
                        img={people}
                        alt="people"
                    />
                    <SideNavBarElement
                        link="/explore/threads"
                        img={threads}
                        alt="threads"
                    />
                    <SideNavBarElement
                        link="/games"
                        img={controllerWhite}
                        alt="games"
                    />
                    <SideNavBarElement link="/about" img={about} alt="about" />
                </div>
            </div>
            <div className="flex flex-col items-center gap-6">
                {isAuthenticated ? (
                    <>
                        <div className="flex flex-col items-center gap-6">
                            <SideNavBarElement
                                link="/notification"
                                img={bell}
                                alt="notification"
                            />
                            <SideNavBarElement
                                link="/direct"
                                img={chatBubble}
                                alt="people"
                            />
                            <SideNavBarProfileDropdown />
                        </div>
                    </>
                ) : (
                    <SideNavBarElement link="/login" img={login} alt="login" />
                )}
            </div>
        </nav>
    );
}

export default SideNavBar;
