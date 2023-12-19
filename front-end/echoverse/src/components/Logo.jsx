import { Link } from "react-router-dom";
import logo from "../assets/svg/logo.svg";

function Logo({ width = 271, height = 72 }) {
    return (
        <Link to="/">
            <img
                draggable="false"
                width={width}
                height={height}
                src={logo}
                alt="logo"
            />
        </Link>
    );
}

export default Logo;
