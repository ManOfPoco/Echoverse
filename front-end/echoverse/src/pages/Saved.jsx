import { useReducer } from "react";

import SavedPost from "../features/Saved/components/SavedPost";
import PostsFilters from "../features/Saved/components/PostsFilters";

const savedPosts = [
    {
        title: "Game Title 1",
        description:
            "Description for Game Title 1Description for Game Title 1Description for Game Title 1Description for Game Title 1Description for Game Title 1Description for Game Title 1Description for Game Title 1Description for Game Title 1Description for Game Title 1Description for Game Title 1iption for Game Title 1Description for Game Title 1Description for Game Title 1Description for Game Title 1Description for Game Title 1",
        username: "User123",
        lastMessage: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        lastMessageUsername: "AnotherUser456",
        categories: ["Adventure", "Action", "RPG"],
        postedAgo: "5 hours ago",
        messagesQuantity: 10,
    },
    {
        title: "Game Title 2",
        description: "Description for Game Title 2",
        username: "Gamer456",
        lastMessage:
            "Vestibulum in tellus eu arcu accumsan auctor vitae sed nibh.",
        lastMessageUsername: "RandomUser789",
        categories: [
            "Strategy",
            "Simulation",
            "Indie",
            "Adventure",
            "Action",
            "RPG",
            "Puzzle",
            "Casual",
            "Mobile",
        ],
        postedAgo: "2 hours ago",
        messagesQuantity: 2,
    },
    {
        title: "Game Title 3",
        description: "Description for Game Title 3",
        username: "PlayGameNow",
        lastMessage:
            "Curabitur tristique urna et cursus cursus. Sed sagittis nisi eget.",
        lastMessageUsername: "PlayerX",
        categories: ["FPS", "Multiplayer", "Online"],
        postedAgo: "8 hours ago",
        messagesQuantity: 10,
    },
    {
        title: "Game Title 4",
        description: "Description for Game Title 4",
        username: "GameMaster",
        lastMessage:
            "Pellentesque habitant morbi tristique senectus et netus et malesuada fames.",
        lastMessageUsername: "MasterGamer",
        categories: ["Puzzle", "Casual", "Mobile"],
        postedAgo: "3 hours ago",
        messagesQuantity: 33,
    },
    {
        title: "Game Title 5",
        description: "Description for Game Title 5",
        username: "GamingFanatic",
        lastMessage:
            "Maecenas sed ante nec augue commodo accumsan eu at ligula.",
        lastMessageUsername: "FanaticPlayer",
        categories: ["Sports", "Racing", "Arcade"],
        postedAgo: "1 hour ago",
        messagesQuantity: 52,
    },
    {
        title: "Game Title 6",
        description: "Description for Game Title 6",
        username: "ArcadePlayer",
        lastMessage:
            "Vivamus vel turpis vel quam tempus efficitur ut a ligula.",
        lastMessageUsername: "ArcadeLover",
        categories: ["Casual", "Indie", "Singleplayer"],
        postedAgo: "7 hours ago",
        messagesQuantity: 10,
    },
    {
        title: "Game Title 7",
        description: "Description for Game Title 7",
        username: "GameEnthusiast",
        lastMessage:
            "Integer ullamcorper quam eu elit lacinia, eu feugiat ligula tempus.",
        lastMessageUsername: "EnthusiasticGamer",
        categories: ["Simulation", "Strategy", "Tycoon"],
        postedAgo: "4 hours ago",
        messagesQuantity: 61,
    },
    {
        title: "Game Title 8",
        description: "Description for Game Title 8",
        username: "OnlineGamer",
        lastMessage:
            "Suspendisse potenti. Nullam et justo et felis bibendum laoreet nec.",
        lastMessageUsername: "GamerOnline",
        categories: ["MMORPG", "Fantasy", "Adventure"],
        postedAgo: "6 hours ago",
        messagesQuantity: 21,
    },
    {
        title: "Game Title 9",
        description: "Description for Game Title 9",
        username: "IndieDev",
        lastMessage:
            "Nam consectetur nisi sit amet dictum elementum. Donec id convallis.",
        lastMessageUsername: "DevGamer",
        categories: ["Indie", "Adventure", "Pixel Art"],
        postedAgo: "9 hours ago",
        messagesQuantity: 444,
    },
    {
        title: "Game Title 10",
        description: "Description for Game Title 10",
        username: "GameExplorer",
        lastMessage:
            "Fusce at justo vel leo blandit rhoncus. Quisque eu mauris.",
        lastMessageUsername: "ExplorerGamer",
        categories: ["Action", "Shooter", "Sci-Fi"],
        postedAgo: "1 hour ago",
        messagesQuantity: 10,
    },
];

const tags = [
    "Valheim",
    "Roblox",
    "Satisfactory",
    "Counter Strike 2",
    "No way home",
    "Dead Island 2",
    "Far Cry 5",
];

const initialState = {
    openFilter: null,
    view: "list", // list, gallery
    sort: "lastActive", // lastActive, date
    tags,
    searchQuery: "",
    searchTags: tags,
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
                searchQuery: action.searchQuery,
                searchTags: action.searchFilters,
            };

        default:
            break;
    }
}

function Saved() {
    const [state, dispatch] = useReducer(reducer, initialState);
    const { view } = state;

    return (
        <>
            <PostsFilters state={state} dispatch={dispatch} />
            <div
                className={`mx-5 mt-4 gap-2 pb-10 lg:mx-0 ${
                    view === "list"
                        ? "flex flex-col"
                        : view === "gallery"
                          ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
                          : ""
                }`}
            >
                {savedPosts.map((savedPost) => (
                    <SavedPost
                        savedPost={savedPost}
                        view={view}
                        key={savedPost.username}
                    />
                ))}
            </div>
        </>
    );
}

export default Saved;
