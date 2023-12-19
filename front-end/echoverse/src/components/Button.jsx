import { Link } from "react-router-dom";

const types = {
    orange: "bg-orange w-50",
};

function Button({ type, to, children }) {
    const classes = types[type];
    return (
        <Link to={to}>
            <button
                className={`rounded-xls h-10.5 font-roboto text-sm ${classes}`}
            >
                {children}
            </button>
        </Link>
    );
}

export default Button;
