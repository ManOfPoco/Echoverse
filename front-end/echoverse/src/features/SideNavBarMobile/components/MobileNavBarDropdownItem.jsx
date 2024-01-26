import { Link } from "react-router-dom";

function MobileNavBarDropdownItem({ img, alt, to, title }) {
    return (
        <Link to={to}>
            <div className="w-full cursor-pointer hover:bg-gray-clear/30">
                <div className="flex items-center gap-3 px-4 py-2">
                    <img src={img} className="h-7 w-7" alt={alt} />
                    <span>{title}</span>
                </div>
            </div>
        </Link>
    );
}

export default MobileNavBarDropdownItem;
