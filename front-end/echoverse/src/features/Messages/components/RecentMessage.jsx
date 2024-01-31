import MessageAttachments from "./MessageAttachments";
import MessageReactions from "./MessageReactions";

function RecentMessage({ messageObj, is12HoursFormat, handleOpenContextMenu }) {
    const {
        id,
        senderId,
        username,
        time,
        message,
        messageFiles,
        isEdited,
        reactions,
    } = messageObj;

    return (
        <div
            className="group relative hover:bg-gray-dark/50"
            id={`message-${id}`}
            onContextMenu={(e) =>
                handleOpenContextMenu(e, messageObj)
            }
        >
            <div className="hidden group-hover:block">
                <span className="absolute left-0 flex h-7 w-[68px] items-center justify-center text-xss font-medium leading-snug text-gray-clear">
                    {new Date(time).toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                        hour12: is12HoursFormat,
                    })}
                </span>
            </div>
            <div className="py-0.5 pe-3 ps-[60px] sm:pe-4 sm:ps-[68px] md:pe-8">
                <p className="whitespace-pre-wrap break-words leading-snug text-platinum">
                    {message}
                    <span className="ps-2 text-xss text-gray-clear">
                        {isEdited && "(edited)"}
                    </span>
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
    );
}

export default RecentMessage;
