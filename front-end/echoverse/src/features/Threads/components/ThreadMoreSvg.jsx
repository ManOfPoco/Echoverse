function ThreadMoreSvg({ setReferenceElement, setIsMoreMenuOpen }) {
    return (
        <svg
            width="24px"
            height="24px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            ref={setReferenceElement}
            onClick={() =>
                setIsMoreMenuOpen((isMoreMenuOpen) => !isMoreMenuOpen)
            }
            className="group"
        >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
                <rect width="24" height="24" fill="none"></rect>
                <circle
                    cx="7"
                    cy="12"
                    r="0.5"
                    className="stroke-gray-clear group-hover:stroke-white"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                ></circle>
                <circle
                    cx="12"
                    cy="12"
                    r="0.5"
                    className="stroke-gray-clear group-hover:stroke-white"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                ></circle>
                <circle
                    cx="17"
                    cy="12"
                    r="0.5"
                    className="stroke-gray-clear group-hover:stroke-white"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                ></circle>
            </g>
        </svg>
    );
}

export default ThreadMoreSvg;
