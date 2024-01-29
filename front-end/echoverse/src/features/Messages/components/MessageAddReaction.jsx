import { useState } from "react";
import { usePopper } from "react-popper";

import smileEmoji from "../../../assets/svg/smileEmoji.svg";
import EmojiPicker from "emoji-picker-react";
import useCloseDropdown from "../../../hooks/useCloseDropdown";

function MessageAddReaction({
    isHovered,
    setIsHovered,
    isEmojiPickerOpen,
    setIsEmojiPickerOpen,
}) {
    const [isEmojiHovered, setIsEmojiHovered] = useState(false);
    const [referenceElement, setReferenceElement] = useState(null);
    const [popperElement, setPopperElement] = useState(null);
    const { styles, attributes } = usePopper(referenceElement, popperElement, {
        placement: "top",
        modifiers: {
            name: "offset",
            options: {
                offset: [0, 8],
            },
        },
    });

    const [addEmojiPopperElement, setAddEmojiPopperElement] = useState(null);
    const { styles: addEmojiStyles, attributes: addEmojiAttributes } =
        usePopper(referenceElement, addEmojiPopperElement, {
            placement: "top",
            modifiers: {
                name: "offset",
                options: {
                    offset: [0, 8],
                },
            },
        });

    useCloseDropdown(
        referenceElement,
        isEmojiPickerOpen,
        addEmojiPopperElement,
        setIsEmojiPickerOpen,
        function () {
            setIsHovered(false);
        }
    );

    function handleOpenEmojiPicker() {
        setIsEmojiPickerOpen((isEmojiPickerOpen) => !isEmojiPickerOpen);
    }

    function handleAddReaction(emojiObj) {}

    return (
        <div className="h-4 w-4">
            <div className={`ps-0.5 ${isHovered ? "flex" : "hidden"}`}>
                <img
                    src={smileEmoji}
                    className="h-4 w-4 cursor-pointer"
                    onMouseEnter={() => setIsEmojiHovered(true)}
                    onMouseLeave={() => setIsEmojiHovered(false)}
                    onClick={handleOpenEmojiPicker}
                    ref={setReferenceElement}
                />
                {isEmojiHovered && (
                    <div
                        className="z-50 rounded-lg bg-black-night px-2 py-2 text-sm font-normal before:absolute before:left-[calc(50%-6px)] before:top-full before:border-l-6 before:border-r-6 before:border-t-6 before:border-l-transparent before:border-r-transparent before:border-t-black-night before:content-['']"
                        ref={setPopperElement}
                        style={styles.popper}
                        {...attributes.popper}
                    >
                        Add emoji
                    </div>
                )}
                {isEmojiPickerOpen && (
                    <div
                        ref={setAddEmojiPopperElement}
                        style={addEmojiStyles.popper}
                        {...addEmojiAttributes.popper}
                        className="z-40 mt-1"
                    >
                        <EmojiPicker
                            onEmojiClick={(emojiObj) =>
                                handleAddReaction(emojiObj)
                            }
                            theme="dark"
                            emojiStyle="twitter"
                            lazyLoadEmojis={true}
                            width="320px"
                        />
                    </div>
                )}
            </div>
        </div>
    );
}

export default MessageAddReaction;
