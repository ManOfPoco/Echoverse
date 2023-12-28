import { useState } from "react";

import Filter from "./Filter";
import FilterOption from "./FilterOption";

import sortFilter from "../../../../assets/svg/sortFilter.svg";
import sortArrowsFilter from "../../../../assets/svg/sortArrowsFilter.svg";
import tag from "../../../../assets/svg/tag.svg";

function Filters({ state, dispatch }) {
    const [isOpen, setIsOpen] = useState(false);
    const { openFilter, sort, view, tags } = state;

    function handleOpenFilter(filter) {
        dispatch({ type: "setOpenFilter", filter: filter });
    }

    function handleSetView(option) {
        console.log(option);
        dispatch({ type: "setView", view: option });
    }

    function handleSetSort(option) {
        dispatch({ type: "setSort", sort: option });
    }

    function handleSetTags(tags) {
        dispatch({ type: "setTags", tags });
    }

    return (
        <div className="mx-5 flex justify-between lg:mx-0 flex-wrap">
            <div className="flex gap-4">
                <Filter
                    filterImg={sortArrowsFilter}
                    title="Sort"
                    isOpen={openFilter === "Sort"}
                    setIsOpen={() => handleOpenFilter("Sort")}
                    filtersWidth='w-56'
                >
                    <FilterOption
                        option="Recently Active"
                        state={sort === "lastActive"}
                        onChange={() => handleSetSort("lastActive")}
                    />
                    <FilterOption
                        option="Date Posted"
                        state={sort === "date"}
                        onChange={() => handleSetSort("date")}
                    />
                </Filter>
                <Filter
                    filterImg={sortFilter}
                    title="View"
                    isOpen={openFilter === "View"}
                    setIsOpen={() => handleOpenFilter("View")}
                    filtersWidth='w-44'
                >
                    <FilterOption
                        option="List"
                        state={view === "list"}
                        onChange={() => handleSetView('list')}
                    />
                    <FilterOption
                        option="Gallery"
                        state={view === "gallery"}
                        onChange={() => handleSetView("gallery")}
                    />
                </Filter>
            </div>
            <Filter
                filterImg={tag}
                title="Select tags"
                isOpen={openFilter === "Select tags"}
                setIsOpen={() => handleOpenFilter("Select tags")}
                filtersWidth='w-40'
            >
                <FilterOption
                    option="Tag"
                    state={tags === "tag"}
                    onChange={() => handleSetTags("tag")}
                />
            </Filter>
        </div>
    );
}

export default Filters;
