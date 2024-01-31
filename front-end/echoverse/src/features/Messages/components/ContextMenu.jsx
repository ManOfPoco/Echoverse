import { useEffect, useState } from "react";
import { usePopper } from "react-popper";

import ContextMenuElement from "./ContextMenuElement";

import ChevronRight from "../../../svg/ChevronRight";
import TrashCan from "../../../svg/TrashCan";
import editSVG from "../../../assets/svg/editSVG.svg";
import reply from "../../../assets/svg/reply.svg";
import copy from "../../../assets/svg/copy.svg";
import pin from "../../../assets/svg/pin.svg";
import toast from "react-hot-toast";
import ConfirmDeleteMessageModal from "./ConfirmDeleteMessageModal";

function generateGetBoundingClientRect(top, left) {
    return {
        getBoundingClientRect() {
            return {
                top: top,
                left: left,
                bottom: 0,
                right: 0,
                width: 192,
                height: 0,
            };
        },
    };
}

function ContextMenu({
    clickedMessage,
    clickedCoordinates,
    handleCloseContextMenu,
    dispatch,
}) {
    const currentUserId = 1;
    const isCurrentUserMessage = clickedMessage.senderId === currentUserId;

    const [virtualReference, setVirtualReference] = useState(null);

    const [popperElement, setPopperElement] = useState(null);
    const { styles, attributes } = usePopper(virtualReference, popperElement);

    const [isDeleteMessageModalOpen, setIsDeleteMessageModalOpen] =
        useState(false);

    function handleReplyMessage() {
        handleCloseContextMenu();
        dispatch({
            type: "setReplyInputMessageType",
            payload: {
                id: clickedMessage.id,
                username: clickedMessage.username,
            },
        });
    }

    function handleEditMessage() {
        handleCloseContextMenu();
        dispatch({
            type: "setEditInputMessageType",
            payload: {
                id: clickedMessage.id,
                message: clickedMessage.message,
            },
        });
    }

    function handleCopyMessageText() {
        handleCloseContextMenu();
        navigator.clipboard.writeText(clickedMessage.message);
        toast.success(`Message copied to your clipboard`, {
            style: {
                color: "white",
                backgroundColor: "#262A2F",
            },
        });
    }

    function handlePinMessage() {
        toast.success(`Selected message was pinned`, {
            style: {
                color: "white",
                backgroundColor: "#262A2F",
            },
        });
    }

    function handleDeleteMessage() {
        setIsDeleteMessageModalOpen(true);
    }

    useEffect(() => {
        setVirtualReference(
            generateGetBoundingClientRect(
                clickedCoordinates.top,
                clickedCoordinates.left
            )
        );
    }, [clickedCoordinates]);

    useEffect(() => {
        function closeDropdown(e) {
            const isModalOpen =
                document.getElementById("headlessui-portal-root") !== null;

            if (
                virtualReference &&
                clickedMessage &&
                !popperElement.contains(e.target) &&
                !isModalOpen
            ) {
                handleCloseContextMenu();
            }
        }
        document.addEventListener("mousedown", closeDropdown);

        return () => {
            document.removeEventListener("mousedown", closeDropdown);
        };
    }, [
        popperElement,
        clickedMessage,
        handleCloseContextMenu,
        virtualReference,
    ]);

    return (
        <>
            {
                <ConfirmDeleteMessageModal
                    isDeleteMessageModalOpen={isDeleteMessageModalOpen}
                    setIsDeleteMessageModalOpen={setIsDeleteMessageModalOpen}
                    selectedMessage={clickedMessage}
                />
            }
            <div
                className={`absolute z-40 w-48 rounded-md bg-black-night p-2 ${
                    virtualReference === null ? "hidden" : ""
                }`}
                ref={setPopperElement}
                style={styles.popper}
                {...attributes.popper}
            >
                <ContextMenuElement
                    imgComponent={
                        <ChevronRight width={16} height={16} stroke="white" />
                    }
                >
                    Add Reaction
                </ContextMenuElement>
                <ContextMenuElement img={reply} onClick={handleReplyMessage}>
                    Reply
                </ContextMenuElement>
                {isCurrentUserMessage && (
                    <ContextMenuElement
                        img={editSVG}
                        onClick={handleEditMessage}
                    >
                        Edit Message
                    </ContextMenuElement>
                )}
                <ContextMenuElement img={copy} onClick={handleCopyMessageText}>
                    Copy Text
                </ContextMenuElement>
                <ContextMenuElement img={pin} onClick={handlePinMessage}>
                    Pin
                </ContextMenuElement>
                {isCurrentUserMessage && (
                    <ContextMenuElement
                        imgComponent={
                            <TrashCan
                                width={16}
                                height={16}
                                className="fill-red-fire-engine group-hover:fill-platinum"
                            />
                        }
                        classname="text-red-fire-engine"
                        hover="hover:bg-red-fire-engine hover:text-platinum"
                        onClick={handleDeleteMessage}
                    >
                        Delete Message
                    </ContextMenuElement>
                )}
            </div>
        </>
    );
}

export default ContextMenu;
