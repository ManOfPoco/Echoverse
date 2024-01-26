import { useReducer } from "react";

import EditGamePlatformsModal from "../features/UserGames/components/EditGamePlatformsModal";
import GameCards from "../features/Games/components/GameCards";

import cs2 from "../assets/img/cs2.png";
import satisfactory from "../assets/img/satisfactory.png";
import lethalCompany from "../assets/img/lethalCompany.png";
import detroitBecomeHuman from "../assets/img/detroitBecomeHuman.png";
import gasStationSimulator from "../assets/img/gasStationSimulator.png";
import ConfirmGameDeletionModal from "../features/Games/components/ConfirmGameDeletionModal";

const games = [
    {
        id: 1,
        title: "Counter Strike 2",
        img: cs2,
        selectedPlatforms: [
            { id: 1, name: "PC" },
            { id: 3, name: "Xbox" },
            { id: 4, name: "Switch" },
        ],
        platforms: [
            { id: 1, name: "PC" },
            { id: 3, name: "Xbox" },
            { id: 4, name: "Switch" },
            { id: 7, name: "Android" },
            { id: 8, name: "MacOS" },
        ],
        steamLink: "https://store.steampowered.com/app/730/CounterStrike_2/",
        presentInProfile: false,
    },
    {
        id: 2,
        title: "Detroit: Become Human",
        img: detroitBecomeHuman,
        selectedPlatforms: [
            { id: 4, name: "Switch" },
            { id: 5, name: "Steam Deck" },
            { id: 8, name: "MacOS" },
        ],
        platforms: [
            { id: 0, name: "Select Platform" },
            { id: 1, name: "PC" },
            { id: 4, name: "Switch" },
            { id: 5, name: "Steam Deck" },
            { id: 8, name: "MacOS" },
        ],
        steamLink:
            "https://store.steampowered.com/app/1222140/Detroit_Become_Human/",
        presentInProfile: true,
    },
    {
        id: 3,
        title: "Satisfactory",
        img: satisfactory,
        selectedPlatforms: [
            { id: 4, name: "Switch" },
            { id: 8, name: "MacOS" },
        ],
        platforms: [
            { id: 0, name: "Select Platform" },
            { id: 1, name: "PC" },
            { id: 3, name: "Xbox" },
            { id: 4, name: "Switch" },
            { id: 8, name: "MacOS" },
        ],
        steamLink: "https://store.steampowered.com/app/526870/Satisfactory/",
        presentInProfile: false,
    },
    {
        id: 4,
        title: "Lethal Company",
        img: lethalCompany,
        selectedPlatforms: [
            { id: 1, name: "PC" },
            { id: 2, name: "PS" },
        ],
        platforms: [
            { id: 0, name: "Select Platform" },
            { id: 1, name: "PC" },
            { id: 2, name: "PS" },
            { id: 8, name: "MacOS" },
        ],
        steamLink: "https://lethalcompany.com/",
        presentInProfile: true,
    },
    {
        id: 5,
        title: "Valorant",
        img: "valorant",
        selectedPlatforms: [
            { id: 1, name: "PC" },
            { id: 2, name: "PS" },
        ],
        platforms: [
            { id: 0, name: "Select Platform" },
            { id: 1, name: "PC" },
            { id: 2, name: "PS" },
            { id: 3, name: "Xbox" },
            { id: 4, name: "Switch" },
            { id: 5, name: "Steam Deck" },
        ],
        steamLink: "https://playvalorant.com/",
        presentInProfile: false,
    },
    {
        id: 6,
        title: "Gas Station Simulator",
        img: gasStationSimulator,
        selectedPlatforms: [
            { id: 4, name: "Switch" },
            { id: 6, name: "iOS" },
            { id: 7, name: "Android" },
        ],
        platforms: [
            { id: 0, name: "Select Platform" },
            { id: 1, name: "PC" },
            { id: 2, name: "PS" },
            { id: 4, name: "Switch" },
            { id: 6, name: "iOS" },
            { id: 7, name: "Android" },
        ],
        steamLink:
            "https://store.steampowered.com/app/1149620/Gas_Station_Simulator/",
        presentInProfile: false,
    },
];
const initialState = {
    selectedGame: {
        id: null,
        title: null,
        img: null,
        platforms: [],
        selectedPlatforms: [],
    },
    openModal: null,
};

function reducer(state, action) {
    switch (action.type) {
        case "openEditGamePlatformsModal":
            if (!action.game.id || !action.game.title) {
                return;
            }

            return {
                ...state,
                selectedGame: {
                    id: action.game.id,
                    title: action.game.title,
                    platforms: action.game.platforms,
                    selectedPlatforms: action.game.selectedPlatforms,
                },
                openModal: "edit-game-platforms",
            };

        case "closeEditGamePlatformsModal":
            return {
                ...state,
                openModal: null,
            };

        case "openConfirmDeleteGameFromLibraryModal":
            return {
                ...state,
                selectedGame: {
                    id: action.game.id,
                    title: action.game.title,
                    img: action.game.img,
                },
                openModal: "confirm-delete-game-form-library",
            };

        case "closeConfirmDeleteGameFromLibraryModal":
            return {
                ...state,
                openModal: null,
            };

        default:
            break;
    }
}

function UserGames() {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <>
            <EditGamePlatformsModal state={state} dispatch={dispatch} />
            <ConfirmGameDeletionModal state={state} dispatch={dispatch} />

            <GameCards games={games} showPlatforms={true} dispatch={dispatch} />
        </>
    );
}

export default UserGames;
