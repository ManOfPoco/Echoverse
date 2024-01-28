import onlineStatus from "../../../assets/svg/onlineStatus.svg";
import idleStatus from "../../../assets/svg/idleStatus.svg";
import doNotDisturbStatus from "../../../assets/svg/doNotDisturbStatus.svg";
import invisibleStatus from "../../../assets/svg/invisibleStatus.svg";

const statusTextMapping = {
    online: { name: "Online" },
    idle: { name: "Idle" },
    doNotDisturb: {
        name: "Do Not Disturb",
        addionalNotes: "You will not receive any notifications",
    },
    invisible: {
        name: "Invisible",
        addionalNotes:
            "You won't appear online, but will have full access to the app",
    },
};

const statusImgMapping = {
    online: onlineStatus,
    idle: idleStatus,
    doNotDisturb: doNotDisturbStatus,
    invisible: invisibleStatus,
};

function OnlineStatus({ status, onClick }) {
    const onlineStatus = statusImgMapping[status] || "offline";
    const onlineStatusText = statusTextMapping[status] || "";

    return (
        <div
            className="cursor-pointer px-2 py-1.5 hover:bg-gray-light/20"
            onClick={onClick}
        >
            <div className="flex items-center gap-2 text-platinum">
                <img src={onlineStatus} className="h-3.5 w-3.5 rounded-full" />

                <span>{onlineStatusText.name}</span>
            </div>
            {onlineStatusText?.addionalNotes && (
                <p className="ps-[22px] text-xs">
                    {onlineStatusText?.addionalNotes}
                </p>
            )}
        </div>
    );
}

export default OnlineStatus;
