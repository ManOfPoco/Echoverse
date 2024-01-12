import { useEffect, useRef, useState } from "react";
import { usePopper } from "react-popper";

import EmojiPicker from "emoji-picker-react";

import Avatar from "../../../components/Avatar";
import Button from "../../../components/Button";

import person from "../../../assets/img/person.jpg";
import messageFilled from "../../../assets/svg/messageFilled.svg";
import smileEmoji from "../../../assets/svg/smileEmoji.svg";

const initialNewThreadMessage = "Share your thoughts...";

function clearInput(newThreadRef) {
    if (newThreadRef.current.innerHTML === "Share your thoughts...") {
        newThreadRef.current.innerHTML = "";
        newThreadRef.current.className = newThreadRef.current.className.replace(
            " text-gray-light",
            ""
        );
    }
}

function NewThread() {
    const newThreadRef = useRef(null);
    const [isEmojiPickerOpen, setIsEmojiPickerOpen] = useState(false);
    const [referenceElement, setReferenceElement] = useState(null);
    const [popperElement, setPopperElement] = useState(null);
    const { styles, attributes } = usePopper(referenceElement, popperElement, {
        placement: "bottom",
    });

    function handleOnFocus() {
        clearInput(newThreadRef);
    }

    function handleOnBlur() {
        if (newThreadRef.current.innerHTML === "") {
            newThreadRef.current.innerHTML = initialNewThreadMessage;
            newThreadRef.current.className += " text-gray-light";
        }
    }

    function handleAddEmoji(emojiObj) {
        clearInput(newThreadRef);
        newThreadRef.current.innerHTML += emojiObj.emoji;
    }

    useEffect(() => {
        if (
            newThreadRef.current.innerHTML === initialNewThreadMessage &&
            !newThreadRef.current.className.includes("text-gray-light")
        ) {
            newThreadRef.current.className += " text-gray-light";
        }
    }, [newThreadRef]);

    useEffect(() => {
        function closeFilter(e) {
            if (
                referenceElement &&
                isEmojiPickerOpen &&
                !referenceElement.contains(e.target) &&
                !popperElement.contains(e.target)
            )
                setIsEmojiPickerOpen(false);
        }
        document.addEventListener("mousedown", closeFilter);

        return () => {
            document.removeEventListener("mousedown", closeFilter);
        };
    }, [referenceElement, popperElement, isEmojiPickerOpen]);

    return (
        <div className="flex gap-3 border-b border-gray-light/30 pb-6">
            <Avatar img={person} type="sm" />

            <div className="flex w-[calc(100%-52px)] flex-col gap-2 sm:max-w-[524px]">
                <div
                    className="max-h-fit min-h-14 w-full overflow-y-auto overflow-x-hidden border-0 border-b border-gray-light/30 py-2 font-roboto text-sm outline-none"
                    contentEditable="true"
                    suppressContentEditableWarning={true}
                    aria-placeholder="Share your thoughts..."
                    onFocus={() => handleOnFocus()}
                    onBlur={() => handleOnBlur()}
                    ref={newThreadRef}
                >
                    {initialNewThreadMessage}
                </div>
                <div className="flex items-center justify-between">
                    {isEmojiPickerOpen && (
                        <div
                            ref={setPopperElement}
                            style={styles.popper}
                            {...attributes.popper}
                            className="mt-1"
                        >
                            <EmojiPicker
                                onEmojiClick={(emojiObj) =>
                                    handleAddEmoji(emojiObj)
                                }
                                theme="dark"
                                emojiStyle="twitter"
                                lazyLoadEmojis={true}
                                width="320px"
                            />
                        </div>
                    )}

                    <img
                        src={smileEmoji}
                        className="h-5 w-5 "
                        onClick={() => setIsEmojiPickerOpen(!isEmojiPickerOpen)}
                        ref={setReferenceElement}
                    />
                    <Button
                        btnClass="blue"
                        roundness="rounded-xls"
                        size="py-1 px-2 sm:px-4 sm:py-2 lg:py-2.5"
                        customClasses="self-end"
                        isDisabled={newThreadRef?.current?.innerHTML !== ""}
                    >
                        <div className="flex items-center justify-center gap-1.5">
                            <img src={messageFilled} className="h-4 w-4" />
                            <span
                                onClick={() =>
                                    console.log(newThreadRef.current.innerHTML)
                                }
                            >
                                Post
                            </span>
                        </div>
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default NewThread;
