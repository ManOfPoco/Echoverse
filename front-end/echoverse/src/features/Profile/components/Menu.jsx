import { NavLink } from "react-router-dom";

import SearchForm from "../../../components/SearchForm";

function Menu({ username }) {

    return (
        <>
            <div className="flex justify-center">
                <div className="z-10 flex gap-14">
                    <NavLink
                        className={({ isActive }) =>
                            isActive ? "border-b-4 border-blue-light" : ""
                        }
                        to={`/${username}`}
                        end
                    >
                        <h5 className="cursor-pointer  px-2 pb-2 pt-4 text-xl">
                            Games
                        </h5>
                    </NavLink>
                    <NavLink
                        className={({ isActive }) =>
                            isActive ? "border-b-4 border-blue-light" : ""
                        }
                        to={`/${username}/saved`}
                    >
                        <h5 className="cursor-pointer  px-2 pb-2 pt-4 text-xl">
                            Saved
                        </h5>
                    </NavLink>
                </div>

                <div className="absolute hidden h-14 w-full max-w-[1080px] items-center justify-end px-5 md:flex lg:px-0">
                    <SearchForm />
                </div>
            </div>
            <div className="flex flex-col items-center pt-5 md:hidden">
                <SearchForm />
            </div>
        </>
    );
}

export default Menu;
