import Dropdown from "../../../components/Dropdown";
import UserCard from "../../ChannelUserCard/components/UserCard";

import MobileSideNavBarProfileMoreSvg from "./MobileSideNavBarProfileMoreSvg";

function MobileSideNavBarProfileElement() {
    const username = "ManOfPoco";
    const displayName = "ManOfPoco";

    return (
        <Dropdown
            title={
                <MobileSideNavBarProfileMoreSvg
                    username={username}
                    displayName={displayName}
                />
            }
            className="w-[320px] overflow-y-auto overflow-x-hidden rounded-lg sm:w-96"
            placement="top-start"
        >
            <UserCard />
        </Dropdown>
    );
}

export default MobileSideNavBarProfileElement;
