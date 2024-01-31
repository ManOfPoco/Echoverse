import { useEffect, useRef } from "react";

function TextareaInput({
    placeholder,
    size = "w-full h-24",
    padding = "px-2 py-2",
    roundness = "",
    className = "",
    resize = "vertical",
    resizeLimit = "none",
    bgColor = "bg-gray-charcoal",
    register,
    isFocus = false,
    value = undefined,
    onChange = undefined,
    onPaste = undefined,
    onDrop = undefined,
}) {
    const textAreaRef = useRef(null);

    useEffect(() => {
        let textAreaRefCurrent = textAreaRef?.current;

        if (textAreaRefCurrent && resize === "none") {
            textAreaRefCurrent.style.height = "0px";
            const scrollHeight = textAreaRefCurrent.scrollHeight;

            textAreaRefCurrent.style.height =
                Math.min(scrollHeight, resizeLimit) + "px";
        }
    }, [textAreaRef, value, resize, resizeLimit]);

    useEffect(() => {
        if (textAreaRef.current && isFocus) {
            textAreaRef.current.focus();
        }
    }, [isFocus]);

    return (
        <textarea
            placeholder={placeholder}
            className={`${size} ${roundness} border-0 ${bgColor} ${padding} ${className} font-roboto text-sm outline-none`}
            {...register}
            value={value}
            style={{ resize: resize }}
            onChange={onChange}
            onPaste={onPaste}
            onDrop={onDrop}
            ref={textAreaRef}
        />
    );
}

export default TextareaInput;
