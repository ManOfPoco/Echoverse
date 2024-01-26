import chatMessageBubble from "../../../assets/svg/chatMessageBubble.svg";

export function GameThreadBody({ gameThread, view }) {
    const {
        title,
        description,
        username,
        lastMessage,
        lastMessageUsername,
        postedAgo,
        messagesQuantity,
    } = gameThread;

    return (
        <div className="flex flex-col gap-1.5 pt-2">
            <div className="pointer-events-none relative flex gap-1.5 px-2.5 text-sm text-gray-light">
                <h5 className="pointer-events-auto font-semibold hover:underline">
                    {username}
                </h5>
                <h5 className="text-xs text-gray-clear">{postedAgo}</h5>
            </div>
            <h4 className="truncate px-2.5 text-lg font-semibold">{title}</h4>
            <p
                className={`px-2.5 text-sm text-gray-light ${
                    view === "gallery"
                        ? "line-clamp-3 h-16 md:line-clamp-4 md:h-20 lg:line-clamp-5 lg:h-[106px] xl:line-clamp-6 xl:h-32"
                        : "truncate"
                }`}
            >
                {description}
            </p>
            <div className="mx-2.5 my-2.5 flex items-center rounded-lg bg-gray-dark px-2 py-1.5 text-sm">
                <img
                    draggable={false}
                    src={chatMessageBubble}
                    alt="message"
                    className="h-4 w-4"
                />
                <span className="pe-2 ps-1.5">{messagesQuantity}</span>
                <h4 className="text-blue-light">{lastMessageUsername}:</h4>
                <p className="truncate ps-1.5">{lastMessage}</p>
            </div>
        </div>
    );
}

export default GameThreadBody;
