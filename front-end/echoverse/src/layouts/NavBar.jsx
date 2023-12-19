import Dropdown from "../components/Dropdown";
import DropdownItem from "../components/DropdownItem";
import Logo from "../components/Logo";
import SearchForm from "../components/SearchForm";

import NavBarAuthenticatedRightSide from "../features/NavBar/components/NavBarAuthenticatedRightSide";

import NavLink from "../features/NavBar/components/NavLink";
import dropdownArrowDown from "../assets/svg/dropdownArrowDown.svg";

function NavBar() {
    return (
        <nav className="mt-7.5 font-archivo-black sticky mx-10 text-sm tracking-wide">
            <div className="flex justify-between">
                <div className="flex items-center">
                    <Logo />
                    <div className="ms-8 flex gap-8">
                        <Dropdown title="Explore" svgTitle={dropdownArrowDown}>
                            <DropdownItem
                                isNavLink='true'
                                link="/explore"
                                key="People"
                            >People</DropdownItem>
                            <DropdownItem
                                isNavLink='true'
                                link="/threads"
                                key="Threads"
                            >Threads</DropdownItem>
                        </Dropdown>
                        <NavLink link="/games">Games</NavLink>
                        <NavLink link="/about">About</NavLink>
                    </div>
                </div>
                <div className="flex items-center gap-8">
                    <SearchForm />
                    <NavBarAuthenticatedRightSide />
                </div>
            </div>
        </nav>
    );
}

export default NavBar;
