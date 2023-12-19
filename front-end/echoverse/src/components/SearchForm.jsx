import { useEffect, useState } from "react";
import search from "../assets/svg/search.svg";

function SearchForm({ placeholder = "Search" }) {

    const [query, setQuery] = useState('')

    function handleSubmit(e) {
        if (e.key === 'Enter') {
            console.log(1);

        }
    }
    
    return (
        <div className="bg-gray-charcoal flex w-64 gap-1 rounded-md px-2 py-1 focus-within:ring-1 focus-within:ring-inset focus-within:ring-blue focus-within:w-96 focus-within:text-base transition-all duration-300">
            <img width="22" height="22" src={search} alt="search" />
            <input
                type="text"
                placeholder={placeholder}
                className="bg-gray-charcoal w-full rounded-md border-0 px-1 font-roboto outline-none"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={(e) => handleSubmit(e)}
            />
        </div>
    );
}

export default SearchForm;
