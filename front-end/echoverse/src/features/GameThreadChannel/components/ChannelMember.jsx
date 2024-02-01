import Avatar from "../../../components/Avatar";

import onlineStatus from "../../../assets/svg/onlineStatus.svg";
import idleStatus from "../../../assets/svg/idleStatus.svg";
import doNotDisturbStatus from "../../../assets/svg/doNotDisturbStatus.svg";
import invisibleStatus from "../../../assets/svg/invisibleStatus.svg";
import person from "../../../assets/img/person.jpg";
import { useId, useRef, useState } from "react";

const statusImgMapping = {
    online: onlineStatus,
    idle: idleStatus,
    doNotDisturb: doNotDisturbStatus,
    invisible: invisibleStatus,
};

function ChannelMember({
    member,
    referenceElement,
    setReferenceElement,
    setSelectedUser,
}) {
    const { displayName, customStatus, status } = member;

    const id = useId();
    const memberRef = useRef(null);

    const onlineStatusImg = statusImgMapping[status] || "offline";
    const isActive = referenceElement?.id === id;

    function handleSetReferenceElement() {
        if (!referenceElement || referenceElement?.id !== id) {
            const elementCoords = memberRef.current.getBoundingClientRect();
            setReferenceElement({
                id: id,
                target: memberRef.current,
                left: elementCoords.left,
                top: elementCoords.top,
            });
            setSelectedUser(member);
        } else if (referenceElement?.id === id) {
            setReferenceElement(null);
            setSelectedUser(null);
        }
    }

    return (
        <div
            className={`flex w-full cursor-pointer gap-2.5 rounded-md px-2 py-1.5 hover:bg-gray-light/15 ${
                isActive && "bg-gray-light/15"
            }`}
            onClick={handleSetReferenceElement}
            ref={memberRef}
        >
            <div className="relative flex h-8 w-8 min-w-fit">
                <Avatar img={person} type="xsm" />
                {status !== "invisible" && status !== "offline" && (
                    <div className="absolute bottom-0 right-0 rounded-full bg-gray-dark p-0.5">
                        <img
                            src={onlineStatusImg}
                            className="h-2.5 w-2.5"
                            // onMouseEnter={() => setIsHovered(true)}
                            // onMouseLeave={() => setIsHovered(false)}
                        />
                    </div>
                )}
            </div>
            <div className="flex flex-col justify-center truncate">
                <h5 className="truncate text-base font-medium leading-5">
                    {displayName}
                </h5>
                <span className="truncate text-xs text-gray-light">
                    {customStatus}
                </span>
            </div>
        </div>
    );
}

export default ChannelMember;
