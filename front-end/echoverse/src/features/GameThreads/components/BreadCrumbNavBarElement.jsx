import { NavLink } from "react-router-dom";

function BreadCrumbNavBarElement({ to, title }) {
    return (
        <NavLink
            to={to}
            className={({ isActive }) => (isActive ? "" : "text-gray-light")}
            end
        >
            {title}
        </NavLink>
    );
}

export default BreadCrumbNavBarElement;
