function SearchNewThreadTag({ tag, onClick }) {
    return (
        <div
            className="z-40 cursor-pointer rounded-xls bg-gray-charcoal px-2.5 py-1"
            onClick={onClick}
        >
            {tag}
        </div>
    );
}

export default SearchNewThreadTag;
