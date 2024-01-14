import { useEffect, useReducer, useRef, useState } from "react";
import { usePopper } from "react-popper";
import toast from "react-hot-toast";

import warning from "../../../assets/svg/warning.svg";

const maxImagesPerThread = 10;
const initialState = {
    newThreadValue: "",
    newThreadImages: [],
    isEmojiPickerOpen: false,
};

function reducer(state, action) {
    switch (action.type) {
        case "setNewThreadValue":
            return { ...state, newThreadValue: action.newThreadValue };

        case "setNewThreadImages":
            return {
                ...state,
                newThreadImages: [
                    ...state.newThreadImages,
                    action.newThreadImage,
                ],
            };

        case "removeNewThreadImage":
            return {
                ...state,
                newThreadImages: state.newThreadImages.filter(
                    (newThreadImage, index) => index !== action.removeIndex
                ),
            };

        case "setNewThreadEmoji":
            return {
                ...state,
                newThreadValue: state.newThreadValue + action.emoji,
            };

        case "toggleEmojiPicker":
            return { ...state, isEmojiPickerOpen: !state.isEmojiPickerOpen };

        case "closeEmojiPicker":
            return { ...state, isEmojiPickerOpen: false };

        default:
            break;
    }
}

function useThreadInput() {
    const [state, dispatch] = useReducer(reducer, initialState);
    const { newThreadImages, isEmojiPickerOpen } = state;
    const fileUploadRef = useRef(null);

    const [referenceElement, setReferenceElement] = useState(null);
    const [popperElement, setPopperElement] = useState(null);
    const { styles, attributes } = usePopper(referenceElement, popperElement, {
        placement: "bottom",
    });

    function handleThreadInputOnChange(e) {
        dispatch({ type: "setNewThreadValue", newThreadValue: e.target.value });
    }

    function checkImageQuantity(i) {
        if (newThreadImages.length + i + 1 <= maxImagesPerThread) {
            return true;
        } else {
            toast(
                "You can't add more than 10 images.\nRemaining images were removed.",
                {
                    duration: 4000,
                    icon: <img src={warning} className="h-12 w-12" />,
                }
            );
        }
    }

    function handleThreadInputOnPaste(e) {
        const items = e.clipboardData.items;

        for (let i = 0; i < items.length; i++) {
            const item = items[i];

            if (item.type.indexOf("image") !== -1) {
                if (checkImageQuantity(i)) {
                    const blob = item.getAsFile();
                    const reader = new FileReader();
                    reader.readAsDataURL(blob);

                    reader.onload = function () {
                        const pastedImg = reader.result;

                        dispatch({
                            type: "setNewThreadImages",
                            newThreadImage: pastedImg,
                        });
                    };
                }
            }
        }
    }

    function handleTriggerFileUpload() {
        if (fileUploadRef.current) {
            fileUploadRef.current.click();
        }
    }

    function handleFileUploadOnChange(e) {
        const files = e.target.files;

        for (let i = 0; i < files.length; i++) {
            const file = files[i];
            if (checkImageQuantity(i)) {
                const reader = new FileReader();
                reader.readAsDataURL(file);

                reader.onload = function () {
                    const readImg = reader.result;

                    dispatch({
                        type: "setNewThreadImages",
                        newThreadImage: readImg,
                    });
                };
            }
        }
    }

    function handleImageOnDrop(e) {
        e.preventDefault();
        console.log(e);
        const droppedFiles = e.dataTransfer.files;

        for (let i = 0; i < droppedFiles.length; i++) {
            const droppedFile = droppedFiles[i];

            if (checkImageQuantity(i)) {
                if (droppedFile.type.indexOf("image") !== -1) {
                    const reader = new FileReader();
                    reader.readAsDataURL(droppedFile);

                    reader.onload = function () {
                        const droppedImage = reader.result;

                        dispatch({
                            type: "setNewThreadImages",
                            newThreadImage: droppedImage,
                        });
                    };
                }
            }
        }
    }

    function handleAddEmoji(emojiObj) {
        dispatch({ type: "setNewThreadEmoji", emoji: emojiObj.emoji });
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
                dispatch({ type: "closeEmojiPicker" });
        }
        document.addEventListener("mousedown", closeEmojiPicker);

        return () => {
            document.removeEventListener("mousedown", closeEmojiPicker);
        };
    }, [referenceElement, popperElement, isEmojiPickerOpen, dispatch]);

    return {
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
    };
}

export default useThreadInput;
