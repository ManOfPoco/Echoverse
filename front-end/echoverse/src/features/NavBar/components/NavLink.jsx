import { NavLink as ReactRouterNavLink } from "react-router-dom";

function NavLink({ link, children }) {
    return (
        <ReactRouterNavLink
            className={({ isActive }) =>
                `${
                    isActive
                        ? "text-cyan-300 transition-colors duration-300"
                        : "transition-colors duration-300"
                } rounded-lg hover:bg-gray-clear/30`
            }
            to={link}
        >
            {children}
        </ReactRouterNavLink>
    );
}

export default NavLink;
