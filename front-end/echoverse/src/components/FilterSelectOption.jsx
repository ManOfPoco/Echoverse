function FilterSelectOption({ option, isSelected, onClick }) {
    return (
        <div
            className={`px-2.5 py-1 rounded-xls ${
                isSelected
                    ? "outline outline-2 outline-majorelle-blue bg-gray-dark"
                    : "bg-gray-charcoal"
            }`}
            onClick={onClick}
        >
            {option}
        </div>
    );
}

export default FilterSelectOption;
