import { Link } from "react-router-dom";
import Dropdown from "../components/Dropdown";
import DropdownItem from "../components/DropdownItem";
import Logo from "../components/Logo";
import SearchForm from "../components/SearchForm";

import NavBarAuthenticatedRightSide from "../features/NavBar/components/NavBarAuthenticatedRightSide";

import dropdownArrowDown from "../assets/svg/dropdownArrowDown.svg";

function NavBar() {
    return (
        <nav className="mt-7.5 font-archivo-black sticky mx-10 text-sm">
            <div className="flex justify-between">
                <div className="flex items-center">
                    <Logo />
                    <div className="ms-8 flex gap-8">
                        <Dropdown title="Explore" svgTitle={dropdownArrowDown}>
                            <DropdownItem
                                option="People"
                                link="/explore"
                                key="People"
                            />
                            <DropdownItem
                                option="Threads"
                                link="/threads"
                                key="Threads"
                            />
                        </Dropdown>
                        <Link to="/games">Games</Link>
                        <Link to="/about">About</Link>
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
