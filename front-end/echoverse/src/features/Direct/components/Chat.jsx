import Avatar from "../../../components/Avatar";

import person from "../../../assets/img/person.jpg";
import onlineStatus from "../../../assets/svg/onlineStatus.svg";
import idleStatus from "../../../assets/svg/idleStatus.svg";
import doNotDisturbStatus from "../../../assets/svg/doNotDisturbStatus.svg";
import invisibleStatus from "../../../assets/svg/invisibleStatus.svg";
import { useNavigate, useParams } from "react-router-dom";

const statusImgMapping = {
    online: onlineStatus,
    idle: idleStatus,
    doNotDisturb: doNotDisturbStatus,
    invisible: invisibleStatus,
};

function Chat({ chat }) {
    const navigate = useNavigate();
    const { chatId } = useParams();

    const { id, username, lastMessage, status } = chat;

    const onlineStatusImg = statusImgMapping[status] || "offline";

    return (
        <div
            className={`flex cursor-pointer gap-2.5 px-2.5 py-2 hover:bg-gray-light/15 ${
                chatId == id && "bg-gray-light/15"
            }`}
            onClick={() => navigate(`/direct/${id}`)}
        >
            <div className="relative min-w-fit">
                <Avatar img={person} type="md" />
                {status !== "invisible" && status !== "offline" && (
                    <div className="absolute bottom-0 right-0 rounded-full bg-gray-dark p-0.5">
                        <img src={onlineStatusImg} className="h-3.5 w-3.5" />
                    </div>
                )}
            </div>
            <div className="flex flex-col justify-center truncate">
                <h5 className="truncate text-base font-medium">{username}</h5>
                <span className="truncate text-xs text-gray-light">
                    {lastMessage}
                </span>
            </div>
        </div>
    );
}

export default Chat;
