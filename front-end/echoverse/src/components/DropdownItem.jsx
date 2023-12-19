import { Link } from "react-router-dom";
import NavLink from "../features/NavBar/components/NavLink";

function DropdownItem({ isNavLink = false, link, children }) {
    return (
        <>
            {isNavLink ? (
                <NavLink isNavLink={isNavLink} link={link}>
                    {children}
                </NavLink>
            ) : (
                <Link to={link}></Link>
            )}
        </>
    );
}

export default DropdownItem;
