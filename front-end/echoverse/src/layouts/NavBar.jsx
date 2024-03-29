import { useEffect, useState } from "react";

import Dropdown from "../components/Dropdown";
import DropdownTitle from "../components/DropdownTitle";
import DropdownItem from "../components/DropdownItem";
import Logo from "../components/Logo";
import SearchForm from "../components/SearchForm";

import NavBarAuthenticatedSide from "../features/NavBar/components/NavBarAuthenticatedSide";
import NavLink from "../features/NavBar/components/NavLink";
import NavBarMobileMenu from "../features/NavBar/components/NavBarMobileMenu";

import dropdownArrowDown from "../assets/svg/dropdownArrowDown.svg";
import menu from "../assets/svg/menu.svg";
import menuOpened from "../assets/svg/menuOpened.svg";
import people from "../assets/svg/people.svg";
import threads from "../assets/svg/threads.svg";

function NavBar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isNavOnTop, setIsNavOnTop] = useState(true);
    const [query, setQuery] = useState("");

    useEffect(() => {
        function handleScroll() {
            if (window.scrollY > 64) {
                setIsNavOnTop(false);
            } else setIsNavOnTop(true);
        }

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.addEventListener("scroll", handleScroll);
        };
    }, [isNavOnTop]);

    function handleRequest(e) {
        if (e.key === "Enter") {
            console.log("request");
        }
    }

    return (
        <nav
            className={`sticky top-0 z-50 font-archivo-black text-sm transition-all duration-300 lg:tracking-wide ${
                isMenuOpen ? "bg-black-light" : ""
            } ${isNavOnTop ? "" : "bg-black-light"}`}
        >
            <div className="mx-2 flex justify-between py-2 lg:mx-5 xl:mx-10 xl:mt-7.5">
                <div className="flex items-center gap-4 lg:hidden">
                    <img
                        draggable={false}
                        className={`h-5.5 w-5.5 transition-all duration-300 ${
                            isMenuOpen ? "rotate-180" : ""
                        }`}
                        src={isMenuOpen ? menuOpened : menu}
                        alt="menu"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    />
                    <div className="hidden md:block">
                        <Logo />
                    </div>
                </div>
                <div className="block md:hidden">
                    <Logo />
                </div>
                <div className="hidden lg:flex">
                    <div className="hidden lg:block">
                        <Logo classes={"lg:h-16 lg:w-52 xl:h-20 xl:w-72"} />
                    </div>

                    <div className="flex flex-col items-center gap-4 lg:ms-4 lg:flex-row lg:gap-4 xl:ms-8 xl:gap-8">
                        <Dropdown
                            title={
                                <DropdownTitle
                                    title="Explore"
                                    svgTitle={dropdownArrowDown}
                                />
                            }
                            className={`w-44 gap-1 py-1 rounded-xl`}
                        >
                            <DropdownItem
                                link="/explore/people"
                                key="People"
                            >
                                <div className="flex w-fit items-center gap-3 px-4 py-2">
                                    <img
                                        draggable={false}
                                        src={people}
                                        className="h-7 w-7"
                                        alt="people"
                                    />
                                    <span>People</span>
                                </div>
                            </DropdownItem>
                            <DropdownItem
                                link="/explore/threads"
                                key="Threads"
                            >
                                <div className="flex w-fit items-center gap-3 px-4 py-2">
                                    <img
                                        draggable={false}
                                        src={threads}
                                        className="h-7 w-7"
                                        alt="threads"
                                    />
                                    <span>Threads</span>
                                </div>
                            </DropdownItem>
                        </Dropdown>
                        <NavLink link="/games" enableGrayHover={false}>
                            Games
                        </NavLink>
                        {/* <NavLink link="/about" enableGrayHover={false}>
                            About
                        </NavLink> */}
                    </div>
                </div>
                <div className="flex items-center gap-2 md:gap-4 xl:gap-8">
                    <div className="hidden md:block">
                        <SearchForm
                            query={query}
                            onChange={(e) => setQuery(e.target.value)}
                            handleRequest={(e) => handleRequest(e)}
                        />
                    </div>
                    <NavBarAuthenticatedSide />
                </div>
            </div>

            <NavBarMobileMenu isMenuOpen={isMenuOpen} />
        </nav>
    );
}

export default NavBar;
