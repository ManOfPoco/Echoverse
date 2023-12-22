const types = {
    orange: "h-10.5 rounded-xls font-roboto text-sm bg-pumpkin w-50 hover:bg-orange-500",
    primary: "h-10.5 rounded-xls font-roboto text-sm bg-purple w-full hover:bg-indigo-500 hover:ring-2 hover:ring-indigo-600",
};

function Button({ type, action, customClasses, isDisabled = false, children }) {
    const typeClasses = types[type] || "";
    return (
        <button
            disabled={isDisabled}
            className={`${typeClasses}${customClasses}`}
            onClick={action}
        >
            {children}
        </button>
    );
}

export default Button;
