import EmojiPicker from "emoji-picker-react";

import TextareaInput from "../../../components/TextareaInput";

import MessageInputFiles from "./MessageInputFiles";
import MessageDropzone from "./MessageDropzone";

import add from "../../../assets/svg/add.svg";
// import gif from "../../../assets/svg/gif.svg";
import smileEmoji from "../../../assets/svg/smileEmoji.svg";

import useWindowDimensions from "../../../hooks/useWindowDimensions";
import useMessageInput from "../hooks/useMessageInput";

import { createPortal } from "react-dom";
import MessageInputModification from "./MessageInputModification";
import { useEffect, useRef, useState } from "react";

function MessageInputField({
    state: messageInputState,
    dispatch: messageInputDispatch,
}) {
    const {
        handleMessageInputOnPaste,
        handleFileUpload,
        handleFileOnDrop,
        fileUploadRef,
        setReferenceElement,
        setPopperElement,
        styles,
        attributes,
        state,
        dispatch,
    } = useMessageInput();
    const { message, messageFiles, isEmojiPickerOpen } = state;

    const { inputMessageType, selectedMessage } = messageInputState;

    const { height } = useWindowDimensions();

    const modificationsRef = useRef(null);
    const filesRef = useRef(null);
    const [textAreaHeight, setTextAreaHeight] = useState((height / 100) * 70);

    function handleTriggerFileUpload() {
        if (fileUploadRef.current) {
            fileUploadRef.current.click();
        }
    }

    function handleAddEmoji(emojiObj) {
        dispatch({ type: "setMessageEmoji", emoji: emojiObj.emoji });
    }

    function handleMessageInputOnChange(e) {
        dispatch({ type: "setMessage", message: e.target.value });
    }

    useEffect(() => {
        if (inputMessageType && inputMessageType === "edit")
            dispatch({
                type: "setMessage",
                message: selectedMessage.selectedMessageContent,
            });
    }, [dispatch, inputMessageType, selectedMessage]);

    useEffect(() => {
        const modificationsHeight =
            modificationsRef?.current?.clientHeight || 0;
        const filesHeight = filesRef?.current?.clientHeight || 0;

        if (modificationsHeight === 0 && filesHeight === 0)
            setTextAreaHeight((height / 100) * 70);


        if (modificationsHeight || filesHeight) {
            setTextAreaHeight(
                (height / 100) * 65 - modificationsHeight - filesHeight
            );
        }
    }, [height]);

    return (
        <>
            {createPortal(
                <MessageDropzone handleFileOnDrop={handleFileOnDrop} />,
                document.getElementById("root")
            )}
            <div className="mx-4 mb-4 max-h-[80%] divide-y divide-gray-light/20 rounded-lg bg-gray-dark">
                {inputMessageType && (
                    <MessageInputModification
                        inputMessageType={inputMessageType}
                        selectedMessage={selectedMessage}
                        dispatch={messageInputDispatch}
                        ref={modificationsRef}
                    />
                )}

                {messageFiles && messageFiles.length > 0 && (
                    <MessageInputFiles
                        messageFiles={messageFiles}
                        dispatch={dispatch}
                        ref={filesRef}
                    />
                )}

                <div className="flex h-fit justify-between gap-3 overflow-y-auto px-2.5 py-1">
                    <div className="flex h-full w-full gap-3">
                        <input
                            accept="image/gif, image/jpeg, image/png, video/mp4, video/quicktime"
                            className="hidden"
                            multiple="multiple"
                            type="file"
                            ref={fileUploadRef}
                            onChange={(e) => handleFileUpload(e)}
                        />
                        <img
                            draggable={false}
                            src={add}
                            className="mt-1 h-7 w-7 cursor-pointer"
                            onClick={handleTriggerFileUpload}
                        />
                        <TextareaInput
                            placeholder="Message"
                            size="min-h-7 w-full"
                            resizeLimit={textAreaHeight}
                            padding="py-2"
                            resize="none"
                            bgColor="bg-gray-dark"
                            className="text-platinum"
                            isFocus={inputMessageType !== null}
                            value={message}
                            onChange={(e) => handleMessageInputOnChange(e)}
                            onPaste={(e) => handleMessageInputOnPaste(e)}
                        />
                    </div>
                    <div className="mt-1 flex h-fit min-w-fit items-center gap-4">
                        {/* <img
                            draggable={false}
                            src={gif}
                            className="h-7 w-7 cursor-pointer"
                        /> */}
                        <img
                            draggable={false}
                            src={smileEmoji}
                            className="h-6 w-6 cursor-pointer"
                            onClick={() =>
                                dispatch({ type: "toggleEmojiPicker" })
                            }
                            ref={setReferenceElement}
                        />
                        {isEmojiPickerOpen && (
                            <div
                                ref={setPopperElement}
                                style={styles.popper}
                                {...attributes.popper}
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
                    </div>
                </div>
            </div>
        </>
    );
}

export default MessageInputField;
