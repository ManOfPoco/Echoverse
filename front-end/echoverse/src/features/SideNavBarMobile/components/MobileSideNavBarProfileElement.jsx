import { useState } from "react";

import Avatar from "../../../components/Avatar";

import MobileSideNavBarProfileMoreSvg from "./MobileSideNavBarProfileMoreSvg";
import MobileSideNavBarProfileDropdown from "./MobileSideNavBarProfileDropdown";

import person from "../../../assets/img/person.jpg";

function MobileSideNavBarProfileElement() {
    const username = "ManOfPoco";
    const displayName = "ManOfPoco";

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [referenceElement, setReferenceElement] = useState(null);

    return (
        <>
            <MobileSideNavBarProfileDropdown
                referenceElement={referenceElement}
                isDropdownOpen={isDropdownOpen}
                setIsDropdownOpen={setIsDropdownOpen}
            />
            <div
                className="flex w-full min-w-52 cursor-pointer items-center justify-between rounded-full bg-gray-clear/20 px-4 py-3 hover:bg-gray-clear/30 sm:min-w-64"
                ref={setReferenceElement}
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
                <div className="flex gap-2">
                    <Avatar img={person} type="sm" />
                    <div className="flex flex-col justify-between">
                        <h5 className="h-4 text-base">{username}</h5>
                        <span className="h-3.5 text-xs text-gray-clear">
                            @{displayName}
                        </span>
                    </div>
                </div>
                <MobileSideNavBarProfileMoreSvg />
            </div>
        </>
    );
}

export default MobileSideNavBarProfileElement;
