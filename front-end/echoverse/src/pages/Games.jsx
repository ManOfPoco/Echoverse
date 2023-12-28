import { useReducer } from "react";
import { useOutletContext } from "react-router-dom";

import cs2 from "../assets/img/cs2.png";
import satisfactory from "../assets/img/satisfactory.png";
import lethalCompany from "../assets/img/lethalCompany.png";
import detroitBecomeHuman from "../assets/img/detroitBecomeHuman.png";
import gasStationSimulator from "../assets/img/gasStationSimulator.png";

import Menu from "../features/Profile/components/Menu";
import GameCard from "../features/Games/components/GameCard";
import EditGamePlatformsModal from "../features/Games/components/EditGamePlatformsModal";

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
    selectedGame: null,
    selectedGamePlatforms: [],
    platforms: [],
    isEditGamePlatformsModalOpen: false,
};

function reducer(state, action) {
    switch (action.type) {
        case "openEditGamePlatformsModal":
            return {
                ...state,
                selectedGame: action.game,
                selectedGamePlatforms: action.selectedPlatforms,
                platforms: action.platforms,
                isEditGamePlatformsModalOpen: true,
            };

        case "closeEditGamePlatformsModal":
            return {
                ...state,
                isEditGamePlatformsModalOpen: false,
            };

        default:
            break;
    }
}

function Games() {
    const [state, dispatch] = useReducer(reducer, initialState);
    const {
        selectedGame,
        platforms,
        selectedGamePlatforms,
        isEditGamePlatformsModalOpen,
    } = state;

    return (
        <>
            <EditGamePlatformsModal
                game={selectedGame}
                platforms={platforms}
                selectedGamePlatforms={selectedGamePlatforms}
                isEditGamePlatformsModalOpen={isEditGamePlatformsModalOpen}
                dispatch={dispatch}
            />

            <div className="mt-10 grid grid-cols-1 gap-5 px-3 pb-10 md:grid-cols-2 md:px-0 lg:grid-cols-3">
                {games.map((game) => (
                    <GameCard
                        game={game}
                        dispatch={dispatch}
                        key={game.title}
                    />
                ))}
            </div>
        </>
    );
}

export default Games;
