import { Link, useNavigate } from "react-router-dom";

const types = {
    orange: "bg-orange w-50",
};

function Button({ type, to, children }) {
    const navigate = useNavigate();

    const classes = types[type];
    return (
        <button
            className={`h-10.5 rounded-xls font-roboto text-sm ${classes}`}
            onClick={() => navigate(to)}
        >
            {children}
        </button>
    );
}

export default Button;
