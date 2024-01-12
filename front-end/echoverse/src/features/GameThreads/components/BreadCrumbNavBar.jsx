import { NavLink } from "react-router-dom";
import chat from "../../../assets/svg/chat.svg";

function BreadCrumbNavBar({ game }) {
    return (
        <div className="flex items-center gap-2 border-b border-black-dark px-2 py-2 shadow-lg md:px-3 md:py-3">
            <img src={chat} className="h-7 w-7" />
            <div className="flex items-center truncate text-lg">
                <NavLink to="/explore/threads" className="text-gray-light">
                    Threads
                </NavLink>
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
                <NavLink
                    to={`/explore/threads/${game}`}
                    className={({ isActive }) =>
                        isActive ? "" : "text-gray-light"
                    }
                >
                    {game}
                </NavLink>
            </div>
        </div>
    );
}

export default BreadCrumbNavBar;
