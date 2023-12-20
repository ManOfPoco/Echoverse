import NavLink from "./NavLink";

import Dropdown from "../../../components/Dropdown";
import DropdownItem from "../../../components/DropdownItem";
import SearchForm from "../../../components/SearchForm";

import dropdownArrowDown from "../../../assets/svg/dropdownArrowDown.svg";

export function NavBarMobileMenu() {
    return (
        <div className="mx-2 flex flex-col items-center gap-4 py-2 lg:hidden">
            <div className="md:hidden">
                <SearchForm />
            </div>
            <Dropdown title="Explore" svgTitle={dropdownArrowDown}>
                <DropdownItem isNavLink="true" link="/explore" key="People">
                    People
                </DropdownItem>
                <DropdownItem isNavLink="true" link="/threads" key="Threads">
                    Threads
                </DropdownItem>
            </Dropdown>
            <NavLink link="/games">Games</NavLink>
            <NavLink link="/about">About</NavLink>
        </div>
    );
}
