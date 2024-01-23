import { Link } from "react-router-dom";

function MobileSideNavBarElement({ link, img, alt, title }) {
    return (
        <Link to={link}>
            <div className="flex items-center gap-4">
                <img
                    draggable="false"
                    className="h-7 w-7"
                    src={img}
                    alt={alt}
                />
                <h5>{title}</h5>
            </div>
        </Link>
    );
}

export default MobileSideNavBarElement;
