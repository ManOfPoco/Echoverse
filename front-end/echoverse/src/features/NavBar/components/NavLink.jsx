import { NavLink as ReactRouterNavLink } from "react-router-dom";

function NavLink({ link, children }) {
    return (
        <ReactRouterNavLink
            className={({ isActive }) =>
                isActive
                    ? "duration-400 text-cyan-300 transition-colors"
                    : "transition-colors duration-500 hover:text-cyan-200"
            }
            to={link}
        >
            {children}
        </ReactRouterNavLink>
    );
}

export default NavLink;
