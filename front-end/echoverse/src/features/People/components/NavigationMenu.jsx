import { NavLink } from "react-router-dom";

function NavigationMenu() {
    return (
        <div className="flex w-full gap-1 rounded-lg bg-black-night text-center text-xl">
            <NavLink
                to="history"
                className={({ isActive }) =>
                    `${
                        isActive
                            ? "bg-majorelle-blue p-1"
                            : "hover:bg-gray-dark"
                    } my-1 ms-1 basis-1/2 rounded-lg p-1`
                }
            >
                History
            </NavLink>
            <NavLink
                to="for-you"
                className={({ isActive }) =>
                    `${
                        isActive ? "bg-majorelle-blue p-1" : "hover:bg-gray-dark"
                    } my-1 me-1 basis-1/2 rounded-lg p-1`
                }
            >
                For you
            </NavLink>
        </div>
    );
}

export default NavigationMenu;
