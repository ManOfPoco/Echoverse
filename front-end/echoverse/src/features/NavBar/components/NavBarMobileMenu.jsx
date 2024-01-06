import { Transition } from "@headlessui/react";
import { Fragment } from "react";

import NavLink from "./NavLink";

import Dropdown from "../../../components/Dropdown";
import DropdownItem from "../../../components/DropdownItem";
import SearchForm from "../../../components/SearchForm";

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
                <Dropdown title="Explore" svgTitle={dropdownArrowDown}>
                    <DropdownItem isNavLink="true" link="/explore" key="People">
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
        </Transition>
    );
}

export default NavBarMobileMenu;
