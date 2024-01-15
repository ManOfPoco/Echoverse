import { Link } from "react-router-dom";

function SideNavBarElement({ link, img, alt }) {
    return (
        <Link to={link}>
            <img draggable="false" className="h-7 w-7" src={img} alt={alt} />
        </Link>
    );
}

export default SideNavBarElement;
