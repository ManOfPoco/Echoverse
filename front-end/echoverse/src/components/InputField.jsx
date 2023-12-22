function InputField({ img, type = "text", placeholder, classes, register }) {
    return (
        <div className="flex items-center rounded-xls bg-gray-charcoal px-4 py-2">
            <img
                draggable="false"
                className="h-5.5 w-5.5"
                src={img}
                alt="search"
            />
            <input
                type={type}
                placeholder={placeholder}
                className={`w-full border-0 bg-gray-charcoal px-1 font-roboto outline-none ${classes}`}
                {...register}
            />
        </div>
    );
}

export default InputField;
