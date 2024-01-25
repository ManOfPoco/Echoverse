import { Link } from "react-router-dom";

function MobileSideNavBarElement({ link, img, alt, title }) {
    return (
        <Link to={link} className="w-fit">
            <div className="flex items-center w-fit ps-4 pe-6 py-3 rounded-full gap-4 hover:bg-gray-clear/30">
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
