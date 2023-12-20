import { Link } from "react-router-dom";
import logo from "../assets/svg/logo.svg";

function Logo({ width = 271, height = 72 }) {
    return (
        <Link to="/">
            <img
                draggable="false"
                className="h-14 w-40 lg:h-16 lg:w-52 xl:h-20 xl:w-72"
                src={logo}
                alt="logo"
            />
        </Link>
    );
}

export default Logo;
