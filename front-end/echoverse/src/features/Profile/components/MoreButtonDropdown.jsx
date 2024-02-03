import { useState } from "react";
import toast from "react-hot-toast";

import Dropdown from "../../../components/Dropdown";
import DropdownItem from "../../../components/DropdownItem";
import MoreSvg from "../../../svg/MoreSvg";

function MoreButtonDropdown(data) {
    const { username } = data;

    const [isMuted, setIsMuted] = useState(false);
    const [isBlocked, setIsBlocked] = useState(false);

    function handleUserMute() {
        if (isMuted) {
            setIsMuted(false);
            toast.success(
                `Now you will receive notifications from ${username}`,
                {
                    style: {
                        color: "white",
                        backgroundColor: "#262A2F",
                    },
                }
            );
        } else {
            setIsMuted(true);
            toast.success(
                `You will no longer receive any notifications from ${username}`,
                {
                    style: {
                        color: "white",
                        backgroundColor: "#262A2F",
                    },
                }
            );
        }
    }

    function handleUserBlock() {
        if (isBlocked) {
            setIsBlocked(false);
            toast.success(
                `${username} will be able to find your profile, threads and contact you`,
                {
                    style: {
                        color: "white",
                        backgroundColor: "#262A2F",
                    },
                }
            );
        } else {
            setIsBlocked(true);
            toast.success(
                `${username} will not be able to find your profile, threads and contact you`,
                {
                    style: {
                        color: "white",
                        backgroundColor: "#262A2F",
                    },
                }
            );
        }
    }

    return (
        <Dropdown
            title={<MoreSvg width={34} height={34} />}
            titleZIndex="z-40"
            placement="bottom-end"
            className="w-44 divide-y divide-gray-light/40 rounded-lg text-base outline outline-1 outline-gray-light/20"
        >
            <DropdownItem
                className="cursor-pointer"
                itemType="action"
                onClick={handleUserMute}
            >
                {isMuted ? "Unmute" : "Mute"}
            </DropdownItem>
            <DropdownItem
                itemType="action"
                className="cursor-pointer text-red-fire-engine"
                onClick={handleUserBlock}
            >
                {isBlocked ? "UnBlock" : "Block"}
            </DropdownItem>
        </Dropdown>
    );
}

export default MoreButtonDropdown;
