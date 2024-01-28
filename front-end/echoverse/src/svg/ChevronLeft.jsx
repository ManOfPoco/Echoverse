function ChevronLeft({ width = 24, height = 24, stroke, onClick }) {
    return (
        <svg
            className="cursor-pointer"
            width={`${width}px`}
            height={`${height}px`}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            transform="rotate(0)"
            onClick={onClick}
        >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
                <path
                    stroke={`${stroke}`}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.4"
                    d="M14 5l-7 7 7 7"
                ></path>
            </g>
        </svg>
    );
}

export default ChevronLeft;
