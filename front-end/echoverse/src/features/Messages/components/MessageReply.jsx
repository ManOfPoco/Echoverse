import Avatar from "../../../components/Avatar";

import person from "../../../assets/img/person.jpg";
import person1 from "../../../assets/img/person1.jpg";
import person2 from "../../../assets/img/person2.jpg";
import person3 from "../../../assets/img/person3.jpg";
import person4 from "../../../assets/img/person4.jpg";
import arrowSpine from "../../../assets/svg/arrowSpine.svg";
import img from "../../../assets/svg/img.svg";

import { formMessageDate } from "../../GameThreadChannel/utils/dateFormatters";
import MessageAttachments from "./MessageAttachments";
import DropdownUserCard from "../../ChannelUserCard/components/DropdownUserCard";
import MessageReactions from "./MessageReactions";

const imgMapping = {
    person: person,
    person1: person1,
    person2: person2,
    person3: person3,
    person4: person4,
};

const modifiers = [
    {
        name: "flip",
        options: {
            fallbackPlacements: ["top", "bottom"],
        },
        enabled: true,
    },
    {
        name: "preventOverflow",
        options: {
            altAxis: true,
        },
        enabled: true,
    },
    {
        name: "offset",
        options: {
            offset: [0, 8],
        },
    },
];

function MessageReply({ messageObj, is12HoursFormat }) {
    const currentUserId = 1;
    const {
        id,
        replyId,
        replyMessage,
        replyMessageFiles,
        replyUserId,
        replyUserUsername,
        senderId,
        avatar,
        username,
        time,
        message,
        messageFiles,
        isEdited,
        reactions,
    } = messageObj;

    function scrollToMessage() {
        const message = document.getElementById(`message-${replyId}`);
        if (message) {
            message.scrollIntoView({
                behavior: "smooth",
                block: "center",
            });

            message.classList.remove("animate-blinker");
            void message.offsetWidth;
            message.classList.add("animate-blinker");
        }
    }

    return (
        <div className="hover:bg-gray-dark/50">
            <div
                className={`relative${
                    replyUserId === currentUserId
                        ? " bg-amber-300/15 before:absolute before:h-full before:w-0.5 before:bg-amber-300"
                        : ""
                }`}
            >
                <div
                    className="relative mt-4 flex gap-2 pe-3 ps-[24px] pt-1 text-sm text-gray-light sm:pe-4 sm:ps-[32px] md:pe-8"
                    id={`reply-message-${replyId}`}
                >
                    <img
                        draggable={false}
                        src={arrowSpine}
                        className="h-3.5 self-end"
                    />
                    <div className="flex">
                        <DropdownUserCard
                            referenceElement={
                                <div className="cursor-pointer">
                                    <Avatar
                                        img={imgMapping[avatar] || person}
                                        type="xs"
                                    />
                                </div>
                            }
                            placement="right-start"
                            modifiers={modifiers}
                            showAdditionalOptions={false}
                        />
                        <DropdownUserCard
                            referenceElement={
                                <h5 className="flex-1 cursor-pointer ps-1.5 font-semibold hover:underline">
                                    {replyUserUsername}
                                </h5>
                            }
                            placement="right-start"
                            modifiers={modifiers}
                            showAdditionalOptions={false}
                        />
                    </div>
                    <div className="flex flex-1 cursor-pointer gap-1.5 truncate hover:text-platinum">
                        <p
                            className={`${
                                replyMessage ? "truncate" : "italic"
                            }`}
                            onClick={scrollToMessage}
                        >
                            {replyMessage
                                ? replyMessage
                                : "Click to see attachment"}
                        </p>
                        {replyMessageFiles && (
                            <img
                                draggable={false}
                                src={img}
                                className="h-5 w-5"
                            />
                        )}
                    </div>
                </div>

                <div
                    className="flex py-1 pe-3 ps-2 sm:pe-4 sm:ps-4 md:pe-8"
                    id={`message-${id}`}
                >
                    <DropdownUserCard
                        referenceElement={
                            <div className="min-h-10 min-w-10 cursor-pointer">
                                <Avatar
                                    img={imgMapping[avatar] || person}
                                    type="sm"
                                />
                            </div>
                        }
                        placement="right-start"
                        modifiers={modifiers}
                        showAdditionalOptions={false}
                    />
                    <div className="ps-3">
                        <div className="flex items-baseline gap-1.5 font-medium">
                            <DropdownUserCard
                                referenceElement={
                                    <h5 className="inline-block cursor-pointer align-top hover:underline">
                                        {username}
                                    </h5>
                                }
                                placement="right-start"
                                modifiers={modifiers}
                                showAdditionalOptions={false}
                            />
                            <h5 className="text-xss text-gray-clear md:text-xs">
                                {formMessageDate(time, is12HoursFormat)}
                            </h5>
                            <span className="text-xss text-gray-clear">
                                {isEdited && "(edited)"}
                            </span>
                        </div>

                        <p className="whitespace-pre-wrap break-words leading-snug text-platinum">
                            {message}
                        </p>
                        {messageFiles && (
                            <MessageAttachments
                                messageFiles={messageFiles}
                                isRecentMessage={true}
                                senderId={senderId}
                            />
                        )}

                        {reactions && reactions.length > 0 && (
                            <MessageReactions
                                reactions={reactions}
                                padding={`${messageFiles ? "pt-1" : "pt-0.5"}`}
                            />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MessageReply;
