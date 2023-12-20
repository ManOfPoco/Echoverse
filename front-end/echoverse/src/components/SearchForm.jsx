import { useState } from "react";
import search from "../assets/svg/search.svg";

function SearchForm({ placeholder = "Search" }) {
    const [query, setQuery] = useState("");

    function handleRequest(e) {
        if (e.key === "Enter") {
            console.log(1);
        }
    }

    return (
        <div className="xl:w-80 xl:focus-within:w-96 flex w-48 gap-1 rounded-md bg-gray-charcoal px-2 py-1 transition-all duration-300 focus-within:w-56 focus-within:ring-1 focus-within:ring-inset focus-within:ring-blue md:w-48 md:focus-within:w-64 lg:w-64 lg:focus-within:w-72">
            <img
                draggable="false"
                className="h-5.5 w-5.5"
                src={search}
                alt="search"
            />
            <input
                type="text"
                placeholder={placeholder}
                className="w-full rounded-md border-0 bg-gray-charcoal px-1 font-roboto outline-none"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={(e) => handleRequest(e)}
            />
        </div>
    );
}

export default SearchForm;
