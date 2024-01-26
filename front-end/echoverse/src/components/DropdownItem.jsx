import { Link } from "react-router-dom";
import NavLink from "../features/NavBar/components/NavLink";

function DropdownItem({
    itemType = "link", // link, action

    // link props
    isNavLink = true,
    link,
    enableGrayHover,
    enableCyanHover,

    // action props
    onClick,
    className,

    children,
}) {
    return (
        <>
            {itemType === "link" && (
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
            )}
            {itemType === "action" && (
                <>
                    <div className="hover:bg-gray-clear/30" onClick={onClick}>
                        <div className={`px-4 py-3 font-medium ${className}`}>
                            {children}
                        </div>
                    </div>
                </>
            )}
        </>
    );
}

export default DropdownItem;
