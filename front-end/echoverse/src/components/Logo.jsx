import { Link } from "react-router-dom";
import logo from "../assets/svg/logo.svg";

function Logo({ classes, isLinkRequired = true }) {
    return (
        <>
            {isLinkRequired ? (
                <Link to="/">
                    <img
                        draggable="false"
                        className={`h-14 w-40 ${classes}`}
                        src={logo}
                        alt="logo"
                    />
                </Link>
            ) : (
                <img
                    draggable="false"
                    className={`h-14 w-40 ${classes}`}
                    src={logo}
                    alt="logo"
                />
            )}
        </>
    );
}

export default Logo;
