import { Link } from "react-router-dom";
import logo from "../assets/svg/logo.svg";

function Logo({ classes }) {
    return (
        <Link to="/">
            <img
                draggable="false"
                className={`h-14 w-40 ${classes}`}
                src={logo}
                alt="logo"
            />
        </Link>
    );
}

export default Logo;
