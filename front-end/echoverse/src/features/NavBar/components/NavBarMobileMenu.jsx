import { Transition } from "@headlessui/react";
import { Fragment } from "react";

import NavLink from "./NavLink";

import Dropdown from "../../../components/Dropdown";
import DropdownTitle from "../../../components/DropdownTitle";
import DropdownItem from "../../../components/DropdownItem";
import SearchForm from "../../../components/SearchForm";

import people from "../../../assets/svg/people.svg";
import threads from "../../../assets/svg/threads.svg";
import dropdownArrowDown from "../../../assets/svg/dropdownArrowDown.svg";

function NavBarMobileMenu({ isMenuOpen }) {
    return (
        <Transition
            as={Fragment}
            show={isMenuOpen}
            enter="transition ease-out duration-300"
            enterFrom="opacity-0 -translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-300"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 -translate-y-1"
        >
            <div className="absolute flex w-full flex-col items-center gap-4 bg-black-light py-2 lg:hidden">
                <div className="md:hidden">
                    <SearchForm />
                </div>
                <Dropdown
                    title={
                        <DropdownTitle
                            title="Explore"
                            svgTitle={dropdownArrowDown}
                        />
                    }
                    className={`w-44 gap-1 py-1 rounded-xl`}
                    placement="bottom-start"
                >
                    <DropdownItem link="/explore/people" key="People">
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
                    <DropdownItem link="/explore/threads" key="Threads">
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
                <NavLink link="/about" enableGrayHover={false}>
                    About
                </NavLink>
            </div>
        </Transition>
    );
}

export default NavBarMobileMenu;
