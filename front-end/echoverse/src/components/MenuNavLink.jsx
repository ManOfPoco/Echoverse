import { NavLink } from "react-router-dom";

function MenuNavLink({ link, end, title }) {
    return (
        <NavLink
            className={({ isActive }) => `
            ${
                isActive ? "border-b-4 border-blue-light" : ""
            } w-full text-center sm:w-fit`}
            to={link}
            end={end}
            key={title}
        >
            <h5 className="px-2 pb-2 pt-4 text-xl">{title}</h5>
        </NavLink>
    );
}

export default MenuNavLink;
