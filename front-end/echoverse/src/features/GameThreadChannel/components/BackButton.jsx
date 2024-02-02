import { useNavigate } from "react-router-dom";

function BackButton({ onClick = null }) {
    const navigate = useNavigate();

    return (
        <div
            className="h-full cursor-pointer px-2 py-2 sm:px-3 md:py-3"
            onClick={onClick ? onClick : () => navigate(-1)}
        >
            <svg
                className="h-6 w-6"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                transform="rotate(0)"
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
        </div>
    );
}

export default BackButton;
