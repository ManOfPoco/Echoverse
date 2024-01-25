import { NavLink } from "react-router-dom";

function BreadCrumbNavBarElement({ to, title, truncate = true, end = true }) {
    return (
        <NavLink
            to={to}
            className={({ isActive }) =>
                `${isActive ? "" : "text-gray-light"} ${truncate && "truncate"}`
            }
            end={end}
        >
            {title}
        </NavLink>
    );
}

export default BreadCrumbNavBarElement;
