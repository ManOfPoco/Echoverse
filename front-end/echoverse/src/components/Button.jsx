const types = {
    orange: "h-10.5 rounded-xls font-roboto text-sm bg-pumpkin w-52 hover:bg-orange-500",
    primary:
        "h-10.5 rounded-xls font-roboto text-sm bg-majorelle-blue w-[244px] hover:bg-indigo-500 hover:ring-2 hover:ring-indigo-600",
    secondary: 'px-6 md:px-7 lg:px-8 py-2 rounded-xls font-roboto text-sm bg-gray-charcoal'
};

function Button({
    type='button',
    btnClass,
    action,
    customClasses = "",
    isDisabled = false,
    children,
}) {
    const typeClasses = types[btnClass] || "";
    return (
        <button
            type={type}
            disabled={isDisabled}
            className={`${typeClasses} ${customClasses}`}
            onClick={action}
        >
            {children}
        </button>
    );
}

export default Button;
