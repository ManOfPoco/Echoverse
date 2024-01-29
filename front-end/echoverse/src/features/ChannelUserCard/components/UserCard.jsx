import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Avatar from "../../../components/Avatar";

import UserCardEditCustomStatus from "./UserCardEditCustomStatus";
import UserCardStatusDropdown from "./UserCardStatusDropdown";
import SetCustomStatusModal from "./SetCustomStatusModal";

import person from "../../../assets/img/person.jpg";
import editSVG from "../../../assets/svg/editSVG.svg";

import onlineStatus from "../../../assets/svg/onlineStatus.svg";
import idleStatus from "../../../assets/svg/idleStatus.svg";
import doNotDisturbStatus from "../../../assets/svg/doNotDisturbStatus.svg";
import invisibleStatus from "../../../assets/svg/invisibleStatus.svg";

import { formatUserCardDate } from "../utils/formatUserCardDate";

const data = {
    username: "ManOfPoco",
    displayName: "ManOfPoco",
    gamesQuantity: 522,
    firstName: "John Peterson",
    description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    joinDate: "2023-11-20T18:46:48+00:00",
    customStatus: "I've completely burned out",
    status: "online",
};

const statusImgMapping = {
    online: onlineStatus,
    idle: idleStatus,
    doNotDisturb: doNotDisturbStatus,
    invisible: invisibleStatus,
};

function UserCard({ showAdditionalOptions = true }) {
    const navigate = useNavigate();
    const [isSetCustomStatusModalOpen, setIsSetCustomStatusModalOpen] =
        useState(false);

    const {
        username,
        displayName,
        description,
        joinDate,
        customStatus,
        status,
    } = data;
    const isCurrentUser = false;

    const [onlineStatus, setOnlineStatus] = useState(status);
    const onlineStatusImg = statusImgMapping[onlineStatus] || "offline";

    return (
        <>
            <SetCustomStatusModal
                isSetCustomStatusModalOpen={isSetCustomStatusModalOpen}
                setIsSetCustomStatusModalOpen={setIsSetCustomStatusModalOpen}
                customStatus={customStatus}
            />

            <div className="shadow-lg">
                <div className="rounded-lg text-base">
                    <div className="flex h-20 flex-col bg-black-dark">
                        {isCurrentUser && (
                            <img
                                src={editSVG}
                                className="absolute m-3 h-5 w-5 cursor-pointer self-end"
                                onClick={() =>
                                    navigate("/account/server_profile")
                                }
                            />
                        )}

                        <div className="relative left-5 top-10 flex">
                            <Avatar img={person} type="lg" />
                            {onlineStatusImg !== "offline" ? (
                                <div className="relative -left-6 self-end rounded-full bg-gray-dark p-0.5">
                                    <img
                                        src={onlineStatusImg}
                                        className="h-4 w-4"
                                    />
                                </div>
                            ) : null}
                        </div>
                    </div>

                    <div className="bg-gray-dark px-4 pb-4 pt-14 font-medium">
                        <div className="flex flex-col divide-y divide-gray-light/30 rounded-lg bg-black-night px-3 py-2">
                            <div className="py-2">
                                <h4 className="h-6 text-xl">{displayName}</h4>
                                <span className="text-sm">{username}</span>
                                {customStatus && (
                                    <p className="pt-2 text-sm font-normal text-platinum">
                                        {customStatus}
                                    </p>
                                )}
                            </div>
                            <div>
                                {description && (
                                    <div className="py-2">
                                        <h4 className="pb-1 text-xs font-semibold text-gray-light">
                                            About me
                                        </h4>
                                        <p className="whitespace-pre-wrap break-words text-sm font-normal leading-snug text-platinum">
                                            {description}
                                        </p>
                                    </div>
                                )}
                                <div className="py-2">
                                    <h4 className="pb-1 text-xs font-semibold text-gray-light">
                                        Echoverse member since
                                    </h4>
                                    <p className="whitespace-pre-wrap break-words text-sm font-normal leading-snug text-platinum">
                                        {formatUserCardDate(joinDate)}
                                    </p>
                                </div>
                            </div>
                            {showAdditionalOptions && (
                                <div className="py-2 text-sm text-gray-light">
                                    <UserCardStatusDropdown
                                        onlineStatusImg={onlineStatusImg}
                                        onlineStatus={onlineStatus}
                                        setOnlineStatus={setOnlineStatus}
                                    />

                                    <UserCardEditCustomStatus
                                        isCustomStatus={customStatus !== ""}
                                        setIsSetCustomStatusModalOpen={
                                            setIsSetCustomStatusModalOpen
                                        }
                                    />
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default UserCard;
