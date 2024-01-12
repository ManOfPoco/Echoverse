import { useEffect, useState } from "react";
import { usePopper } from "react-popper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";

import "swiper/css/bundle";

import EmojiPicker from "emoji-picker-react";

import Avatar from "../../../components/Avatar";
import Button from "../../../components/Button";
import TextareaInput from "../../../components/TextareaInput";

import useWindowDimensions from "../../../hooks/useWindowDimensions";

import person from "../../../assets/img/person.jpg";
import messageFilled from "../../../assets/svg/messageFilled.svg";
import smileEmoji from "../../../assets/svg/smileEmoji.svg";
import crossWhite from "../../../assets/svg/crossWhite.svg";

function NewThread() {
    const [newThreadValue, setNewThreadInput] = useState("");
    const [newThreadImages, setNewThreadImages] = useState([]);
    const [isEmojiPickerOpen, setIsEmojiPickerOpen] = useState(false);

    const [referenceElement, setReferenceElement] = useState(null);
    const [popperElement, setPopperElement] = useState(null);
    const { styles, attributes } = usePopper(referenceElement, popperElement, {
        placement: "bottom",
    });

    const { height } = useWindowDimensions();

    const isPostButtonDisabled =
        newThreadValue === "" && newThreadImages.length === 0;

    function handleOnChange(e) {
        setNewThreadInput(e.target.value);
    }

    function handleOnPaste(e) {
        const items = e.clipboardData.items;

        for (let i = 0; i < items.length; i++) {
            const item = items[i];

            if (item.type.indexOf("image") !== -1) {
                const blob = item.getAsFile();
                // blob.resize(blob.width, 500);

                // Convert blob to data URL
                const reader = new FileReader();
                reader.onload = function () {
                    const pastedImg = reader.result;
                    setNewThreadImages([...newThreadImages, pastedImg]);
                };
                reader.readAsDataURL(blob);
            }
        }
    }

    function handleRemoveImage(removeIndex) {
        setNewThreadImages((newThreadImages) =>
            newThreadImages.filter(
                (newThreadImage, index) => index !== removeIndex
            )
        );
    }

    function handleAddEmoji(emojiObj) {
        setNewThreadInput((newThreadValue) => newThreadValue + emojiObj.emoji);
    }

    // close emoji picker when clicking outside of it
    useEffect(() => {
        function closeEmojiPicker(e) {
            if (
                referenceElement &&
                isEmojiPickerOpen &&
                !referenceElement.contains(e.target) &&
                !popperElement.contains(e.target)
            )
                setIsEmojiPickerOpen(false);
        }
        document.addEventListener("mousedown", closeEmojiPicker);

        return () => {
            document.removeEventListener("mousedown", closeEmojiPicker);
        };
    }, [referenceElement, popperElement, isEmojiPickerOpen]);

    return (
        <div className="flex gap-3 border-b border-gray-light/30 pb-6">
            <Avatar img={person} type="sm" />

            <div className="flex w-[calc(100%-52px)] flex-col gap-2 divide-y divide-gray-light/30 sm:max-w-[524px]">
                <div>
                    <TextareaInput
                        placeholder="Share your thoughts..."
                        size="min-h-7 w-full sm:max-w-[524px] w-[calc(100%-52px)]"
                        resizeLimit={height - 200}
                        padding="py-2"
                        className="overflow-y-auto"
                        resize="none"
                        bgColor="bg-black-night"
                        value={newThreadValue}
                        onChange={(e) => handleOnChange(e)}
                        onPaste={(e) => handleOnPaste(e)}
                    />
                    <Swiper
                        spaceBetween={10}
                        slidesPerView={2}
                        modules={[Navigation, Pagination, A11y]}
                        navigation
                        pagination={{ clickable: true }}
                    >
                        {newThreadImages.map((newThreadImg, index) => (
                            <SwiperSlide key={index}>
                                <div className="relative w-full">
                                    <div className="absolute flex w-full justify-end p-2">
                                        <span
                                            className="min-w-fit cursor-pointer rounded-full bg-black-dark p-1 transition-colors hover:bg-black-night"
                                            onClick={() =>
                                                handleRemoveImage(index)
                                            }
                                        >
                                            <img
                                                src={crossWhite}
                                                className="h-5 w-5"
                                                alt="remove"
                                            />
                                        </span>
                                    </div>

                                    <img
                                        src={newThreadImg}
                                        className="max-h-[500px] w-full"
                                    />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
                <div className="flex items-center justify-between pt-2">
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
