import FilterSelectOption from "./FilterSelectOption";

function FilterSelectOptions({
    searchOptions,
    selectedOptions,
    handleSetOptions,
}) {
    return (
        <>
            {searchOptions.map((tag) => (
                <FilterSelectOption
                    option={tag}
                    isSelected={selectedOptions.includes(tag)}
                    onClick={() => handleSetOptions(tag)}
                    key={tag}
                />
            ))}
        </>
    );
}

export default FilterSelectOptions;
