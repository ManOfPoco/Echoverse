function InputField({
    img = null,
    imgSize = 'h-5.5 w-5.5',
    type = "text",
    size = 'w-[244px]',
    padding = 'px-4',
    roundness = "rounded-xls",
    classes,
    placeholder,
    autocomplete,
    register,
}) {
    return (
        <div
            className={`flex items-center ${roundness} ${size} bg-gray-charcoal ${img ? padding : ''} py-2`}
        >
            {img && (
                <img
                    draggable="false"
                    className={imgSize}
                    src={img}
                    alt="search"
                />
            )}
            <input
                type={type}
                placeholder={placeholder}
                className={`w-full border-0 bg-gray-charcoal ${img ? 'px-2' : 'px-2.5'} font-roboto outline-none ${classes}`}
                autoComplete={autocomplete}
                {...register}
            />
        </div>
    );
}

export default InputField;
