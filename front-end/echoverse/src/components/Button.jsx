const btnTypes = {
    primary:
        "font-roboto text-sm bg-majorelle-blue hover:bg-indigo-500 hover:ring-2 hover:ring-indigo-600",
    secondary:
        "font-roboto text-sm bg-gray-charcoal hover:bg-gray-600 hover:ring-2 hover:ring-gray-700",
    warning:
        "font-roboto text-sm bg-pumpkin hover:bg-orange-500 hover:ring-2 hover:ring-orange-600",
    danger: "font-roboto text-sm bg-red-fire-engine hover:bg-red-600 hover:ring-2 hover:ring-red-700",
    blue: "font-roboto text-sm bg-blue-light hover:bg-blue-500 hover:ring-2 hover:ring-blue-600",
};

const btnSizes = {
    primary: "h-10.5 w-[244px]",
    secondary: "h-9 w-[112px]",
    warning: "h-10.5 w-[244px]",
    danger: "",
    blue: "",
};

function Button({
    type = "button",
    btnClass,
    size = "",
    roundness = "",
    customClasses = "",
    action,
    isDisabled = false,
    children,
}) {
    const btnType = btnTypes[btnClass] || "";
    const btnSize = size || btnSizes[btnClass] || "";

    return (
        <button
            type={type}
            disabled={isDisabled}
            className={`${btnType} ${btnSize} ${roundness} ${customClasses} ${
                isDisabled ? "cursor-not-allowed" : "cursor-pointer"
            }`}
            onClick={action}
        >
            {children}
        </button>
    );
}

export default Button;
