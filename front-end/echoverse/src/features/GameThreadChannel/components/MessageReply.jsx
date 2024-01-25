import Avatar from "../../../components/Avatar";

import person from "../../../assets/img/person.jpg";
import person1 from "../../../assets/img/person1.jpg";
import person2 from "../../../assets/img/person2.jpg";
import person3 from "../../../assets/img/person3.jpg";
import person4 from "../../../assets/img/person4.jpg";
import arrowSpine from "../../../assets/svg/arrowSpine.svg";
import img from "../../../assets/svg/img.svg";

import { formatDate } from "../utils/dateFormatters";
import MessageAttachments from "./MessageAttachments";

const imgMapping = {
    person: person,
    person1: person1,
    person2: person2,
    person3: person3,
    person4: person4,
};

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
                    className="relative mt-4 flex gap-2 pe-3 ps-[24px] sm:ps-[32px] pt-1 text-sm text-gray-light sm:pe-4 md:pe-8"
                    id={`reply-message-${replyId}`}
                >
                    <img src={arrowSpine} className="h-3.5 self-end" />
                    <div className="flex gap-1.5">
                        <Avatar img={imgMapping[avatar] || person} type="xs" />
                        <h5 className="flex-1 cursor-pointer font-semibold hover:underline">
                            {replyUserUsername}
                        </h5>
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
                            <img src={img} className="h-5 w-5" />
                        )}
                    </div>
                </div>

                <div
                    className="flex gap-3 py-1 pe-3 ps-2 sm:pe-4 sm:ps-4 md:pe-8"
                    id={`message-${id}`}
                >
                    <div className="min-h-10 min-w-10">
                        <Avatar img={imgMapping[avatar] || person} type="sm" />
                    </div>
                    <div>
                        <div className="flex items-baseline gap-1.5 font-medium">
                            <h5 className="inline-block cursor-pointer align-top hover:underline">
                                {username}
                            </h5>
                            <h5 className="text-xss md:text-xs text-gray-clear">
                                {formatDate(time, is12HoursFormat)}
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
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MessageReply;
