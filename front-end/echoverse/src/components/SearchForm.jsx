import search from "../assets/svg/search.svg";

const searchTypes = {
    base: "xl:w-80 flex w-48 gap-1 rounded-md bg-gray-charcoal px-2 py-1 transition-all duration-300 focus-within:ring-1 focus-within:ring-inset focus-within:ring-blue-light md:w-48 lg:w-64",
    full: "w-full flex gap-1 rounded-md bg-gray-charcoal px-2 py-1 focus-within:ring-1 focus-within:ring-inset focus-within:ring-blue-light",
};

const resizeTypes = {
    base: "focus-within:w-56 md:focus-within:w-60 lg:focus-within:w-72 xl:focus-within:w-96",
};

function SearchForm({
    placeholder = "Search",
    type = "base",
    roundness = "rounded-md",
    resize = true,
    children,
    query,
    onChange,
    handleRequest,
}) {
    const searchType = searchTypes[type] || searchTypes["base"];
    const resizeType = resize === true ? resizeTypes[type] : "";

    return (
        <div className={`${searchType} ${resizeType} ${roundness}`}>
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
                onChange={onChange}
                onKeyDown={handleRequest}
            />
            {children}
        </div>
    );
}

export default SearchForm;
