import { Link } from "react-router-dom";

import logoIconOnly from "../../../assets/svg/logoIconOnly.svg";

function LogoIconOnly() {
    return (
        <Link to="/">
            <img
                draggable="false"
                className="h-12 w-12"
                src={logoIconOnly}
                alt="logo"
            />
        </Link>
    );
}

export default LogoIconOnly;
