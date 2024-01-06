import Filter from "../../../components/Filter";
import FilterSwitchOption from "../../../components/FilterSwitchOption";
import FilterSelectOption from "../../../components/FilterSelectOption";

import sortFilter from "../../../assets/svg/sortFilter.svg";
import controllerWhite from "../../../assets/svg/controllerWhite.svg";
import SearchForm from "../../../components/SearchForm";

function GameFilters({ state, dispatch, handleRequest }) {
    const {
        openFilter,
        tags,
        platforms,
        selectedTags,
        selectedPlatforms,
        searchGamesQuery,
        searchTags,
        searchPlatforms,
    } = state;

    function handleOpenFilter(filter) {
        dispatch({ type: "setOpenFilter", filter: filter });
    }

    function handleSetTags(tag) {
        dispatch({ type: "setTags", tag });
    }

    function handleSetPlatforms(platform) {
        dispatch({ type: "setPlatforms", platform });
    }

    return (
        <div className="mx-5 flex flex-wrap justify-between lg:mx-0">
            <div className="flex flex-wrap justify-center gap-x-4">
                <Filter
                    filterImg={sortFilter}
                    title="Filter by tags"
                    isOpen={openFilter === "Tags"}
                    setIsOpen={() => handleOpenFilter("Tags")}
                    filterView="line"
                    filters={tags}
                    dispatch={dispatch}
                    filterShowSide="right"
                    filtersWidth="w-80"
                    key="Tags"
                >
                    {searchTags.map((tag) => (
                        <FilterSelectOption
                            option={tag}
                            isSelected={selectedTags.includes(tag)}
                            onClick={() => handleSetTags(tag)}
                            key={tag}
                        />
                    ))}
                </Filter>
                <Filter
                    filterImg={controllerWhite}
                    title="Filter by platforms"
                    isOpen={openFilter === "Platform"}
                    setIsOpen={() => handleOpenFilter("Platform")}
                    filterView="line"
                    filters={platforms}
                    dispatch={dispatch}
                    filterShowSide="right"
                    filtersWidth="w-80"
                    key="Platform"
                >
                    {searchPlatforms.map((platform) => (
                        <FilterSelectOption
                            option={platform}
                            isSelected={selectedPlatforms.includes(platform)}
                            onClick={() => handleSetPlatforms(platform)}
                            key={platform}
                        />
                    ))}
                </Filter>
            </div>
            <div className="mt-4 mx-auto md:mx-0">
                <SearchForm
                    query={searchGamesQuery}
                    onChange={(e) =>
                        dispatch({
                            type: "setSearchQuery",
                            searchGamesQuery: e.target.value,
                        })
                    }
                    handleRequest={handleRequest}
                />
            </div>
        </div>
    );
}

export default GameFilters;
