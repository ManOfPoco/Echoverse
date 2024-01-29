import Dropdown from "../../../components/Dropdown";

import OnlineStatus from "./OnlineStatus";
import UserOnlineStatus from "./UserOnlineStatus";

const modifiers = [
    {
        name: "offset",
        options: {
            offset: [0, 4],
        },
    },
];

function UserCardStatusDropdown({
    onlineStatusImg,
    onlineStatus,
    setOnlineStatus,
}) {
    function handleSetOnlineStatus() {
        // request
        setOnlineStatus("online");
    }

    function handleSetIdleStatus() {
        // request
        setOnlineStatus("idle");
    }

    function handleSetDoNotDisturbStatus() {
        // request
        setOnlineStatus("doNotDisturb");
    }

    function handleSetInvisibleStatus() {
        // request
        setOnlineStatus("invisible");
    }

    return (
        <Dropdown
            title={
                <UserOnlineStatus
                    onlineStatusImg={onlineStatusImg}
                    onlineStatus={onlineStatus}
                />
            }
            modifiers={modifiers}
            placement="top-start"
            dropdownColor="bg-gray-dark"
            className="flex w-[264px] flex-col gap-1 rounded-md border border-gray-light/10 sm:w-[328px]"
        >
            <OnlineStatus status="online" onClick={handleSetOnlineStatus} />
            <OnlineStatus status="idle" onClick={handleSetIdleStatus} />
            <OnlineStatus
                status="doNotDisturb"
                onClick={handleSetDoNotDisturbStatus}
            />
            <OnlineStatus
                status="invisible"
                onClick={handleSetInvisibleStatus}
            />
        </Dropdown>
    );
}

export default UserCardStatusDropdown;
