import { useState } from "react";
import { useNavigate } from "react-router-dom";

import SearchForm from "../../../components/SearchForm";

import ChannelBreadCrumbNavDropdownItem from "./ChannelBreadCrumbNavDropdownItem";
import ChannelBreadCrumbNavItem from "./ChannelBreadCrumbNavItem";

import threads from "../../../assets/svg/threads.svg";
import pin from "../../../assets/svg/pin.svg";
import bellFilled from "../../../assets/svg/bellFilled.svg";
import settingsFilled from "../../../assets/svg/settingsFilled.svg";

function ChannelInnerNavBar() {
    const navigate = useNavigate();
    const [dropdownOpenItem, setDropdownOpenItem] = useState("");

    return (
        <div className="flex min-w-fit items-center justify-end gap-3 px-2">
            <ChannelBreadCrumbNavDropdownItem
                img={threads}
                alt="threads"
                title="Start a thread"
                dropdownOpenItem={dropdownOpenItem}
                setDropdownOpenItem={setDropdownOpenItem}
            />
            <ChannelBreadCrumbNavDropdownItem
                img={pin}
                alt="pins"
                title="Pins list"
                dropdownOpenItem={dropdownOpenItem}
                setDropdownOpenItem={setDropdownOpenItem}
            />
            <ChannelBreadCrumbNavDropdownItem
                img={bellFilled}
                alt="notifications"
                title="Notifications"
                dropdownOpenItem={dropdownOpenItem}
                setDropdownOpenItem={setDropdownOpenItem}
            />
            <ChannelBreadCrumbNavItem
                img={settingsFilled}
                alt="settings"
                title="Server settings"
                onClick={() => navigate(``)}
            />
            <SearchForm />
        </div>
    );
}

export default ChannelInnerNavBar;
