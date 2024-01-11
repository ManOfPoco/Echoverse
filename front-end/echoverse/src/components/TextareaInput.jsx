function TextareaInput({
    placeholder,
    size = "w-full h-24",
    roundness,
    bgColor = 'bg-gray-charcoal',
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
            onChange={onChange}
        />
    );
}

export default TextareaInput;
