function MessageVideoPlayButton({ onClick }) {
    return (
        <div
            className="group absolute z-20 flex h-full w-full items-center justify-center"
            onClick={onClick}
        >
            <span className="min-w-fit rounded-full bg-black-dark/60 p-2 transition-colors group-hover:bg-black-dark/80 sm:p-3">
                <svg
                    className="fill-bg-platinum/60 group-hover:fill-bg-platinum/80"
                    fill="#ffffff"
                    viewBox="0 0 56 56"
                    xmlns="http://www.w3.org/2000/svg"
                    stroke="#ffffff"
                    width="20px"
                    height="20px"
                >
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g
                        id="SVGRepo_tracerCarrier"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                        <path d="M 13.0937 47.8398 C 14.0313 47.8398 14.8281 47.4648 15.7656 46.9258 L 43.0937 31.1289 C 45.0391 29.9805 45.7187 29.2305 45.7187 27.9883 C 45.7187 26.7461 45.0391 25.9961 43.0937 24.8711 L 15.7656 9.0508 C 14.8281 8.5118 14.0313 8.1602 13.0937 8.1602 C 11.3594 8.1602 10.2813 9.4727 10.2813 11.5118 L 10.2813 44.4649 C 10.2813 46.5039 11.3594 47.8398 13.0937 47.8398 Z"></path>
                    </g>
                </svg>
            </span>
        </div>
    );
}

export default MessageVideoPlayButton;
