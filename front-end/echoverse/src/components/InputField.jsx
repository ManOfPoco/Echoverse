function InputField({
    img = null,
    imgSize = "h-5.5 w-5.5",
    type = "text",
    size = "w-[244px]",
    padding = "px-4",
    roundness = "rounded-xls",
    bgColor = "bg-gray-charcoal",
    classes,
    placeholder,
    autocomplete,
    onChange = undefined,
    onKeyDown,
    defaultValue,
    register,
    isDisabled,
}) {
    return (
        <div
            className={`flex items-center ${roundness} ${size} ${bgColor} ${
                img ? padding : ""
            } py-2`}
        >
            {img && (
                <img
                    draggable="false"
                    className={`${imgSize} aspect-square rounded-full object-cover`}
                    src={img}
                    alt="search"
                />
            )}
            <input
                type={type}
                placeholder={placeholder}
                className={`w-full border-0 ${bgColor} ${
                    img ? "mx-2" : "mx-2.5"
                } font-roboto outline-none ${classes}`}
                autoComplete={autocomplete}
                disabled={isDisabled}
                value={defaultValue}
                onChange={onChange}
                onKeyDown={onKeyDown}
                accept={accept}
                {...register}
            />
        </div>
    );
}

export default InputField;
