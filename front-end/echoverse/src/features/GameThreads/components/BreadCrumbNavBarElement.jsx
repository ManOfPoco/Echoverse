import { NavLink } from "react-router-dom";

function BreadCrumbNavBarElement({ to, title, end = true }) {
    return (
        <NavLink
            to={to}
            className={({ isActive }) =>
                `${isActive ? "" : "text-gray-light"} truncate`
            }
            end={end}
        >
            {title}
        </NavLink>
    );
}

export default BreadCrumbNavBarElement;
