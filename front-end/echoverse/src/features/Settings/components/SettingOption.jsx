import { NavLink } from "react-router-dom";

function SettingOption({ to, icon, title }) {
    return (
        <NavLink
            className={({ isActive }) =>
                isActive ? "rounded-lg bg-gray-charcoal" : ""
            }
            to={to}
        >
            <div className="flex h-12 items-center gap-4 rounded-lg px-4 hover:bg-gray-charcoal/20">
                <img draggable={false} src={icon} className="h-7 w-7" />
                <h5 className="w-40 cursor-pointer text-lg sm:w-48 lg:w-56">
                    {title}
                </h5>
            </div>
        </NavLink>
    );
}

export default SettingOption;
