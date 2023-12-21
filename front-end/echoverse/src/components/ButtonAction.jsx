const types = {
    orange: "bg-orange w-50",
    purple: 'bg-purple w-full hover:bg-indigo-400'
};

function Button({ type, action, children }) {

    const classes = types[type];
    return (
        <button
            className={`h-10.5 rounded-xls font-roboto text-sm ${classes}`}
            onClick={action}
        >
            {children}
        </button>
    );
}

export default Button;
