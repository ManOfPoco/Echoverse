import { useEffect, useReducer, useState } from "react";
import { usePopper } from "react-popper";
import { Transition } from "@headlessui/react";

import SearchForm from "./SearchForm";

import dropdownArrowDown from "../assets/svg/dropdownArrowDown.svg";

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
    filterView = "list", // list, line, date
    filters = null,
    dispatch = null,
    placement = "bottom-start",
    filtersWidth = "w-56",
    children,
}) {
    const [state, filtersDispatch] = useReducer(reducer, {
        ...initialState,
        filters,
        searchFilters: filters,
    });
    const { searchQuery, searchFilters } = state;

    const [referenceElement, setReferenceElement] = useState(null);
    const [popperElement, setPopperElement] = useState(null);
    const { styles, attributes } = usePopper(referenceElement, popperElement, {
        placement: placement,
    });

    useEffect(
        function () {
            if (filterView === "line")
                dispatch({
                    type: "setSearchFiltersQuery",
                    searchTagsQuery: searchQuery,
                    searchFilters,
                });
        },
        [filterView, dispatch, searchQuery, searchFilters]
    );

    useEffect(() => {
        function closeFilter(e) {
            const isHeadLessUiModalOpen =
                document.getElementById("headlessui-portal-root") !== null;
            const isDateModalOpen =
                document.getElementsByClassName("react-datepicker__portal")
                    .length !== 0;
            const isModalOpen = isHeadLessUiModalOpen || isDateModalOpen;

            if (
                referenceElement &&
                isOpen &&
                !referenceElement.contains(e.target) &&
                !popperElement.contains(e.target) &&
                !isModalOpen
            )
                setIsOpen(false);
        }
        document.addEventListener("mousedown", closeFilter);

        return () => {
            document.removeEventListener("mousedown", closeFilter);
        };
    }, [referenceElement, popperElement, isOpen, setIsOpen]);

    function handleSetSearchQueryTags(e) {
        filtersDispatch({
            type: "setQueryFilters",
            searchQuery: e.target.value,
            dispatch,
        });
    }

    return (
        <div>
            <div className="z-20">
                <div
                    className="flex max-w-fit cursor-pointer items-center rounded-xls bg-gray-dark px-2.5 py-1.5 lg:mx-0"
                    onClick={setIsOpen}
                    ref={setReferenceElement}
                >
                    <img
                        draggable={false}
                        src={filterImg}
                        alt="sortFilter"
                        className="h-4 w-4"
                    />
                    <div className="flex ps-2.5">
                        <h5>{title}</h5>
                        <img src={dropdownArrowDown} alt="arrowDown" />
                    </div>
                </div>
            </div>
            <div className="relative z-40">
                <Transition
                    show={isOpen}
                    enter="transition ease-out duration-300"
                    enterFrom="transform opacity-0"
                    enterTo="transform opacity-100"
                    leave="transition ease-in duration-300"
                    leaveFrom="transform opacity-100"
                    leaveTo="transform opacity-0"
                >
                    {filterView === "list" && (
                        <div
                            className={`mt-1 flex flex-col gap-5 rounded-lg bg-gray-dark px-5 py-2.5 shadow-xl ${filtersWidth}`}
                            ref={setPopperElement}
                            style={styles.popper}
                            {...attributes.popper}
                        >
                            {children}
                        </div>
                    )}
                    {filterView === "line" && (
                        <div
                            className={`mt-1 flex flex-wrap gap-3.5 rounded-lg bg-gray-dark px-5 py-2.5 shadow-xl ${filtersWidth}`}
                            ref={setPopperElement}
                            style={styles.popper}
                            {...attributes.popper}
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
                    )}
                    {filterView === "date" && (
                        <div
                            className={`mt-1 flex flex-col gap-5 rounded-lg bg-gray-dark px-5 py-2.5 shadow-xl ${filtersWidth}`}
                            ref={setPopperElement}
                            style={styles.popper}
                            {...attributes.popper}
                        >
                            {children}
                        </div>
                    )}
                </Transition>
            </div>
        </div>
    );
}

export default Filter;
