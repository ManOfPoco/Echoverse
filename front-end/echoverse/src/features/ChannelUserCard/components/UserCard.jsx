import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { usePopper } from "react-popper";

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

const statusImgMapping = {
    online: onlineStatus,
    idle: idleStatus,
    doNotDisturb: doNotDisturbStatus,
    invisible: invisibleStatus,
};

function UserCard({ showAdditionalOptions = true, user }) {
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
    } = user;
    const isCurrentUser = false;

    const [onlineStatus, setOnlineStatus] = useState(status);
    const onlineStatusImg = statusImgMapping[onlineStatus] || "offline";

    const [isHovered, setIsHovered] = useState(false);
    const [referenceElement, setReferenceElement] = useState(null);
    const [popperElement, setPopperElement] = useState(null);
    const { styles, attributes } = usePopper(referenceElement, popperElement, {
        placement: "top",
        modifiers: {
            name: "offset",
            options: {
                offset: [0, 6],
            },
        },
    });

    return (
        <>
            <SetCustomStatusModal
                isSetCustomStatusModalOpen={isSetCustomStatusModalOpen}
                setIsSetCustomStatusModalOpen={setIsSetCustomStatusModalOpen}
                customStatus={customStatus}
            />

            <div className="shadow-lg">
                <div className="rounded-lg text-base text-platinum">
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
                            <div
                                className="group relative cursor-pointer rounded-full"
                                onClick={() => navigate(`/${username}`)}
                            >
                                <Avatar img={person} type="lg" />
                                <div className="absolute top-0 hidden h-full w-full items-center justify-center rounded-full bg-black-dark/60 text-xss font-semibold group-hover:flex">
                                    VIEW PROFILE
                                </div>
                            </div>
                            {onlineStatusImg !== "offline" ? (
                                <>
                                    <div className="relative -left-6 self-end rounded-full bg-gray-dark p-0.5">
                                        <img
                                            src={onlineStatusImg}
                                            className="h-4 w-4"
                                            onMouseEnter={() =>
                                                setIsHovered(true)
                                            }
                                            onMouseLeave={() =>
                                                setIsHovered(false)
                                            }
                                            ref={setReferenceElement}
                                        />
                                        {isHovered && (
                                            <div
                                                className="z-50 rounded-lg bg-black-night px-2 py-2 text-sm font-normal capitalize before:absolute before:left-[calc(50%-6px)] before:top-full before:border-l-6 before:border-r-6 before:border-t-6 before:border-l-transparent before:border-r-transparent before:border-t-black-night before:content-['']"
                                                ref={setPopperElement}
                                                style={styles.popper}
                                                {...attributes.popper}
                                            >
                                                {status}
                                            </div>
                                        )}
                                    </div>
                                </>
                            ) : null}
                        </div>
                    </div>

                    <div className="bg-gray-dark px-4 pb-4 pt-14 font-medium">
                        <div className="flex flex-col divide-y divide-gray-light/30 rounded-lg bg-black-night px-3 py-2">
                            <div className="py-2">
                                <h4 className="h-6 text-xl">{displayName}</h4>
                                <span className="text-sm">{username}</span>
                                {customStatus && (
                                    <p className="pt-2 text-sm font-normal">
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
                                        <p className="whitespace-pre-wrap break-words text-sm font-normal leading-snug">
                                            {description}
                                        </p>
                                    </div>
                                )}
                                <div className="py-2">
                                    <h4 className="pb-1 text-xs font-semibold text-gray-light">
                                        Echoverse member since
                                    </h4>
                                    <p className="whitespace-pre-wrap break-words text-sm font-normal leading-snug">
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
