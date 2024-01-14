function BreadCrumbDivider() {
    return (
        <svg
            width="4"
            height="8"
            aria-hidden="true"
            className="mx-3 overflow-visible text-slate-400"
        >
            <path
                d="M0 0L4 4L0 8"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
            ></path>
        </svg>
    );
}

export default BreadCrumbDivider;
