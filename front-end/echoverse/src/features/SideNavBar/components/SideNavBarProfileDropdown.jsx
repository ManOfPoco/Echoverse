import Dropdown from "../../../components/Dropdown";
import DropdownItem from "../../../components/DropdownItem";

import person from "../../../assets/img/person.jpg";

function SideNavBarProfileDropdown() {
    const username = "ManOfPoco";

    return (
        <Dropdown
            imageTitle={person}
            imageSize="w-10 h-10"
            dropdownWidth="w-48"
            placement="right-start"
        >
            <DropdownItem link={`/${username}`} key="Profile">
                Profile
            </DropdownItem>
            <DropdownItem link="/account/edit" key="Account settings">
                Account settings
            </DropdownItem>
            <DropdownItem link="/sign-out" key="Sign out">
                Sign out
            </DropdownItem>
        </Dropdown>
    );
}

export default SideNavBarProfileDropdown;
