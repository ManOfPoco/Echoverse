function TrashCan({
    width = 24,
    height = 24,
    className = "fill-white",
    onClick,
}) {
    return (
        <div onClick={onClick}>
            <svg
                width={`${width}px`}
                height={`${height}px`}
                viewBox="0 0 48 48"
                xmlns="http://www.w3.org/2000/svg"
                // fill="#ffffff"
                className={className}
            >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                    <title>trash-solid</title>
                    <g id="Layer_2" data-name="Layer 2">
                        <g id="invisible_box" data-name="invisible box">
                            <rect width="48" height="48" fill="none"></rect>
                        </g>
                        <g id="icons_Q2" data-name="icons Q2">
                            <path d="M43,8.8a2.3,2.3,0,0,1-.6,1.6A1.7,1.7,0,0,1,41,11H7.1A2.1,2.1,0,0,1,5,9.2a2.3,2.3,0,0,1,.6-1.6A1.7,1.7,0,0,1,7,7H17V5a2,2,0,0,1,2-2H29a2,2,0,0,1,2,2V7h9.9A2.1,2.1,0,0,1,43,8.8Z"></path>
                            <path d="M11.2,15h0a2,2,0,0,0-2,2.2l2.6,26a2,2,0,0,0,2,1.8H34.2a2,2,0,0,0,2-1.8l2.6-26a2,2,0,0,0-2-2.2H11.2Z"></path>
                        </g>
                    </g>
                </g>
            </svg>
        </div>
    );
}

export default TrashCan;
