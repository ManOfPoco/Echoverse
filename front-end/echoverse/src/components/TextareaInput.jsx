function TextareaInput({
    placeholder,
    size = "w-full h-24",
    roundness = "",
    resize,
    bgColor = "bg-gray-charcoal",
    register,
    value = undefined,
    onChange = undefined,
}) {
    return (
        <textarea
            placeholder={placeholder}
            className={`${size} ${roundness} border-0 ${bgColor} px-2 py-2 font-roboto text-sm outline-none`}
            {...register}
            value={value}
            style={{ resize: resize }}
            onChange={onChange}
        />
    );
}

export default TextareaInput;
