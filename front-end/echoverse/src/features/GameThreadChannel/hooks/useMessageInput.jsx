import { useEffect, useReducer, useRef, useState } from "react";
import { usePopper } from "react-popper";
import toast from "react-hot-toast";

import warning from "../../../assets/svg/warning.svg";

const maxFilesPerMessage = 10;
const initialState = {
    message: "",
    messageFiles: [],
    isEmojiPickerOpen: false,
};

function reducer(state, action) {
    switch (action.type) {
        case "setMessage":
            return { ...state, message: action.message };

        case "setMessageFiles":
            return {
                ...state,
                messageFiles: [...state.messageFiles, action.payload],
            };

        case "removeMessageFile":
            return {
                ...state,
                messageFiles: state.messageFiles.filter(
                    (messageFile, index) => index !== action.removeIndex
                ),
            };

        case "setMessageEmoji":
            return {
                ...state,
                message: state.message + action.emoji,
            };

        case "toggleEmojiPicker":
            return { ...state, isEmojiPickerOpen: !state.isEmojiPickerOpen };

        case "closeEmojiPicker":
            return { ...state, isEmojiPickerOpen: false };

        default:
            break;
    }
}

function useMessageInput() {
    const [state, dispatch] = useReducer(reducer, initialState);
    const { messageFiles, isEmojiPickerOpen } = state;
    const fileUploadRef = useRef(null);

    const [referenceElement, setReferenceElement] = useState(null);
    const [popperElement, setPopperElement] = useState(null);
    const { styles, attributes } = usePopper(referenceElement, popperElement, {
        placement: "top-start",
        modifiers: {
            name: "offset",
            options: {
                offset: [10, 14],
            },
        },
    });

    function checkFilesQuantity(i) {
        if (messageFiles.length + i + 1 <= maxFilesPerMessage) {
            return true;
        } else {
            toast(
                "You can't add more than 10 files.\nRemaining files were removed.",
                {
                    duration: 4000,
                    icon: (
                        <img
                            draggable={false}
                            src={warning}
                            className="h-12 w-12"
                        />
                    ),
                    style: {
                        color: "white",
                        backgroundColor: "#262A2F",
                    },
                }
            );
        }
    }

    function handleMessageInputOnPaste(e) {
        const items = e.clipboardData.items;

        for (let i = 0; i < items.length; i++) {
            const item = items[i];
            if (checkFilesQuantity(i)) {
                if (
                    (item.type.indexOf("image") !== -1 ||
                        item.type.indexOf("video")) !== -1
                ) {
                    const blob = item.getAsFile();
                    const fileName = item.getAsFile().name;

                    const reader = new FileReader();
                    reader.readAsDataURL(blob);

                    reader.onload = function () {
                        const fileType = fileName.split(".").at(-1);
                        const pastedFile = reader.result;

                        dispatch({
                            type: "setMessageFiles",
                            payload: {
                                messageFile: pastedFile,
                                fileType: fileType,
                            },
                        });
                    };
                }
            }
        }
    }

    function handleFileUpload(e) {
        const files = e.target.files;

        for (let i = 0; i < files.length; i++) {
            const file = files[i];

            if (checkFilesQuantity(i)) {
                const reader = new FileReader();
                reader.readAsDataURL(file);

                reader.onload = function () {
                    const fileType = file.type.split("/").at(-1);
                    const readImg = reader.result;

                    dispatch({
                        type: "setMessageFiles",
                        payload: {
                            messageFile: readImg,
                            fileType: fileType,
                        },
                    });
                };
            }
        }
    }

    function handleFileOnDrop(e) {
        const droppedFiles = e.dataTransfer.files;

        for (let i = 0; i < droppedFiles.length; i++) {
            const droppedFile = droppedFiles[i];

            if (checkFilesQuantity(i)) {
                if (
                    (droppedFile.type.indexOf("image") !== -1 ||
                        droppedFile.type.indexOf("video")) !== -1
                ) {
                    const reader = new FileReader();
                    reader.readAsDataURL(droppedFile);

                    reader.onload = function () {
                        const fileType = droppedFile.type.split("/").at(-1);
                        const messageFile = reader.result;

                        dispatch({
                            type: "setMessageFiles",
                            payload: {
                                fileType: fileType,
                                messageFile: messageFile,
                            },
                        });
                    };
                }
            }
        }
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
    };
}

export default useMessageInput;
