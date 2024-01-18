import { useEffect, useReducer, useRef, useState } from "react";
import { usePopper } from "react-popper";
import toast from "react-hot-toast";

import warning from "../../../assets/svg/warning.svg";

const maxFilesPerThread = 10;
const initialState = {
    threadValue: "",
    threadFiles: [],
    isEmojiPickerOpen: false,
};

function reducer(state, action) {
    switch (action.type) {
        case "setNewThreadValue":
            return { ...state, threadValue: action.threadValue };

        case "setNewThreadFiles":
            return {
                ...state,
                threadFiles: [...state.threadFiles, action.payload],
            };

        case "removeNewThreadFile":
            return {
                ...state,
                threadFiles: state.threadFiles.filter(
                    (threadFile, index) => index !== action.removeIndex
                ),
            };

        case "setNewThreadEmoji":
            return {
                ...state,
                threadValue: state.threadValue + action.emoji,
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
    const { threadFiles, isEmojiPickerOpen } = state;
    const fileUploadRef = useRef(null);

    const [referenceElement, setReferenceElement] = useState(null);
    const [popperElement, setPopperElement] = useState(null);
    const { styles, attributes } = usePopper(referenceElement, popperElement, {
        placement: "bottom",
    });

    function checkFilesQuantity(i) {
        if (threadFiles.length + i + 1 <= maxFilesPerThread) {
            return true;
        } else {
            toast(
                "You can't add more than 10 files.\nRemaining files were removed.",
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
            if (checkFilesQuantity(i)) {
                if (
                    (item.type.indexOf("image") !== -1 ||
                        item.type.indexOf("video")) !== -1
                ) {
                    const blob = item.getAsFile();
                    const reader = new FileReader();
                    reader.readAsDataURL(blob);

                    reader.onload = function () {
                        const fileType = item.type.split("/").at(-1);
                        const pastedFile = reader.result;

                        dispatch({
                            type: "setNewThreadFiles",
                            payload: {
                                threadFile: pastedFile,
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
                        type: "setNewThreadFiles",
                        payload: {
                            threadFile: readImg,
                            fileType: fileType,
                        },
                    });
                };
            }
        }
    }

    function handleFileOnDrop(e) {
        e.preventDefault();
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
                        const droppedFile = reader.result;

                        dispatch({
                            type: "setNewThreadFiles",
                            payload: {
                                threadFile: droppedFile,
                                fileType: fileType,
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
        handleThreadInputOnPaste,
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

export default useThreadInput;
