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
        <div className="flex w-64 gap-1 rounded-md bg-gray-charcoal px-2 py-1 transition-all duration-300 focus-within:w-96 focus-within:ring-1 focus-within:ring-inset focus-within:ring-blue">
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
