import { NavLink as ReactRouterNavLink } from "react-router-dom";

function NavLink({
    link,
    children,
    enableGrayHover = true,
    enableCyanHover = true,
}) {
    return (
        <ReactRouterNavLink
            className={({ isActive }) =>
                `${
                    isActive
                        ? `${enableGrayHover && "hover:bg-gray-clear/30"} ${
                              enableCyanHover &&
                              "text-cyan-300 transition-colors duration-300"
                          }
                          `
                        : `${enableGrayHover && "hover:bg-gray-clear/30"} ${
                              enableCyanHover &&
                              "transition-colors duration-300 hover:text-cyan-300"
                          }`
                }`
            }
            to={link}
        >
            {children}
        </ReactRouterNavLink>
    );
}

export default NavLink;
