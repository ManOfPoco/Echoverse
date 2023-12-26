import { useNavigate } from "react-router-dom";
import SearchForm from "../../../components/SearchForm";

function Menu({ action, username }) {
    const navigate = useNavigate();

    return (
        <>
            <div className="flex justify-center gap-14">
                <h2
                    className={`cursor-pointer border-blue-light px-2 pb-2 pt-4 text-xl ${
                        action === "games" && "border-b-4"
                    }`}
                    onClick={() => navigate(`/${username}`)}
                >
                    Games
                </h2>
                <h2
                    className={`cursor-pointer border-blue-light px-2 pb-2 pt-4 text-xl ${
                        action === "saved" && "border-b-4"
                    }`}
                    onClick={() => navigate(`/${username}/saved`)}
                >
                    Saved
                </h2>

                <div className="absolute hidden h-14 w-full max-w-[1080px] flex-col items-end justify-center px-5 md:flex lg:px-0">
                    <SearchForm />
                </div>
            </div>
            <div className="flex flex-col pt-5 items-center md:hidden">
                <SearchForm />
            </div>
        </>
    );
}

export default Menu;
