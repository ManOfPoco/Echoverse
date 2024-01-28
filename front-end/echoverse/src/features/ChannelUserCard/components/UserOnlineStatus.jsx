import ChevronRight from "../../../svg/ChevronRight";

const statusTextMapping = {
    online: "Online",
    idle: "Idle",
    doNotDisturb: "Do Not Disturb",
    invisible: "Invisible",
};

function UserOnlineStatus({ onlineStatusImg, onlineStatus }) {
    const onlineStatusText = statusTextMapping[onlineStatus] || "";

    return (
        <div className="flex cursor-pointer items-center justify-between rounded-sm px-2 py-1.5 hover:bg-gray-dark/80">
            <div className="flex items-center gap-2">
                <img
                    src={onlineStatusImg}
                    className="h-3.5 w-3.5 rounded-full"
                />

                <span>{onlineStatusText}</span>
            </div>
            <ChevronRight width={14} height={14} stroke="white" />
        </div>
    );
}

export default UserOnlineStatus;
