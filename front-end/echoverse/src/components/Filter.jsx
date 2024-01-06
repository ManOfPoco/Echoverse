import { useEffect, useReducer } from "react";
import { Transition } from "@headlessui/react";

import dropdownArrowDown from "../assets/svg/dropdownArrowDown.svg";
import SearchForm from "./SearchForm";

const initialState = {
    filters: [],
    searchQuery: "",
    searchFilters: [],
};

function reducer(state, action) {
    switch (action.type) {
        case "setQueryFilters": {
            const startWithFilters = state.filters.filter((filter) =>
                filter
                    .toLowerCase()
                    .startsWith(action.searchQuery.toLowerCase())
            );

            const includeFilters = state.filters.filter((filter) =>
                filter.toLowerCase().includes(action.searchQuery.toLowerCase())
            );

            const searchFilters = [
                ...new Set(startWithFilters.concat(includeFilters)),
            ];

            return {
                ...state,
                searchQuery: action.searchQuery,
                searchFilters: [...searchFilters],
            };
        }

        default:
            break;
    }
}

function Filter({
    filterImg,
    title,
    isOpen,
    setIsOpen,
    filterView = "list", // list, line
    filters,
    dispatch,
    filterShowSide = "left", //left, right
    filtersWidth = "w-56",
    children,
}) {
    const [state, filtersDispatch] = useReducer(reducer, {
        ...initialState,
        filters,
        searchFilters: filters,
    });
    const { searchQuery, searchFilters } = state;

    useEffect(
        function () {
            dispatch({
                type: "setSearchFiltersQuery",
                searchQuery: searchQuery,
                searchFilters,
            });
        },
        [dispatch, searchQuery, searchFilters]
    );

    const showSide = {
        left: "right-0",
        right: "right-auto",
    };

    function handleSetSearchQueryTags(e) {
        filtersDispatch({
            type: "setQueryFilters",
            searchQuery: e.target.value,
            dispatch,
        });
    }

    return (
        <div>
            <div
                className="mt-4 flex max-w-fit cursor-pointer items-center rounded-xls bg-gray-dark px-2.5 py-1.5 lg:mx-0"
                onClick={setIsOpen}
            >
                <img src={filterImg} alt="sortFilter" className="h-4 w-4" />
                <div className="flex ps-2.5">
                    <h5>{title}</h5>
                    <img src={dropdownArrowDown} alt="arrowDown" />
                </div>
            </div>
            <Transition
                show={isOpen}
                enter="transition ease-out duration-300"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-300"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                {filterView === "list" && (
                    <div
                        className={`absolute right-auto top-full z-40 mt-1 flex flex-col gap-5 rounded-lg bg-gray-dark px-5 py-2.5 shadow-xl ${filtersWidth}`}
                    >
                        {children}
                    </div>
                )}
                {filterView === "line" && (
                    <>
                        <div
                            className={`absolute ${showSide[filterShowSide]} top-full z-40 mt-1 flex flex-wrap gap-3.5 rounded-lg bg-gray-dark px-5 py-2.5 shadow-xl ${filtersWidth}`}
                        >
                            <span className="w-full pb-2">
                                <SearchForm
                                    type="full"
                                    query={searchQuery}
                                    onChange={(e) =>
                                        handleSetSearchQueryTags(e)
                                    }
                                />
                            </span>
                            {children}
                        </div>
                    </>
                )}
            </Transition>
        </div>
    );
}

export default Filter;
