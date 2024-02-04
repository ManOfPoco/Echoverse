import { useState } from "react";

import ChannelMember from "./ChannelMember";
import VirtualUserCard from "../../ChannelUserCard/components/VirtualUserCard";

const modifiers = [
    {
        name: "flip",
        options: {
            fallbackPlacements: ["left"],
        },
        enabled: true,
    },
    {
        name: "offset",
        options: {
            offset: [0, 12],
        },
    },
    {
        name: "preventOverflow",
        options: {
            altAxis: true,
        },
        enabled: true,
    },
];

function MembersList({ members }) {
    const [referenceElement, setReferenceElement] = useState(null);
    const [selectedUser, setSelectedUser] = useState(null);

    return (
        <>
            <div className="flex h-full max-w-72 flex-col items-end gap-1 overflow-y-auto overflow-x-hidden bg-black-raisin px-2 py-4 lg:max-w-60">
                {members.map((member) => (
                    <ChannelMember
                        member={member}
                        key={member.id}
                        referenceElement={referenceElement}
                        setReferenceElement={setReferenceElement}
                        setSelectedUser={setSelectedUser}
                    />
                ))}
            </div>

            {referenceElement && (
                <VirtualUserCard
                    referenceElement={referenceElement}
                    member={selectedUser}
                    setReferenceElement={setReferenceElement}
                    setSelectedUser={setSelectedUser}
                    placement="left-start"
                    modifiers={modifiers}
                />
            )}
        </>
    );
}

export default MembersList;
