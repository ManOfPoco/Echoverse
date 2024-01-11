import chatMessageBubble from "../../../assets/svg/chatMessageBubble.svg";

export function ThreadBody({
    username,
    postedAgo,
    title,
    description,
    messagesQuantity,
    lastMessageUsername,
    lastMessage,
    view,
}) {
    return (
        <>
            <div className="flex gap-1.5 px-2.5 pt-2 text-sm text-gray-light">
                <h5 className="font-semibold">{username}</h5>
                <h5 className="text-xs">{postedAgo}</h5>
            </div>
            <h4 className="truncate px-2.5 pt-2 text-base font-semibold">
                {title}
            </h4>
            <p
                className={`px-2.5 pt-1.5 text-sm text-gray-light ${
                    view === "gallery" ? "h-16 md:h-20 lg:h-[106px] xl:h-32 line-clamp-3 md:line-clamp-4 lg:line-clamp-5 xl:line-clamp-6" : "truncate"
                }`}
            >
                {description}
            </p>
            <div className="mx-2.5 my-2.5 flex items-center rounded-xls bg-gray-dark px-2 py-1.5 text-sm">
                <img
                    src={chatMessageBubble}
                    alt="message"
                    className="h-4 w-4"
                />
                <span className="pe-2 ps-1.5">{messagesQuantity}</span>
                <h4 className="text-blue-light">{lastMessageUsername}:</h4>
                <p className="truncate ps-1.5">{lastMessage}</p>
            </div>
        </>
    );
}

export default ThreadBody;
