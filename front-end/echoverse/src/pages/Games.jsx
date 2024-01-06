import { useReducer } from "react";

import GameFilters from "../features/Games/components/GameFilters";
import GameCards from "../features/UserGames/components/GameCards";

import arcadeGamingRoom from "../assets/img/arcadeGamingRoom.png";
import cs2 from "../assets/img/cs2.png";
import satisfactory from "../assets/img/satisfactory.png";
import lethalCompany from "../assets/img/lethalCompany.png";
import detroitBecomeHuman from "../assets/img/detroitBecomeHuman.png";
import gasStationSimulator from "../assets/img/gasStationSimulator.png";

const tags = [
    "Valheim",
    "Roblox",
    "Satisfactory",
    "Counter Strike 2",
    "No way home",
    "Dead Island 2",
    "Far Cry 5",
];

const platforms = [
    "PC",
    "PS",
    "Xbox",
    "Switch",
    "Steam Deck",
    "iOS",
    "Android",
    "MacOS",
];

const games = [
    {
        title: "Counter Strike 2",
        img: cs2,
        selectedPlatforms: ["PC", "Xbox", "Switch"],
        platforms: ["PC", "Xbox", "Switch", "Mobile", "PS"],
        steamLink: "https://store.steampowered.com/app/730/CounterStrike_2/",
        presentInProfile: false,
    },
    {
        title: "Detroit: Become Human",
        img: detroitBecomeHuman,
        selectedPlatforms: ["PC", "PS", "Xbox"],
        platforms: ["PC", "Xbox", "Switch", "Mobile", "PS"],
        steamLink:
            "https://store.steampowered.com/app/1222140/Detroit_Become_Human/",
        presentInProfile: true,
    },
    {
        title: "Satisfactory",
        img: satisfactory,
        selectedPlatforms: ["PC"],
        platforms: ["PC", "Xbox", "Switch", "Mobile", "PS"],
        steamLink: "https://store.steampowered.com/app/526870/Satisfactory/",
        presentInProfile: false,
    },
    {
        title: "Lethal Company",
        img: lethalCompany,
        selectedPlatforms: ["PC", "PS", "Xbox"],
        platforms: ["PC", "Xbox", "Switch", "Mobile", "PS"],
        steamLink: "https://lethalcompany.com/",
        presentInProfile: true,
    },
    {
        title: "Valorant",
        img: "valorant",
        selectedPlatforms: ["PC"],
        platforms: ["PC", "Xbox", "Switch", "Mobile", "PS"],
        steamLink: "https://playvalorant.com/",
        presentInProfile: false,
    },
    {
        title: "Gas Station Simulator",
        img: gasStationSimulator,
        selectedPlatforms: ["PC"],
        platforms: ["PC", "Xbox", "Switch", "Mobile", "PS"],
        steamLink:
            "https://store.steampowered.com/app/1149620/Gas_Station_Simulator/",
        presentInProfile: false,
    },
];

const initialState = {
    openFilter: null,
    tags,
    platforms,
    selectedTags: [],
    selectedPlatforms: [],
    searchFiltersQuery: "",
    searchGamesQuery: "",
    searchTags: tags,
    searchPlatforms: platforms,
};

function reducer(state, action) {
    switch (action.type) {
        case "setOpenFilter": {
            if (state.openFilter === action.filter) {
                return { ...state, openFilter: null };
            }

            return {
                ...state,
                openFilter: action.filter,
            };
        }

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

        case "setPlatforms": {
            if (state.selectedPlatforms.includes(action.platform)) {
                return {
                    ...state,
                    selectedPlatforms: [
                        ...state.selectedPlatforms.filter(
                            (platform) => platform !== action.platform
                        ),
                    ],
                };
            }

            return {
                ...state,
                selectedPlatforms: [
                    ...state.selectedPlatforms,
                    action.platform,
                ],
            };
        }

        case "setSearchFiltersQuery": {
            if (state.openFilter === "Tags")
                return {
                    ...state,
                    searchFiltersQuery: action.searchQuery,
                    searchTags: action.searchFilters,
                };
            return {
                ...state,
                searchFiltersQuery: action.searchQuery,
                searchPlatforms: action.searchFilters,
            };
        }

        case "setSearchQuery":
            return { ...state, searchGamesQuery: action.searchGamesQuery };

        default:
            break;
    }
}

function Games() {
    const [state, dispatch] = useReducer(reducer, initialState);

    function handleRequest(e) {
        if (e.key === "Enter") {
            console.log("request");
        }
    }

    return (
        <div className="h-full min-h-[calc(100dvh-72px)] max-w-full bg-black-night lg:min-h-[calc(100dvh-80px)] xl:min-h-[calc(100dvh-126px)]">
            <div className="w-full max-w-[1080px] lg:mx-auto">
                <div className="absolute flex h-60 w-full max-w-[1080px] items-center bg-black-dark/50 backdrop-blur-sm md:h-[448px] md:bg-black-dark/50 md:backdrop-blur">
                    <h3 className="mx-auto text-center font-monoton text-3xl leading-10 tracking-wide text-turquoise md:max-w-[70%] md:text-5xl md:leading-[64px]">
                        Evolve your gaming experience with the right people
                    </h3>
                </div>
                <img
                    draggable={false}
                    src={arcadeGamingRoom}
                    alt="arcadeGamingRoom"
                    className="h-60 w-full md:h-[448px]"
                />

                <GameFilters
                    state={state}
                    dispatch={dispatch}
                    handleRequest={handleRequest}
                />

                <div className="mt-5 mx-5 lg:mx-0">
                    <h5 className="text-xl">Popular Games</h5>
                    <GameCards games={games.slice(0, 3)} showPlatforms={false} />
                </div>
                <div className="mt-5 mx-5 lg:mx-0">
                    <h5 className="text-xl">Featured Games</h5>
                    <GameCards games={games.slice(3, 6)} showPlatforms={false} />
                </div>
            </div>
        </div>
    );
}

export default Games;
