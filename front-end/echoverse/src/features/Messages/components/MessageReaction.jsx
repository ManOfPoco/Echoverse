function MessageReaction({ reaction }) {
    const { reaction: reactionEmoji, quantity, isReacted } = reaction;
    return (
        <div
            className={`flex cursor-pointer items-center gap-1.5 rounded-md px-1.5 py-1 font-medium  hover:text-white ${
                isReacted
                    ? "bg-blue-light/15 text-white outline outline-1 outline-blue-light"
                    : "bg-gray-dark/90 text-white/75 outline-gray-light/40 hover:outline hover:outline-1"
            }`}
        >
            <span className="text-base leading-4">{reactionEmoji}</span>
            <span className="text-sm">{quantity}</span>
        </div>
    );
}

export default MessageReaction;
