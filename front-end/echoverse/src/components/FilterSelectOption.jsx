function FilterSelectOption({ option, isSelected, onClick }) {
    return (
        <div
            className={`z-40 cursor-pointer rounded-xls px-2.5 py-1 lg:hover:bg-gray-charcoal/50 lg:hover:outline lg:hover:outline-2 lg:hover:outline-majorelle-blue/80 ${
                isSelected
                    ? "bg-gray-dark outline outline-2 outline-majorelle-blue"
                    : "bg-gray-charcoal"
            }`}
            onClick={onClick}
        >
            {option}
        </div>
    );
}

export default FilterSelectOption;
