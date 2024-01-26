import { useState } from "react";
import { usePopper } from "react-popper";
import toast from "react-hot-toast";

import Dropdown from "../../../components/Dropdown";
import DropdownItem from "../../../components/DropdownItem";

import MoreSvg from "./MoreSvg";

function ThreadMore({
    username,
    isBlocked,
    setIsBlocked,
    setIsMuted,
    setIsHidden,
}) {

    function handleThreadMute() {
        setIsMuted(true);
    }

    function handleThreadHide() {
        setIsHidden(true);
    }

    function handleThreadBlock() {
        setIsBlocked(true);
        toast.success(`Threads from ${username} have been blocked`, {
            style: {
                color: "white",
                backgroundColor: "#262A2F",
            },
        });
    }

    return (
        <div className="pointer-events-auto z-50 cursor-pointer">
            <Dropdown
                title={<MoreSvg />}
                placement="bottom-end"
                className="w-40 divide-y divide-gray-light/40 rounded-lg"
            >
                <DropdownItem itemType="action" onClick={handleThreadMute}>
                    Mute
                </DropdownItem>
                <DropdownItem itemType="action" onClick={handleThreadHide}>
                    Hide
                </DropdownItem>
                <DropdownItem
                    itemType="action"
                    onClick={handleThreadBlock}
                    className="text-red-fire-engine"
                >
                    Block
                </DropdownItem>
            </Dropdown>
        </div>
    );
}

export default ThreadMore;
