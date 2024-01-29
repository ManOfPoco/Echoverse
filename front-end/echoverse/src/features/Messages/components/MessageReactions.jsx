import MessageReaction from "./MessageReaction";
import MessageAddReaction from "./MessageAddReaction";
import { useState } from "react";

function MessageReactions({ reactions, padding }) {
    const [isHovered, setIsHovered] = useState(false);
    const [isEmojiPickerOpen, setIsEmojiPickerOpen] = useState(false);

    function handleOnMouseEnter() {
        if (!isEmojiPickerOpen) {
            setIsHovered(true);
        }
    }

    function handleOnMouseLeave() {
        if (!isEmojiPickerOpen) {
            setIsHovered(false);
        }
    }

    return (
        <div
            className={`flex flex-wrap items-center gap-x-1.5 gap-y-1 ${padding}`}
            onMouseEnter={handleOnMouseEnter}
            onMouseLeave={handleOnMouseLeave}
        >
            {reactions.map((reaction) => (
                <MessageReaction reaction={reaction} key={reaction.id} />
            ))}
            <MessageAddReaction
                isHovered={isHovered}
                setIsHovered={setIsHovered}
                isEmojiPickerOpen={isEmojiPickerOpen}
                setIsEmojiPickerOpen={setIsEmojiPickerOpen}
            />
        </div>
    );
}

export default MessageReactions;
