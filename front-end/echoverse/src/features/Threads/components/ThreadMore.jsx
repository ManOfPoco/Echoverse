import { useState } from "react";
import { usePopper } from "react-popper";
import toast from "react-hot-toast";

import Dropdown from "../../../components/Dropdown";
import DropdownItem from "../../../components/DropdownItem";

import MoreSvg from "../../../svg/MoreSvg";
import ConfirmThreadDeleteModal from "./ConfirmThreadDeleteModal";

function ThreadMore({
    thread,
    isBlocked,
    setIsBlocked,
    setIsMuted,
    setIsHidden,
    pointerEventsClass = "pointer-events-auto",
}) {
    const { isOwner, username } = thread;
    const [isDeleteThreadModalOpen, setIsDeleteThreadModalOpen] =
        useState(false);

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

    function handleOpenDeleteThreadModal() {
        setIsDeleteThreadModalOpen(true);
    }

    return (
        <div>
            <ConfirmThreadDeleteModal
                thread={thread}
                isDeleteThreadModalOpen={isDeleteThreadModalOpen}
                setIsDeleteThreadModalOpen={setIsDeleteThreadModalOpen}
            />
            <div className={`${pointerEventsClass} z-50 cursor-pointer`}>
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
                    {isOwner && (
                        <DropdownItem
                            itemType="action"
                            onClick={handleOpenDeleteThreadModal}
                            className="text-red-fire-engine"
                        >
                            Delete
                        </DropdownItem>
                    )}
                    <DropdownItem
                        itemType="action"
                        onClick={handleThreadBlock}
                        className="text-red-fire-engine"
                    >
                        Block
                    </DropdownItem>
                </Dropdown>
            </div>
        </div>
    );
}

export default ThreadMore;
