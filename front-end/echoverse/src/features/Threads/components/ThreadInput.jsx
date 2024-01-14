import EmojiPicker from "emoji-picker-react";

import Avatar from "../../../components/Avatar";
import Button from "../../../components/Button";
import TextareaInput from "../../../components/TextareaInput";

import ThreadImages from "./ThreadImages";

import useWindowDimensions from "../../../hooks/useWindowDimensions";

import person from "../../../assets/img/person.jpg";
import messageFilled from "../../../assets/svg/messageFilled.svg";
import smileEmoji from "../../../assets/svg/smileEmoji.svg";
import img from "../../../assets/svg/img.svg";
import useThreadInput from "../hooks/useThreadInput";

function ThreadInputField({ inputPlaceholder, btnText, action }) {
    const {
        handleThreadInputOnChange,
        handleThreadInputOnPaste,
        handleTriggerFileUpload,
        handleFileUploadOnChange,
        handleImageOnDrop,
        handleAddEmoji,
        fileUploadRef,
        setReferenceElement,
        setPopperElement,
        styles,
        attributes,
        state,
        dispatch,
    } = useThreadInput();

    const { newThreadValue, newThreadImages, isEmojiPickerOpen } = state;

    const { height } = useWindowDimensions();

    const isPostButtonDisabled =
        newThreadValue === "" && newThreadImages.length === 0;

    return (
        <div className="flex gap-3 border-b border-gray-light/30 pb-5">
            <Avatar img={person} type="sm" />

            <div className="flex w-[calc(100%-52px)] flex-col gap-2 divide-y divide-gray-light/30 sm:max-w-[524px]">
                <div>
                    <TextareaInput
                        placeholder={inputPlaceholder}
                        size="min-h-7 w-full sm:max-w-[524px]"
                        resizeLimit={height > 300 ? height - 200 : height}
                        padding="py-2"
                        resize="none"
                        bgColor="bg-black-night"
                        value={newThreadValue}
                        onChange={(e) => handleThreadInputOnChange(e)}
                        onPaste={(e) => handleThreadInputOnPaste(e)}
                        onDrop={(e) => handleImageOnDrop(e)}
                    />
                    <ThreadImages
                        deleteBtn={true}
                        threadImages={newThreadImages}
                        dispatch={dispatch}
                    />
                </div>
                <div className="flex items-center justify-between pt-2">
                    <div className="flex gap-5">
                        <div className="z-30">
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
                                className="h-5 w-5 cursor-pointer"
                                onClick={() =>
                                    dispatch({ type: "toggleEmojiPicker" })
                                }
                                ref={setReferenceElement}
                            />
                        </div>
                        <div>
                            <input
                                accept="image/jpeg, image/png, video/mp4, video/quicktime"
                                className="hidden"
                                multiple=""
                                type="file"
                                ref={fileUploadRef}
                                onChange={(e) => handleFileUploadOnChange(e)}
                            />
                            <img
                                src={img}
                                className="h-5 w-5 cursor-pointer"
                                onClick={() => handleTriggerFileUpload()}
                                ref={setReferenceElement}
                            />
                        </div>
                    </div>
                    <Button
                        btnClass={`${
                            isPostButtonDisabled ? "secondary" : "blue"
                        }`}
                        roundness="rounded-xls"
                        size="py-1 px-2 sm:px-4 sm:py-2 lg:py-2.5"
                        customClasses="self-end"
                        isDisabled={isPostButtonDisabled}
                    >
                        <div className="flex items-center justify-center gap-1.5">
                            <img src={messageFilled} className="h-4 w-4" />
                            <span onClick={() => console.log("request")}>
                                {btnText}
                            </span>
                        </div>
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default ThreadInputField;
