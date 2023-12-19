import { NavLink as ReactRouterNavLink } from "react-router-dom";

function NavLink({ link, children }) {
    return (
        <ReactRouterNavLink
            className={({ isActive }) => (isActive ? "text-cyan-300 transition-colors duration-400" : "hover:text-cyan-200 transition-colors duration-400")}
            to={link}
        >
            {children}
        </ReactRouterNavLink>
    );
}

export default NavLink;
