import { NavLink } from "react-router-dom";

function SettingOption({ to, title }) {
    return (
        <NavLink
            className={({ isActive }) =>
                isActive ? "rounded-lg bg-gray-charcoal" : ""
            }
            to={to}
        >
            <div className="flex h-14 items-center rounded-lg hover:bg-gray-charcoal/20">
                <h5 className="w-40 cursor-pointer px-4 text-xl lg:w-48">
                    {title}
                </h5>
            </div>
        </NavLink>
    );
}

export default SettingOption;
