import Filter from "../../../components/Filter";
import FilterSwitchOption from "../../../components/FilterSwitchOption";
import FilterSelectOption from "../../../components/FilterSelectOption";

import sortFilter from "../../../assets/svg/sortFilter.svg";
import controllerWhite from "../../../assets/svg/controllerWhite.svg";
import SearchForm from "../../../components/SearchForm";
import FilterSelectOptions from "../../../components/FilterSelectOptions";

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
        <div className="mx-5 mt-5 flex flex-wrap justify-between gap-y-2 lg:mx-0">
            <div className="flex w-full flex-col flex-wrap items-center justify-center gap-x-4 gap-y-2 md:w-fit sm:flex-row">
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
                    <FilterSelectOptions
                        searchOptions={searchTags}
                        selectedOptions={selectedTags}
                        handleSetOptions={handleSetTags}
                    />
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
                    <FilterSelectOptions
                        searchOptions={searchPlatforms}
                        selectedOptions={selectedPlatforms}
                        handleSetOptions={handleSetPlatforms}
                    />
                </Filter>
            </div>

            <div className="flex h-9 w-full justify-center md:w-fit">
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
