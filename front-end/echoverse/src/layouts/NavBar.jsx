import Dropdown from "../components/Dropdown";
import DropdownItem from "../components/DropdownItem";
import Logo from "../components/Logo";
import SearchForm from "../components/SearchForm";

import NavBarAuthenticatedRightSide from "../features/NavBar/components/NavBarAuthenticatedRightSide";

import NavLink from "../features/NavBar/components/NavLink";
import dropdownArrowDown from "../assets/svg/dropdownArrowDown.svg";

import menu from "../assets/svg/menu.svg";
import menuOpened from "../assets/svg/menuOpened.svg";
import { useState } from "react";
import { Transition } from "@headlessui/react";
import { NavBarMobileMenu } from "../features/NavBar/components/NavBarMobileMenu";

function NavBar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav
            className={`sticky top-0 font-archivo-black text-sm transition-colors duration-500 lg:tracking-wide ${
                isMenuOpen ? "bg-black-light" : ""
            }`}
        >
            <div className="mx-2 flex justify-between pt-2 lg:mx-5 xl:mx-10 xl:mt-7.5">
                <div className="flex items-center gap-4 lg:hidden">
                    <img
                        draggable="false"
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
                        <Logo />
                    </div>

                    <div className="flex flex-col items-center gap-4 lg:ms-4 lg:flex-row lg:gap-4 xl:ms-8 xl:gap-8">
                        <Dropdown title="Explore" svgTitle={dropdownArrowDown}>
                            <DropdownItem
                                isNavLink="true"
                                link="/explore"
                                key="People"
                            >
                                People
                            </DropdownItem>
                            <DropdownItem
                                isNavLink="true"
                                link="/threads"
                                key="Threads"
                            >
                                Threads
                            </DropdownItem>
                        </Dropdown>
                        <NavLink link="/games">Games</NavLink>
                        <NavLink link="/about">About</NavLink>
                    </div>
                </div>
                <div className="flex items-center gap-2 md:gap-4 xl:gap-8">
                    <div className="hidden md:block">
                        <SearchForm />
                    </div>
                    <NavBarAuthenticatedRightSide />
                </div>
            </div>
            <Transition
                show={isMenuOpen}
                enter="transition ease-out duration-300"
                enterFrom="opacity-0 -translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-300"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 -translate-y-1"
            >
                <NavBarMobileMenu />
            </Transition>
        </nav>
    );
}

export default NavBar;
