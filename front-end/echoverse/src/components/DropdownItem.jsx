import { Link } from "react-router-dom";
import NavLink from "../features/NavBar/components/NavLink";

function DropdownItem({
    isNavLink = true,
    link,
    enableGrayHover,
    enableCyanHover,
    children,
}) {
    return (
        <>
            {isNavLink ? (
                <NavLink
                    link={link}
                    enableGrayHover={enableGrayHover}
                    enableCyanHover={enableCyanHover}
                >
                    {children}
                </NavLink>
            ) : (
                <Link to={link} />
            )}
        </>
    );
}

export default DropdownItem;
