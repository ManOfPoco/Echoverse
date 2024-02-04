import { useNavigate } from "react-router-dom";

function BackButton({ onClick = null }) {
    const navigate = useNavigate();

    return (
        <svg
            className="mx-2 max-h-6 min-h-6 min-w-6 max-w-6 md:mx-3 cursor-pointer"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            transform="rotate(0)"
            onClick={onClick ? onClick : () => navigate(-1)}
        >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                    className="stroke-white"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.4"
                    d="M14 5l-7 7 7 7"
                ></path>
            </g>
        </svg>
    );
}

export default BackButton;
