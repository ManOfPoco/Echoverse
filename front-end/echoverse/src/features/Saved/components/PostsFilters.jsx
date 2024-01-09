import Filter from "../../../components/Filter";
import FilterOption from "../../../components/FilterSwitchOption";
import FilterSelectOptions from "../../../components/FilterSelectOptions";

import sortFilter from "../../../assets/svg/sortFilter.svg";
import sortArrowsFilter from "../../../assets/svg/sortArrowsFilter.svg";
import tag from "../../../assets/svg/tag.svg";

function PostsFilters({ state, dispatch }) {
    const { openFilter, sort, view, tags, searchTags, selectedTags } = state;

    function handleOpenFilter(filter) {
        dispatch({ type: "setOpenFilter", filter: filter });
    }

    function handleSetView(option) {
        dispatch({ type: "setView", view: option });
    }

    function handleSetSort(option) {
        dispatch({ type: "setSort", sort: option });
    }

    function handleSetTags(tag) {
        dispatch({ type: "setTags", tag });
    }

    return (
        <div className="mx-5 flex flex-wrap justify-between lg:mx-0 gap-y-2">
            <div className="flex flex-wrap gap-x-4 gap-y-2">
                <Filter
                    filterImg={sortArrowsFilter}
                    title="Sort"
                    isOpen={openFilter === "Sort"}
                    setIsOpen={() => handleOpenFilter("Sort")}
                    filtersWidth="w-56"
                    key="Sort"
                >
                    <FilterOption
                        option="Recently Active"
                        state={sort === "lastActive"}
                        onChange={() => handleSetSort("lastActive")}
                        key="Recently Active"
                    />
                    <FilterOption
                        option="Date Posted"
                        state={sort === "date"}
                        onChange={() => handleSetSort("date")}
                        key="Date Posted"
                    />
                </Filter>
                <Filter
                    filterImg={sortFilter}
                    title="View"
                    isOpen={openFilter === "View"}
                    setIsOpen={() => handleOpenFilter("View")}
                    filtersWidth="w-44"
                    key="View"
                >
                    <FilterOption
                        option="List"
                        state={view === "list"}
                        onChange={() => handleSetView("list")}
                        key="List"
                    />
                    <FilterOption
                        option="Gallery"
                        state={view === "gallery"}
                        onChange={() => handleSetView("gallery")}
                        key="Gallery"
                    />
                </Filter>
            </div>
            <Filter
                filterImg={tag}
                title="Select tags"
                isOpen={openFilter === "Select tags"}
                setIsOpen={() => handleOpenFilter("Select tags")}
                filterView="line"
                filters={tags}
                dispatch={dispatch}
                placement="bottom-end"
                filtersWidth="w-80"
                key="Tags"
            >
                <FilterSelectOptions
                    searchOptions={searchTags}
                    selectedOptions={selectedTags}
                    handleSetOptions={handleSetTags}
                />
            </Filter>
        </div>
    );
}

export default PostsFilters;
