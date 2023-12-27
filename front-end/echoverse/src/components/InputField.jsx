function InputField({ img, type = "text", placeholder, classes, autocomplete, register }) {
    return (
        <div className="flex items-center rounded-xls max-w-[244px] bg-gray-charcoal px-4 py-2">
            <img
                draggable="false"
                className="h-5.5 w-5.5"
                src={img}
                alt="search"
            />
            <input
                type={type}
                placeholder={placeholder}
                className={`border-0 bg-gray-charcoal max-w-[190px] px-2 font-roboto outline-none ${classes}`}
                autoComplete={autocomplete}
                {...register}
            />
        </div>
    );
}

export default InputField;
