const types = {
    orange: "h-10.5 rounded-xls font-roboto text-sm bg-pumpkin w-52 hover:bg-orange-500",
    primary:
        "h-10.5 rounded-xls font-roboto text-sm bg-majorelle-blue w-[244px] hover:bg-indigo-500 hover:ring-2 hover:ring-indigo-600",
    secondaryRounded:
        "px-6 md:px-7 lg:px-8 py-2 rounded-xls font-roboto text-sm bg-gray-charcoal",
    secondary:
        "px-6 md:px-8 py-2 rounded-lg font-roboto text-sm bg-gray-charcoal",
    secondaryBlue:
        "px-6 md:px-8 py-2 rounded-lg font-roboto text-sm bg-blue-light",
    secondaryRoundedBlue:
        "px-6 md:px-8 py-2 rounded-xls font-roboto text-sm bg-blue-light",
};

function Button({
    type = "button",
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
