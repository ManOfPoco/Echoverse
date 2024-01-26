import Avatar from "../../../components/Avatar";

import person from "../../../assets/img/person.jpg";

function MobileSideNavBarProfileMoreSvg({ username, displayName }) {
    return (
        <div className="flex w-full min-w-64 cursor-pointer items-center justify-between rounded-full bg-gray-clear/20 px-4 py-3 hover:bg-gray-clear/30">
            <div className="flex gap-2">
                <Avatar img={person} type="sm" />
                <div className="flex flex-col justify-between">
                    <h5 className="h-4 text-base">{username}</h5>
                    <span className="h-3.5 text-xs text-gray-clear">
                        @{displayName}
                    </span>
                </div>
            </div>
            <svg
                width="28px"
                height="28px"
                viewBox="0 0 24 24"
                className="fill-white"
                xmlns="http://www.w3.org/2000/svg"
            >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                    <rect width="28" height="28" fill="none"></rect>
                    <circle
                        cx="7"
                        cy="12"
                        r="0.5"
                        className="stroke-white stroke-2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    ></circle>
                    <circle
                        cx="12"
                        cy="12"
                        r="0.5"
                        className="stroke-white stroke-2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    ></circle>
                    <circle
                        cx="17"
                        cy="12"
                        r="0.5"
                        className="stroke-white stroke-2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    ></circle>
                </g>
            </svg>
        </div>
    );
}

export default MobileSideNavBarProfileMoreSvg;
