import MessageAttachments from "./MessageAttachments";

function RecentMessage({ messageObj, is12HoursFormat }) {
    const { id, senderId, time, message, messageFiles, isEdited } = messageObj;

    return (
        <div
            className="group relative hover:bg-gray-dark/50"
            id={`message-${id}`}
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
            <div className="py-0.5 pe-3 sm:pe-4 md:pe-8 ps-[60px] sm:ps-[68px]">
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
            </div>
        </div>
    );
}

export default RecentMessage;
