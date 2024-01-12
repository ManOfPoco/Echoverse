import { useReducer } from "react";

const initialState = {
    openFilter: null,
    view: "list", // list, gallery
    sort: "lastActive", // lastActive, date
    tags: [],
    searchTagsQuery: "",
    searchTags: [],
    selectedTags: [],
};

function reducer(state, action) {
    switch (action.type) {
        case "setOpenFilter":
            if (state.openFilter === action.filter)
                return { ...state, openFilter: null };
            return { ...state, openFilter: action.filter };

        case "setView":
            return { ...state, view: action.view };

        case "setSort":
            return { ...state, sort: action.sort };

        case "setTags": {
            if (state.selectedTags.includes(action.tag)) {
                return {
                    ...state,
                    selectedTags: [
                        ...state.selectedTags.filter(
                            (tag) => tag !== action.tag
                        ),
                    ],
                };
            }

            return {
                ...state,
                selectedTags: [...state.selectedTags, action.tag],
            };
        }

        case "setSearchFiltersQuery":
            return {
                ...state,
                searchTagsQuery: action.searchTagsQuery,
                searchTags: action.searchFilters,
            };

        default:
            break;
    }
}

export default function useGameThreads(tags = []) {
    const [state, dispatch] = useReducer(reducer, {
        ...initialState,
        tags,
        searchTags: tags,
    });

    return [state, dispatch];
}
