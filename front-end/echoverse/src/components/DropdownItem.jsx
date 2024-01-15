import { Link } from "react-router-dom";
import NavLink from "../features/NavBar/components/NavLink";

function DropdownItem({ isNavLink = true, link, children }) {
    return (
        <>
            {isNavLink ? (
                <NavLink link={link}>
                    {children}
                </NavLink>
            ) : (
                <Link to={link}></Link>
            )}
        </>
    );
}

export default DropdownItem;
